import os
from flask import Flask
from .main import main_bp
from .controllers.my_data_controller import data_bp

def create_app(test_config=None):
    app = Flask(__name__)
    env = os.environ.get('FLASK_APP_ENV', 'development')
    if env == 'development':
        from .config import DevelopmentConfig
        app.config.from_object(DevelopmentConfig)
    elif env == 'production':
        from .config import ProductionConfig
        app.config.from_object(ProductionConfig)
    else:
        raise ValueError("Invalid FLASK_APP_ENV environment variable.")
    
    app.register_blueprint(main_bp)
    app.register_blueprint(data_bp)

    return app