# ECommerce-Product-Recommender-Using-Machine-Learning

# Scikit Iowa Liquor Distributors

## High Level Project Concept 
Machine Learning Product Recommender for wholesale liquor outlets in Iowa USA.

## Successfully Completed
Built and deployed working machine learning website with a personalised product recommender based on data obtained from Google's machine learning public databases.

## Web App
We have deployed onto Heroku, please follow the link to the [product recommender web app](https://scikits-liquor.herokuapp.com/).

**Team members:**

- Amil Walgamage
- Jamie Tan
- Tas Tudor

![App](static/img/scikit_web.gif)

### How to read our code: ###

The repository contains the following folders:
Data folder which contains the ETL reference data loading and webscraping solution Jupyter Notebook.
Presentation folder contains the powerpoint presentation.
Folders containing Machine Learning notebooks and outputs 

Flask application related files in the main folder.
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

### To fire everything up....

1. Clone this repository

git clone https://github.com/amilakanishka/ECommerce-Product-Recommender-Using-Machine-Learning

2. Check the requirements.txt

$ pip install -r requirements.txt

3. You may need to install a virtual machine if you are on windows environment, click here for instructions from .....

4. Run the code - Google colab
   In order to query the Google Public Data set 'Iowa Liquor Retail Sales' via the Google colab, you need to create a Project_ID at Google Cloud Platform (https://console.cloud.google.com/cloud-resource-manager) and pass the project_ID via Google colab at the point querying the dataset and loading to the dataframe.

5. Deploy to Heroku

6. Recommend till your hearts content

### Snapshot of the toolbox used to build our app: ###

![workflow](static/img/Bootcamp_workflow_final.png)

### The Data Source

The was sourced from Google Cloud Platform.  The data "contains every wholesale purchase of liquor in the State of Iowa by retailers for sale to individuals since January 1, 2012. The State of Iowa controls the wholesale distribution of liquor intended for retail sale (off-premises consumption), which means this dataset offers a complete view of retail liquor consumption in the entire state. The dataset contains every wholesale order of liquor by all grocery stores, liquor stores, convenience stores, etc., with details about the store and location, the exact liquor brand and size, and the number of bottles ordered". ^

^ Google Cloud Console - Iowa Description of the data set, the [link is here](https://console.cloud.google.com/bigquery?project=elated-channel-281600&folder=&organizationId=&p=bigquery-public-data&d=iowa_liquor_sales&page=dataset).

The data was extracted using BigQuery & postgerSQL to get ready for data cleaning using Pandas in as a Jupyter Notebook.

### Web Scraping

Missing from the data were images to load up into the webpage.  These were scraped from the [Iowa Alcohol Beverage Division Shop](https://shop.iowaabd.com/) using Beautiful Soup and Selenium.

### Machine Learning

The machine learning library chosen was Turicreate.  This library was chosen as it is easy to use, fast and flexible.  It is predominately used for recommenders or image classification/similarity.

### Flask Application & Architecture

Please see the below image for how the Flask API and the project architechture.

![architecture](static/img/Architecture.png)

### Web App

The web app was built from scratch using HTML, CSS, Bootstrap & Javascript to make the calls on the Flask and then to the recommender.
