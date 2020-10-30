# ECommerce-Product-Recommender-Using-Machine-Learning

# Scikit Iowa Liquor Distributors

## High Level Project Concept 
Machine Learning Product Recommender for wholesale liquor outlets in Iowa USA.

## Successfully Completed
Built and deployed working machine learning website based on data obtained from Google's machine learning public databases.

## Web App
We have deployed onto Heroku, please follow the link to the [product recommender web app](https://scikits-liquor.herokuapp.com/).

**Team members:**

- Amil Walgamage
- Jamie Tan
- Tas Tudor

![App](static/img/scikit_web.gif)

### How to read our code: ###

The repository contains the following folders:
Data folder which contains the ETL solution on a Jupyter Notebook including the web-scraping
Presentation folder contains the powerpoint presentation
Folders containing Machine Learning notebooks and outputs 

Flask application related files in the main Project folder.
- app.py is the flask app which renders the data from the database
- config.py which contations configurations
- Procfile for Heroku deployment cnfigurations
- requirements.txt with all the requirements for deployment on Heroku
- a folder templates where sit the three webpages: index.html for the home page, about.html, team.html

### How to read our code: ###

The repository contains the following folders:
Data folder which contains the ETL solution on a Jupyter Notebook
Presentation folder contains the powerpoint presentation

Flask application related files in the main Project_2 folder.
- app.py is the flask app which renders the data from the database
- config.py which contations configurations
- Procfile for Heroku deployment cnfigurations
- requirements.txt with all the requirements for deployment on Heroku
- a folder templates where sit the three webpages: index.html for the home page, about.html, team.html
- a folder static where sit: css/img/js

In the js folder, you will find:
- config.js - app with passwords
- logic.js - code with the js functions rendering the visualisations
- script.js

### Snapshot of the toolbox used to build our app: ###

![workflow](static/img/Bootcamp_workflow_final.png)

### The Data Source

The was sourced from Google Cloud Platform.  The data "contains every wholesale purchase of liquor in the State of Iowa by retailers for sale to individuals since January 1, 2012. The State of Iowa controls the wholesale distribution of liquor intended for retail sale (off-premises consumption), which means this dataset offers a complete view of retail liquor consumption in the entire state. The dataset contains every wholesale order of liquor by all grocery stores, liquor stores, convenience stores, etc., with details about the store and location, the exact liquor brand and size, and the number of bottles ordered". ^

^ Google Cloud Console - Iowa Description of the data set, the [link is here](https://console.cloud.google.com/bigquery?project=elated-channel-281600&folder=&organizationId=&p=bigquery-public-data&d=iowa_liquor_sales&page=dataset).

The data was extracted using BigQuery & postgerSQL to get ready for data cleaning using Pandas in as a Jupyter Notebook.

### Web Scraping

Missing from the data were images to load up into the webpage.  These were scraped from the [Iowa Alcohol Beverage Division Shop](https://shop.iowaabd.com/) using Beautiful Soup and Selenium.

### Machine Learning


### Flask Application & Architecture

Please see the below image for how the Flask API and the project architechture.

![architecture](static/img/Architecture.png)

### Web App

