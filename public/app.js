(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA1W_IgfGG_lBPPnSs-GrfliTZ-jpIYg5A",
        authDomain: "iphayao-a2ae6.firebaseapp.com",
        databaseURL: "https://iphayao-a2ae6.firebaseio.com",
        storageBucket: "iphayao-a2ae6.appspot.com",
        messagingSenderId: "210504864882"
    };
    firebase.initializeApp(config);

    var app = angular.module('app', ['firebase']);

    app.controller("MyCtrl", function($scope, $firebaseObject) {
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        $scope.object = $firebaseObject(ref);
    });

}());