// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAI0hjtt6DpgtboWpyOcWsh_Xn6BxVYjMY",
    authDomain: "bobago-c7da5.firebaseapp.com",
    databaseURL: "https://bobago-c7da5.firebaseio.com",
    projectId: "bobago-c7da5",
    storageBucket: "bobago-c7da5.appspot.com",
    messagingSenderId: "246035056974"
};
firebase.initializeApp(config);


$("#loginButton").on("click", function(e) {

    firebase.auth().signInWithEmailAndPassword(input("email"), input("pass")).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            $("#main").load("orders.html");
            require('./renderer2.js');
        } else {
            // Not logged in
            console.log("not logged in");
        }
    });
});

function input(marker) {
    return document.getElementById(marker).value;
}
