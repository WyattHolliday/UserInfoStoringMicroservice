var express = require('express')
var fs = require('fs')

var userdata = require('./userdata.json')

var app = express()
var port = process.env.PORT || 3000;

app.use(express.json())

app.use(express.static('public'))

app.post("/userInfo", function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    push = true
    for (var i = 0; i < Object.keys(userdata).length; i++) {
        if (userdata[i].username === username && userdata[i].password === password) {
            push = false
        }
    }
    if (push) {
        userdata.push({
            username: username,
            password: password
        })
        fs.writeFile('./userdata.json', JSON.stringify(userdata, null, 2), 
            function (err) {
                if (err) {
                    res.status(500).send("Error adding user to server file")
                } else {
                    res.status(200).send("user info of " + "'" + username + "'" + " stored in file")
                }
            }
        )
    } else {
        res.status(200).send("user info for " + "'" + username + "'" + " already stored")
    }
})

app.get("*", function(req, res) {
    res.status(200).sendFile(__dirname + "/public/html.html")
})

app.listen(port, function () {
    console.log("Server is listening on port", port)
})