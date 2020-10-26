# Movie List
This web application lists all  [Studio Ghibli](http://www.ghibli.jp/) productions, using the following REST API:
* https://ghibliapi.herokuapp.com/

Home page listing all movies from Ghibli API is accessible at :  [localhost:8000/movies](). 

## Technical environment

### Back-end
 * Language : Python 3.8  
 * Framework: Flask
 * Testing: pytest
 
### Front-end

* Framework: Vue.JS
* plugin: Vuetify


## Build Front-end

Change directory to **ui**
```shell script
cd ui 
```
Install packages 
```shell script
 npm install
```
Compile and minify for production 
```shell script
npm run build
```

## Build Back-end

Set up venv

```shell script
python3 -m venv <your_venv>
source <your_venv>/bin/activate 
```
or 
```shell script
python3 -m venv <your_venv>
source <your_venv>/Scripts/activate 
```

Install packages
```shell script
pip3 install -r requirements.txt
```
Run the application
```shell script
python3 backend/app.py
```
Test  the application
```shell script
pytest -v backend/tests
```
Test the application with coverage
```shell script
pytest -v --cov-report term --cov=backend . 
```
