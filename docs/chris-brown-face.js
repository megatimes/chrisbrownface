/* 
 * color changing code is from 
 * https://www.kirupa.com/html5/examples/strobe_light_generator.htm 
 */

var bodyElement = document.querySelector("body");
var testText = document.querySelector(".test-text");
var chrisTopSmall = document.getElementById("chris-top-small");
var chrisTopLarge = document.getElementById("chris-top-large");
var delay  = 0;
var delay2 = 0;
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
 
function changeColor() {
    delay++;
    delay2++;

    if (window.innerWidth >= 1200) { 
        // larger screens
            if (delay > 8) {
                bodyElement.style.backgroundColor = getRandomColor();
                testText.style.color = getRandomColor();
                delay = 0;
            }
    
            if (delay <= 6) {
                //chrisTopLarge.style.bottom = '-32vh';
                chrisTopSmall.style.bottom = '9vh';
            } else {
                //chrisTopLarge.style.bottom = '-35vh';
                chrisTopSmall.style.bottom = '8vh';
            }
    
            // move head from side to side
            if (delay2 <= 40) {
                chrisTopLarge.style.right = '20vw';
                chrisTopSmall.style.right = '20vw';
            } else if (delay2 < 80) {
                chrisTopLarge.style.right = '-10vw';        
                chrisTopSmall.style.right = '-10vw';
            } else {
                delay2 = 0;
            }
        } 
    else if (window.innerWidth >= 1024) {
    // not big screens but not small screens
        if (delay > 8) {
            bodyElement.style.backgroundColor = getRandomColor();
            testText.style.color = getRandomColor();
            delay = 0;
        }

        if (delay <= 6) {
            chrisTopLarge.style.bottom = '8vh';
            chrisTopSmall.style.bottom = '8vh';
        } else {
            chrisTopLarge.style.bottom = '9vh';
            chrisTopSmall.style.bottom = '9vh';
        }

        // move head from side to side
        if (delay2 <= 40) {
            chrisTopLarge.style.right = '0vw';
            chrisTopSmall.style.right = '0vw';
        } else if (delay2 < 80) {
            chrisTopLarge.style.right = '8vw';        
            chrisTopSmall.style.right = '8vw';
        } else {
            delay2 = 0;
        }
    } else {
        // different speed for mobile
        if (delay > 4) {
            bodyElement.style.backgroundColor = getRandomColor();
            testText.style.color = getRandomColor();
            delay = 0;
        }

        if (delay <= 3) {
            chrisTopLarge.style.bottom = '-32vh';
            chrisTopSmall.style.bottom = '-5vh';
        } else {
            chrisTopLarge.style.bottom = '-35vh';
            chrisTopSmall.style.bottom = '-8vh';
        }

        // move head from side to side
        if (delay2 <= 20) {
            chrisTopLarge.style.right = '-20vw';
            chrisTopSmall.style.right = '0vw';
        } else if (delay2 < 40) {
            chrisTopLarge.style.right = '0vw';        
            chrisTopSmall.style.right = '-14vw';
        } else {
            delay2 = 0;
        }
    }

    requestAnimationFrame(changeColor);
}              


 
function getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
     
    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);
     
    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
     
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }
 
    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }
 
    // creating the hex value by concatenatening the string values
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}


changeColor();


