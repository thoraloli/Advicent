Follow the following steps to launch the application:
1. Install NodeJS. Download project, in a command line window change directory to “~…/advicent/app”. 
2. Run command “npm install” which will install dependencies defined in package.json.
3. Install MongoDB, create a database collection named “college_cost” on “localhost:27017”. Then use command “mongoimport -d advicent -c college_cost --type csv --file "C:\~…\college_costs.csv" --headerline” in MongoDB bin directory, to import the csv file.
4. Run command: “node app.js” to launch the application. 
