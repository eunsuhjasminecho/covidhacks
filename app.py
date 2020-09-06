from flask import Flask, Response, render_template, request
import json
import random
import time
from datetime import datetime
import data

app = Flask(__name__,
          static_url_path='', #removes any preceding path from the URL (i.e. the default /static).
          static_folder='web/static', #to serve any files found in the folder web/static as static files.
          template_folder='web/templates',# similarly, this changes the templates folder.
          )
@app.route('/jobs', methods=['GET'])
def jobs():
    type = request.args.get("type", "it")
    jobs = data.typeToData[type]
    return render_template('page1.html', jobs=jobs, len=len(jobs))

@app.route('/', methods=['GET'])
def redirect_to_index():
    return app.send_static_file("graph.html")

if __name__ == '__main__':
    app.run()
