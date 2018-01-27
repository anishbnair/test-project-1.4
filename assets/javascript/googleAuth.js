

// Firebase authentication using Google account Sign In
var config = {
    // Project-1
    apiKey: "AIzaSyB14umVfdO698P_sUXR4J5Xkp755M0LqCA",
    authDomain: "project1-firebase-auth.firebaseapp.com",
    databaseURL: "https://project1-firebase-auth.firebaseio.com",
    projectId: "project1-firebase-auth",
    storageBucket: "project1-firebase-auth.appspot.com",
    messagingSenderId: "558796916951"
};

firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

$(document).on("click", ".signIn", function () {
    console.log("Sign In button clicked");
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // window.location = '/test-project-1.2/map.html';
        // window.location = 'https://anishbnair.github.io/test-project-1.2/map.html';

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    $(this).removeClass('signIn')
        .addClass('signOut')
        .html('Sign Out Of Google');
});

$(document).on('click', '.signOut', function () {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        // window.location = '/index.html';
        // window.location = 'https://anishbnair.github.io/test-project-1.2/';
    }).catch(function (error) {
        // An error happened.
    });
    $(this).removeClass('signOut')
        .addClass('signIn')
        .html('Sign In with Google');
});