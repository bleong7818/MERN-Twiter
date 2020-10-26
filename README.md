# README

[Live website](https://sleepy-shore-73079.herokuapp.com/)

MERN Twitter is a social media app for people who want to share their experiences and witness the world through other people's eyes. Users can log in, sign up, and log out. Logged in users are the only users able to access the site, and they can look at all tweets and their own tweets. They can also create tweets of their own.

MERN Twitter functions using a MERN stack, consisting of MongoDB, Express.js, React.js, and Node.js. Using the MERN stack allows for the utilization of Javascript in both the frontend and the backend, creating a smoother workflow that does not require transition between languages. A user, their tweets, and all of the tweets in the database are registered as NoSQL objects in the MongoDB. The Node.js scripts post and fetch this data from the backend and give it to the frontend, which is displayed using React. 

Specs
=============

Rails version: 5.2.4.4

Challenging Feature
=============

Creating MERN Twitter was a difficult process that really stretched me to my limits. I dealt with a wide variety of bugs that I had never seen before while also working with MongoDB for the first time. It took me over 10 hours to complete, but I am proud to have been able to work my way backwards after writing the code to find each of the bugs that were scattered throughout the code.

Instructions for how to run the suite
=============

Start out with running npm install in both the root directory and the frontend folder.

        npm install
        
Run npm run dev to boot up the two servers. Only the localhost:3000 should show the app.

        npm run dev
