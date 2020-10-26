# Movie List
This application lists all films from [Studio Ghibli](http://www.ghibli.jp/), using the following REST API:
* https://ghibliapi.herokuapp.com/

This application serves a page on [localhost:8000/movies](). This page lists all movies from Ghibli API.

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
Compiles and minifies for production 
```shell script
npm run build
```

## Build Back-end

setting up venv

```shell script
python3 -m venv <your_venv>
source <your_venv>/bin/activate 
```

Install packages
```shell script
pip3 install -r requirements.txt
```
Run the application
```shell script
python3 backend/app.py
```
Testing
```shell script
pytest -v backend/tests
```
Testing with coverage
```shell script
pytest -v --cov-report term --cov=backend . 
```
