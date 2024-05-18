from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/about')
def about():
    return render_template('about.html')

@main_bp.route('/defi-basics')
def defi_basics():
    return render_template('defi_basics.html')

@main_bp.route('/avalanche')
def avalanche():
    return render_template('avalanche.html')

@main_bp.route('/mantle')
def mantle():
    return render_template('mantle.html')

@main_bp.route('/crypto-friendly-places')
def crypto_friendly_places():
    return render_template('crypto_friendly_places.html')

@main_bp.route('/blog')
def blog():
    return render_template('blog.html')
