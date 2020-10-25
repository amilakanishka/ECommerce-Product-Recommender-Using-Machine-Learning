import os
from flask import Flask, request, jsonify, render_template, redirect
from flask_sqlalchemy import SQLAlchemy

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.ext.declarative import declarative_base
from flask import Flask, request, jsonify, render_template, redirect
# import turicreate as tc

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "postgresql://Jupyter_User:test@127.0.0.1/scikits_liqure_db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

Base = declarative_base()
# db credentials to be moved to hide
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Product_Catogory = Base.classes.product_catogory
Product_Items = Base.classes.product_items
Store_Details = Base.classes.store_details


@app.route("/")
def home():
    session = Session(engine)
    storeResults = session.query(Store_Details.store_number,Store_Details.store_name).all()
    session.close()
    storeList = []    
    for store_number,store_name in storeResults:
        store = {}
        store["store_number"] = store_number
        store["store_name"] = store_name

        storeList.append(store)

    return render_template("index.html",storeList=storeList)

@app.route("/get_recommendations", methods=['GET'])
def get_recommendations():
    # call the model product recommendations for new user
    prod_list = []
    data = get_product_details(prod_list)
    return jsonify(data)

@app.route("/get_recommendations_for_store/<store_id>", methods=['GET'])
def get_recommendations_for_store(store_id):
    # call the model and get the recommendations  for user_id
    prod_list = []
    data = get_product_details(prod_list)
    return jsonify(data)    

def get_product_details(product_list):
    session = Session(engine)    
    results = session.query(Product_Items.item_number, Product_Items.item_description, Product_Items.category, Product_Items.cost, Product_Items.price, Product_Items.volume, Product_Items.image_url, Product_Catogory.category_name).filter(Product_Catogory.category == Product_Items.category,Product_Items.item_number.in_([76036, 86310,26613]) ).all()          
    session.close()    

    productsRec = []
    for item_number, item_description, category, cost, price, volume, image_url, category_name in results:
        product = {}
        product["item_number"] = item_number
        product["item_description"] = item_description   
        product["category"] = category
        product["cost"] = cost 
        product["price"] = price 
        product["volume"] = volume 
        product["image_url"] = image_url
        product["category_name"] = category_name            
        productsRec.append(product)    

    return productsRec  

@app.route("/get_product_categories", methods=['GET'])
def get_product_categories():
    session = Session(engine)    
    results = session.query(Product_Catogory.category, Product_Catogory.category_name).all()          
    session.close()    

    prodCat = []
    for category, category_name in results:
        cate = {}
        cate["category"] = category
        cate["category_name"] = category_name             
        prodCat.append(cate)    

    return jsonify(prodCat)       

@app.route("/team")
def team():
    return render_template("team.html")  

@app.route("/about")
def about():
    return render_template("about.html")     

if __name__ == '__main__':
    app.run()    