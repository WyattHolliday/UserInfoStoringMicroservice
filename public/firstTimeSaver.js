window.onload = function() {
    button = document.getElementById("login-button")
    button.addEventListener("click", function() {
        username = document.getElementById("username-input").value
        password = document.getElementById("password-input").value
        responseElement = document.getElementById("first-time-response")
        document.getElementById("username-input").value = ""
        document.getElementById("password-input").value = ""
        fetch("/userInfo", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function (res) {
          if (res.status === 200) {
            res.text().then(function (text) {
              responseElement.value = text
            })
          } else {
            responseElement.value = "error: " + res.status
            console.log("error: " + res.status)
          }
        }).catch(function (err) {
          responseElement.value = "error: " + err
          console.log("error: " + err)
        })
    })
}