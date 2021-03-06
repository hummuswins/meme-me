#!/usr/bin/env node

var leapjs      = require('leapjs');

var controller  = new leapjs.Controller({enableGesture: true});

controller.on('connect', function() {
    console.log("Successfully connected.");
});

controller.on('deviceConnected', function() {
    console.log("A Leap device has been connected.");
});

controller.on('deviceDisconnected', function() {
    console.log("A Leap device has been disconnected.");
});

// controller.on('deviceFrame', function(frame) {
//     var numberOfFingers = frame.fingers.length;
//     console.log(numberOfFingers);
// });

controller.on('deviceFrame', function(frame) {
    // loop through available gestures
    for(var i = 0; i < frame.gestures.length; i++){
        var gesture = frame.gestures[i];
        var type    = gesture.type;

        switch( type ){

            case "circle":
                if (gesture.state == "stop") {
                    console.log('circle');
                }
                break;

            case "swipe":
                if (gesture.state == "stop") {
                    console.log('swipe');
                }
                break;

            case "screenTap":
                if (gesture.state == "stop") {
                    console.log('screenTap');
                }
                break;

            case "keyTap":
                if (gesture.state == "stop") {
                    console.log('keyTap');
                }
                break;

        }
    }
});

controller.connect();