# UserInfoStoringMicroservice

Set up: To set up this microservice add firstTimeSaver.js as a script in your html file and add the ID “username-input” into your username input text element and “password-input” into your password input text element as well as “login-button” to the button users should click to login. For the response add the first-time-response id to a text field.

Request: To make a request click the login button on the html page and then firstTimeSaver.js will run a fetch request to /userInfo using the POST method. The body of this request is a json file containing an element called username that holds the username and one called password that contains the password.

Receive: To receive this data all you have to do is sort through the adjacent json file to search for the data you are looking for. Response from server
