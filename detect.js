// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var output = 'Detecting browsers:<hr>';
output += 'isFirefox: ' + isFirefox + '&nbsp;|&nbsp;';
output += 'isChrome: ' + isChrome + '&nbsp;|&nbsp;';
output += 'isSafari: ' + isSafari + '&nbsp;|&nbsp;';
output += 'isOpera: ' + isOpera + '&nbsp;|&nbsp;';
output += 'isIE: ' + isIE + '&nbsp;|&nbsp;';
output += 'isEdge: ' + isEdge + '&nbsp;|&nbsp;';
output += 'isEdgeChromium: ' + isEdgeChromium + '&nbsp;|&nbsp;';
output += 'isBlink: ' + isBlink + '<hr>';
document.getElementById('detection').innerHTML = output;


function userTesting() {
    console.log('userTesting')
    var dvPassport = document.getElementById("dvPassport");
    dvPassport.style.display = "block";
}

function userNotTesting() {
    console.log('userNotTesting')
    close();
}

function test() {
    console.log('omg omg testing')
    var oldDateObj = new Date();
    var newDateObj = new Date();
    newDateObj.setTime(oldDateObj.getTime() + (10 * 1000));
    // Set the date we're counting down to
    var countDownDate = newDateObj.getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = "Seconds remaining to start: " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "It went well, It seems your explorer supported this attack. Please send me your findings.";
        }
    }, 1000);
}