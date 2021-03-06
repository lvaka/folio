"""
Media Controller.

    This controllers handles creation of new media items.
"""
from flask import Blueprint, \
    request, \
    render_template, \
    redirect
from admin.decorators import login_required
from media.models import Media
from media.forms import MediaForm
from media.lib import ImageFactory, CleanupFiles
from PIL import Image
import folio
from folio.extensions import db

mediaController = Blueprint('media', __name__)


@mediaController.route('')
@login_required
def index():
    """List all media into template."""
    page = request.args.get('page')
    media = None

    if page:
        media = Media.query.paginate(page=int(page), per_page=1)
    else:
        media = Media.query.paginate()

    media_items = media.items

    return render_template('media/index.html',
                           media_items=media_items,
                           prev_num=media.prev_num,
                           next_num=media.next_num,
                           pages=media.pages,
                           page=media.page)


@mediaController.route('create', methods=['GET', 'POST'])
@login_required
def create():
    """Add Media to disk and db."""
    form = MediaForm()
    if request.method == 'POST' and form.validate():

        filename = form.file.data.filename
        alt = form.alt.data
        img = Image.open(form.file.data.stream)
        img = img.convert(mode='RGB')
        img_factory = ImageFactory(path=folio.PUBLIC_PATH,
                                   image=img,
                                   filename=filename)
        img_obj = img_factory.batch()
        media = Media(alt=alt,
                      full=img_obj.get('full'),
                      full_jpeg=img_obj.get('full_jpeg'),
                      large=img_obj.get('large'),
                      large_jpeg=img_obj.get('large_jpeg'),
                      med=img_obj.get('med'),
                      med_jpeg=img_obj.get('med_jpeg'),
                      thumb=img_obj.get('thumb'))
        db.session.add(media)
        db.session.commit()
        return redirect('/media-manager')

    return render_template('media/create.html')


@mediaController.route('delete/<int:media_id>', methods=['GET'])
@login_required
def delete(media_id):
    """Delete Media from disk and db."""
    media = Media.query.get(media_id)
    cleanup = CleanupFiles(media)
    cleanup.clean()
    db.session.delete(media)
    db.session.commit()

    return redirect('/media-manager')
