

// Array to hold city name and corresponding latitude and logitude
var locations = [
    ['Dubai', 25.0657005, 55.1712799],
    // ['Interlaken', 46.5956802, 7.90765],
    // ['Lauterbrunnen', 46.9480896, 7.4474401],
    // ['Kathmandu', 27.7016907, 85.3206024],
    // ['Cape Town', -33.9258385, 18.4232197],
    ['Foz do Iguaçu', -25.5477791, -54.5880585],
    ['Empuriabrava', 42.2469101, 3.12059],
    ['Key West', 24.5552406, -81.7816315],
    ['Waialua', 21.5768795, -158.131546]
    // ['Fox Glacier', -43.46448, 170.017588] // 2 locations
    // ['Queensland', -20.7252293, 139.4972687]
    // ['Livingstone', -17.8419399, 25.85425] // Only one location and no location details
    // ['Queenstown', -45.0302315, 168.6627045] // Many locations
];


var config = {
    // Project-1
    apiKey: "AIzaSyB14umVfdO698P_sUXR4J5Xkp755M0LqCA",
    authDomain: "project1-firebase-auth.firebaseapp.com",
    databaseURL: "https://project1-firebase-auth.firebaseio.com",
    projectId: "project1-firebase-auth",
    storageBucket: "project1-firebase-auth.appspot.com",
    messagingSenderId: "558796916951"

    // Train Scheduler
    // apiKey: "AIzaSyCblT2nfpwzw2HumOPzdQOh3tLuOvozyiE",
    // authDomain: "bootcamp-learning.firebaseapp.com",
    // databaseURL: "https://bootcamp-learning.firebaseio.com",
    // projectId: "bootcamp-learning",
    // storageBucket: "bootcamp-learning.appspot.com",
    // messagingSenderId: "1031333562864"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// var cityInfo = {
//     name: 'Mombasa',
//     lat: -4.0546598,
//     lon: 39.6635895,
// }

// Uploads data to firebase database

// database.ref().push(cityInfo);
var returnArr = [];
// This event will be triggered once for each initial child at this location, and it will be triggered again every time a new child is added
// database.ref().on("value", function (snapshot) {
//     // storing the snapshot.val() in a variable for convenience
//     var cityDetails = snapshot.val();
//     console.log(cityDetails);
//     var x = cityDetails.name;
//     console.log(x);

//     // Handle the errors
// }, function (errorObject) {
//     console.log("Errors handled: " + errorObject.code);
// });

function snapshotToArray(snapshot) {
    // var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

// database.ref().on('value', function(snapshot) {
//     var cityDetails = snapshot.val();
//     console.log(cityDetails);
//     console.log(snapshotToArray(snapshot));
// });

database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var trainDatabaseValue = snapshot.val();
    console.log("Train database value is " + trainDatabaseValue);

    var trainName = trainDatabaseValue.trainName;


    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
