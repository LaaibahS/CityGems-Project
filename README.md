#CITY GEMS UNDERGRADUATE PROJECT PACKAGE

####Description:
My web application is designed specifically for City St George's, university students and allows them to discover and explore new amenities close to the university, recommended by other students.
The main features include searching for and adding new amenities to the home page, getting directions to those amenities and seeing them on the in-app google maps, filtering amenities based on their type: food/study/activity amenities and finally adding reviews and ratings for the amenity.
This application was designeded with the intention of creating a community amonst students to help them find cheaper yet popular hangout spots and study spaces beyond the campus to enrich their university experience.

####File Structure
There are 2 main folders in my project:
a. "backend", which is coded in python using the Flask library
b. "frontend", which is coded in html, css and JavaScript using a React framework

Within the "backend" folder, i have 3 .py files: config.py (which creates the flask app and defines the SQLite database i'll use), models.py (which stores all the database models/entities which will be used to create the database tables) and finally main.py (used to create the database tables from models.py and contains the endpoint functions that will be called when my React frontend makes GET and POST requests).
I also have a requirements.txt file which contains all the dependencies needed to run my project.

Within the "fronted" folder, i have an src folder, which contains the .jsx and .css files used to build and render my react components (including App.jsx which is the parent component as well as main.jsx which renders App.jsx). The src folder is further divided into the components folder which stores the components for each page, pages folder which are parent components made up of the child components in the components folder and finally, the styles folder which are the global stylesheets for each of the different page components.
The "frontend" folder also contains package.json which includes all the dependencies needed to run the project
I have also included a .env.example folder which can be used to place your api keys needed to access the google maps.
The other files in the frontend folder are used for the configuration of the project and don't need to be touched.

I also have an 'instance' folder which contains my cityGems.db file which stores my tables

####Installation guide

First, we require 2 google apis keys in order to run the project.The following steps instruct you how to create your own api keys.

1. Go to google cloud console (https://cloud.google.com/cloud-console) and create an account or login if you already have one
2. click 'create a project' in the top left corner. A window will appear and in the top right of this window, you click 'New Project'.
3. fill in the details for the project, including the billing account. Then click 'create'
4. on the navigation bar on the left, go to 'APIs and Services' -> 'Credentials'
5. once you're on the credentials page, on the top of the page, there should be a 'create credentials' button. This opens a drop down menu which allows you to select which credentials you want. Click 'API key'
6. enter a name for your API key. Then, under 'API restrictions' select the following APIs: Places API, Places API (new), Maps Embed API and Maps JavaScript API. Then, under 'Application Restrictions', select 'websites'.
   Add the following websites:
   http://127.0.0.1:5174/\*
   http://localhost:5174/\*
   http://localhost:5173/\*
   http://127.0.0.1:5173/\*
7. Now that all the details have been filled, click 'create'. Once the API has been created, click 'show key' and copy and paste this key into the .env.example file for the VITE_GOOGLE_MAPS_API_KEY.
8. Once you've done this, create another API key, but this time, don't select Maps Embed API for the 'API restrictions'. Copy and paste this second key into the .env.example file for the VITE_GOOGLE_MAPS_API_KEY2

Now, I'll instruct you how to download and run my project.

1. Download the ZIP file from moodle onto your device and open it in VS Code
2. open the terminal and type the following commands, making sure you're in the CityGems Project folder:
   cd backend
   py -m venv venv (if this doesn't work, try python -m venv venv)
   venv/Scripts/activate
   pip install -r requirements.txt
   python main.py
3. open a new terminal and make sure you're in the CityGems Project folder. It would be best to have a split terminal here, but not necessary. Then run the following commands:
   cd frontend
   npm install
   npm run dev
4. this should provide a localhost link, which will direct you to a web page that hosts my web app.
