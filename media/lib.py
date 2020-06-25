"""Media Creation Library."""
import os
import datetime
import folio


class ImageFactory:
    """
    Image Factory class.

        Batch creates responsive images and inserts into db and
        batch deletes images and removes from db

        Methods:
    """

    def __init__(self, **kwargs):
        """
        Initialize class with kwargs.

            Kwargs:
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

    def process_image(self, max_length=None):
        """Start processing image."""
        img = self.image.copy()
        imgW, imgH = img.size
        is_landscape = imgW > imgH

        if max_length:
            if is_landscape and imgW > max_length:
                img = self.resize_landscape(img, imgW, imgH, max_length)

            elif imgH > max_length:
                img = self.resize_portrait(img, imgW, imgH, max_length)

        """
            If resized image is returned and is not falsey,
            generate new filepath, save, then close out files
        """
        name, extension = os.path.splitext(self.filename)

        if max_length:
            filename = name + '-' + str(max_length) + extension

        else:
            filename = name + '-full' + extension

        paths = self.save_img(img, filename)
        img.close()
        return paths

    def save_img(self, img, filename):
        """Save image by type."""
        name, extension = os.path.splitext(filename)
        webp_filename = name + '.webp'
        webp_filepath = os.path.join(self.save_path, webp_filename)
        jpeg_filename = name + '.jpg'
        jpeg_filepath = os.path.join(self.save_path, jpeg_filename)

        def webp_save():
            webp_img = img.copy()
            webp_img.save(webp_filepath, format="WebP")
            webp_img.close()

        def jpeg_save():
            jpeg_img = img.copy()
            jpeg_img.convert("RGB")
            jpeg_img.save(jpeg_filepath, format="JPEG")
            jpeg_img.close()

        webp_save()
        jpeg_save()

        return [os.path.join(self.save_uri, webp_filename),
                os.path.join(self.save_uri, jpeg_filename)]

    def resize_landscape(self, img, img_w, img_h, max_length):
        """Will resize image in landscape context."""
        dimensions = (max_length, int(max_length * img_h / img_w))
        return img.resize(dimensions)

    def resize_portrait(self, img, img_w, img_h, max_length):
        """Will resize image in portrait context."""
        dimensions = (int(max_length * img_w / img_h), max_length)
        return img.resize(dimensions)

    def generate_thumb(self):
        """Generate thumbnail for media."""
        thumb = self.image.copy()
        size = 200, 200
        thumb.thumbnail(size)
        name, extension = os.path.splitext(self.filename)
        thumbfilename = name + '-thmb' + '.jpg'
        thmb_path = os.path.join(self.save_path, thumbfilename)
        thumb.save(thmb_path, 'JPEG')
        thumb.close()
        self.thumb = os.path.join(self.save_uri, thumbfilename)

    def batch(self):
        """Generate batch images."""
        imgW, imgH = self.image.size
        self.full, self.full_jpeg = self.process_image(None)
        if imgW > 1200 or imgH > 1200:
            self.large, self.large_jpeg = self.process_image(1200)
        if imgW > 800 or imgH > 800:
            self.med, self.med_jpeg = self.process_image(800)
        self.generate_thumb()
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
    Clean Up File Class.

        Cleans up files.  Takes an instance of
        a Media model on init

        clean method removed files from disk
    """

    def __init__(self, media):
        """Init Class."""
        public_path = folio.PUBLIC_PATH

        media_list = [
            os.path.join(public_path, media.full),
            os.path.join(public_path, media.full_jpeg),
            os.path.join(public_path, media.thumb)
        ]

        if media.large:
            media_list.append(os.path.join(public_path, media.large))
            media_list.append(os.path.join(public_path, media.large_jpeg))

        if media.med:
            media_list.append(os.path.join(public_path, media.med))
            media_list.append(os.path.join(public_path, media.med_jpeg))

        self.mediaList = media_list

    def clean(self):
        """Delete media from disk."""
        for path in self.mediaList:
            if os.path.isfile(path):
                os.remove(path)
