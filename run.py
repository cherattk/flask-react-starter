import os
from backend import create_app

app = create_app()

if __name__ == '__main__':
    host = os.environ.get('FLASK_APP_HOST', '127.0.0.1')
    app.run(host=host, port=3000, debug=True)