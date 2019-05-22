from flask import Flask , render_template



app = Flask(__name__)


app.config.update({
	"STATIC_FOLDER" : "public/static",
	"TEMPLATE_FOLDER" : "public/template"
})

app.static_folder     =  app.config["STATIC_FOLDER"]
app.template_folder   =  app.config["TEMPLATE_FOLDER"]
app.config['DEFAULT'] = True


@app.route("/")
def index():

	return render_template("index.html")