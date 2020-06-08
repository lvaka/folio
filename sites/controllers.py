from flask import Blueprint, \
                request, \
                Response, \
                render_template, \
                redirect
from admin.decorators import login_required
from sites.models import Site
from folio import db

sitesController = Blueprint('sites', __name__)

@sitesController.route('')
@login_required
def index():
   """
      Index of Site Manager creates a list of 
      sites
   """
   page = request.args.get('page')
   sites = None

   if page:
      sites = Site.query.paginate(page=int(page), per_page=1)
   else:
      sites = Site.query.paginate()

   site_items = sites.items

   return render_template('sites/index.html',
                           media_items=site_items,
                           prev_num=sites.prev_num,
                           next_num=sites.next_num,
                           pages=sites.pages,
                           page=sites.page
                           )