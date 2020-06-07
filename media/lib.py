from PIL import Image
import os
import datetime
from folio import PUBLIC_PATH

class ImageFactory:

   def __init__(self, **kwargs):
      """
         Initialize class with kwargs
         path
         filename
         image      
      """
      now = datetime.datetime.now()
      self.path = kwargs.get('path')
      self.save_path = os.path.join(self.path, 
                                 'media',
                                 str(now.year),
                                 str(now.month))
      self.save_uri = os.path.join('media',
                                 str(now.year),
                                 str(now.month))
      self.image = kwargs.get('image')
      self.filename = kwargs.get('filename')
      self.full = None
      self.full_jpeg = None
      self.large = None
      self.large_jpeg = None
      self.med = None
      self.med_jpeg = None
      self.thumb = None

      if not os.path.isdir(self.save_path):
         os.makedirs(self.save_path)

   def processImage(self, max_length=None):
      """
         starts image process
      """
      img = self.image.copy()
      imgW, imgH = img.size
      isLandscape = imgW > imgH

      if max_length:
         if isLandscape and imgW > max_length:
            img = self.resizeLandscape(img, imgW, imgH, max_length)

         elif imgH > max_length:
            img = self.resizePortrait(img, imgW, imgH, max_length)

      """
         If resized image is returned and is not falsey,
         generate new filepath, save, then close out files
      """
      name, extension = os.path.splitext(self.filename)

      if max_length:
         filename =  name + '-' + str(max_length) + extension

      else:
         filename =  name + '-full' + extension


      paths = self.saveImg(img, filename)
      img.close()
      return paths

   def saveImg(self, img, fileName):
      """
         Saves Image by Type
      """
      name, extension = os.path.splitext(fileName)
      webpFilename = name + '.webp'
      webpFilepath = os.path.join(self.save_path, webpFilename)
      jpegFilename = name + '.jpg'
      jpegFilepath = os.path.join(self.save_path, jpegFilename)

      def WebPSave():
         webpImg = img.copy()
         webpImg.save(webpFilepath, format="WebP")
         webpImg.close()

      def JPEGSave():
         jpegImg = img.copy()
         jpegImg.convert("RGB")
         jpegImg.save(jpegFilepath, format="JPEG")
         jpegImg.close()

      WebPSave()
      JPEGSave()

      return [os.path.join(self.save_uri,webpFilename), 
         os.path.join(self.save_uri,jpegFilename)]

   def resizeLandscape(self, img, imgW, imgH, max_length):
      """
         will resize image in landscape context
      """
      dimensions = (max_length, int(max_length * imgH/imgW))
      return img.resize(dimensions)
      

   def resizePortrait(self, img, imgW, imgH, max_length):
      """
         will resize image in portrait context
      """
      dimensions = (int(max_length * imgW/imgH), max_length)
      return img.resize(dimensions)

   def generateThumb(self):
      """
         generates thumbnail for media
      """
      thumb = self.image.copy()
      size = 200, 200
      thumb.thumbnail(size)
      name, extension = os.path.splitext(self.filename)
      thumbfilename = name + '-thmb' + '.jpg'
      thmbPath = os.path.join(self.save_path, thumbfilename)
      thumb.save(thmbPath, 'JPEG')
      thumb.close()
      self.thumb = os.path.join(self.save_uri, thumbfilename)

   def batch(self):
      """
         Generate batch images
      """
      imgW, imgH = self.image.size
      self.full, self.full_jpeg = self.processImage(None)
      if imgW > 1200 or imgH > 1200:
         self.large, self.large_jpeg = self.processImage(1200)
      if imgW > 800 or imgH > 800:
         self.med, self.med_jpeg = self.processImage(800)
      self.generateThumb()
      self.image.close()
      return {
         'full': self.full,
         'full_jpeg': self.full_jpeg,
         'large': self.large,
         'large_jpeg': self.large_jpeg,
         'med': self.med,
         'med_jpeg': self.med_jpeg,
         'thumb': self.thumb
      }

class CleanupFiles:
   """
      Cleans up files.  Takes an instance of 
      a Media model on init

      clean method removed files from disk
   """
   
   def __init__(self, media):
      self.mediaList = [
         os.path.join(PUBLIC_PATH, media.full),
         os.path.join(PUBLIC_PATH, media.full_jpeg),
         os.path.join(PUBLIC_PATH, media.large),
         os.path.join(PUBLIC_PATH, media.large_jpeg),
         os.path.join(PUBLIC_PATH, media.med),
         os.path.join(PUBLIC_PATH, media.med_jpeg),
         os.path.join(PUBLIC_PATH, media.thumb)
      ]

   def clean(self):
      for path in self.mediaList:
         print(path)
         if os.path.isfile(path):
            os.remove(path)
