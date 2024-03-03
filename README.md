# Life Recorder (only back-end)
## Description
This project allow users to
- Save every day moments of your life
- Save todo lists
- Save events that occur in your life
## How to install and run the project
1. Clone this repository
2. Run npm install
3. Run node index.js
## Register
Call Post /users/register with json data attached in body for example\
{\
  user_name:"username",\
  password:"password",\
  email:"email"\
}
## Log in
Call Post /users/login with json data attached in body for example\
{\
  user_name:"username",\
  password:"password",\
}
## Daily Log
Daily log is used for save any experience of your life
### End point
- Get /logs\
  Get all logs for the owner
- Get /logs/:id\
  Get specific log
- Post /logs\
  Save log with json data attacged in body for example\
  {\
    "content": "I got 0 point on final exam"\
    ,"date": "12 Dec 2023 GMT"\
}
- PUT /logs/:id\
  Edit log information with same data structure as post method
- Delete /logs/:id\
  Delete specific log
## Todo-list
Todo-list is used for save to-do list
### End point
- Get /todos\
  Get all todo list for the owner
- Get /todos/:id\
  Get specific todo list
- Post /todos\
  Save todo list with json data attached in body for example\
  {\
    "title": "req.body.title"\
    ,"description": "req.body.description"\
    ,duedate: "12 Dec 2023 GMT"\
    ,priority: 0\
    ,status:0\
  }\
**Noted status 0 means pending and 1 means completed If this todo is more urgent you can put a higher number**
- PUT /todos/:id\
  Edit todo list information with same data structure as post method
- Delete /todos/:id\
  Delete specific todo list
## Calendar Event
Calendar is used for save any event of your life
### End point
- Get /events\
  Get all events for the owner
- Get /events/:id\
  Get specific event
- Post /events\
  Save log with json data attached in body for example\
{\
    "title": "click camp"\
        ,"description": "work hard mark 2"\
        ,"start_date": "12 Dec 2023 GMT"\
        ,"end_date": "12 Dec 2023 GMT"\   
}
- PUT /events/:id\
  Edit event information with same data structure as post method
- Delete /events/:id\
  Delete specific event      
