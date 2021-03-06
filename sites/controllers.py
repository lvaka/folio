"""Sites Controller."""
from flask import Blueprint,\
    render_template,\
    request,\
    redirect,\
    jsonify
from PIL import Image
from admin.decorators import login_required
import folio
from folio.extensions import db
from media.lib import ImageFactory
from media.models import Media
from sites.models import Site
from sites.forms import SiteForm

sitesController = Blueprint('sites', __name__)


def process_file(file, alt):
    """Process file from field into image."""
    img = Image.open(file.stream)
    filename = file.filename
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
    return media


@sitesController.route('')
@login_required
def index():
    """
    Site Manager Index.

        Creates a list of
        sites.
    """
    sites = Site.query.order_by(Site.id.desc()).all()

    return render_template('sites/index.html',
                           sites=sites)


@sitesController.route('list-sites', methods=['GET'])
def list():
    """Return Sites in JSON Format."""
    page = request.args.get('page')
    sites = None

    if page:
        sites = Site.query.order_by(Site.id.desc()).paginate(page=int(page),
                                                             per_page=3)

    else:
        sites = Site.query.order_by(Site.id.desc()).paginate(per_page=3)

    site_items = []

    for site in sites.items:
        site_serialized = site.serialize
        featured = site.featured.serialize \
            if site.featured else None
        site_serialized['featured'] = featured
        site_items.append(site_serialized)

    resp = jsonify({
        "site_items": site_items,
        "prev_num": sites.prev_num,
        "next_num": sites.next_num,
        "pages": sites.pages,
        "page": sites.page
    })

    resp.status_code = 200

    return resp


@sitesController.route('site/<string:slug>', methods=['GET'])
def single(slug):
    """Return Single Site Based on ID."""
    site = Site.query.filter_by(slug=slug).first()
    site_serialized = site.serialize
    featured = site.featured.serialize \
        if site.featured else None

    site_serialized['featured'] = featured

    resp = jsonify(site_serialized)
    resp.status_code = 200

    return resp


@sitesController.route('create', methods=['GET', 'POST'])
@login_required
def create():
    """
    Site Create Page.

        Serve form and process form.
    """
    form = SiteForm(request.form)
    if request.method == 'POST' and form.validate():
        site = Site(title=form.title.data,
                    url=form.url.data,
                    content=form.content.data)

        # Handle Media.
        media = None
        featured = request.files['featured']
        if featured:
            media = process_file(featured,
                                 form.alt.data)

        if media:
            media.sites.append(site)
            db.session.add(media)
        else:
            db.session.add(site)

        db.session.commit()

        return redirect('/site-manager')

    return render_template('sites/create.html')


@sitesController.route('edit/<int:id>', methods=['GET', 'POST'])
@login_required
def edit(id):
    """Edit Site."""
    site = Site.query.get(id)
    form = SiteForm(request.form)

    if request.method == 'POST' and form.validate():
        site.title = form.title.data
        site.url = form.url.data
        site.content = form.content.data

        # Handle Media.
        media = None
        featured = request.files['featured']
        if featured:
            media = process_file(featured,
                                 form.alt.data)

        if media:
            media.sites.append(site)
            db.session.add(media)
        else:
            db.session.add(site)

        db.session.commit()

        return redirect('/site-manager')

    return render_template('sites/edit.html',
                           site=site)


@sitesController.route('delete/<int:id>', methods=['GET'])
@login_required
def delete(id):
    """Delete Site from DB."""
    site = Site.query.get(id)
    db.session.delete(site)
    db.session.commit()

    return redirect('/site-manager')
