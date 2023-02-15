# UserInfoStoringMicroservice

Set up: To set up this microservice add firstTimeSaver.js as a script in your html file and add the ID “username-input” into your username input text element and “password-input” into your password input text element as well as “login-button” to the button users should click to login. For the response add the first-time-response id to a text field.

Request: To make a request click the login button on the html page and then firstTimeSaver.js will run a fetch request to /userInfo using the POST method to FTserver.js. The body of this request is a json file containing an element called username that holds the username and one called password that contains the password.

Receive: When finished uploading information, FTserver.js will send a response back to firstTimeSaver.js about how the process went. This will include a string of text that will imform on if the user was already in the system or not and if there was an error. firstTimeSaver.js will then take the response and put it in the html element first-time-response for the user to see. If not already on userdata.json the server will also put it in.

![assignment8_UML_v2](https://user-images.githubusercontent.com/100888637/218936625-1a10398e-aaac-440f-9f9d-fb9ff78c0c02.png)
