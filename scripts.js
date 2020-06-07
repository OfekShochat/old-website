function sendMessagemaybe() {
    var msg = document.getElementById("msg").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    if  (msg!="") {
        if (email!="" && email.includes("@") && email.includes(".")) {
            if (name!="") {
                sendMessage()
            }
        }
        else {
            document.getElementById("email").placeholder = "enter valid email";
            alert("enter valid email", 2)
        }
    }
}

function sendMessage() {
  console.log(msg)
  var msg = document.getElementById("msg").value;
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var request = new XMLHttpRequest();
  var content = name + ": sent you a message from " + email + ".\n" + msg;
  console.log(content)
  request.open("POST", "https://discord.com/api/webhooks/719183031541432380/N_JvkHjMU7evNfsEknW6J77c-JWF9yhzhadr6G-A_2Dtm-SFk9l8KM8TTZB-PQP84i_u");

  request.setRequestHeader('Content-type', 'application/json');
  var params = {
    name: "",
    avatar_url: "",
    content: content
  }
  request.send(JSON.stringify(params));
}

var submitButton = document.getElementById('submitbtn')
document.body.addEventListener( 'keyup', function (e) {
if ( e.keyCode == 13 ) {
    triggerEvent( submitButton, 'click' );
}
});

function triggerEvent( elem, event ) {
    var clickEvent = new Event( event );
elem.dispatchEvent( clickEvent );
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

changeimg("./images/logo.png", html)
changeimg("./images/logo.png", python)

function changeimg(imgsource, object) {
    object.style.backgroundImage="url(" + imgsource + ")";
}