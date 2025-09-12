class Config:
    """Base configuration."""
    SECRET_KEY = 'my-super-secret'

class DevelopmentConfig(Config):
    """Development configuration."""
    DEBUG = True
    
    # 1. Disable caching for static files and templates
    # Prevents the browser from caching CSS, JS, etc.
    SEND_FILE_MAX_AGE_DEFAULT = 0
    TEMPLATES_AUTO_RELOAD = True
    
    # 2. Disable server-side caching from extensions (e.g., Flask-Caching)
    CACHE_TYPE = 'null' # or 'simple' for local dev


class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False
    
    # In production, you want caching enabled for performance
    SEND_FILE_MAX_AGE_DEFAULT = 3600 # 1 hour
    TEMPLATES_AUTO_RELOAD = False
    
    # Enable a production-ready cache
    CACHE_TYPE = 'redis'
    CACHE_REDIS_URL = 'redis://localhost:6379/0'