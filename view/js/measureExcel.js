/**
 * Created by nhancao on 2/17/16.
 */
//this function includes all necessary js files for the application
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}
/* include any js files here */
include('js/xlsx.core.min.js');
function out(msg) {
    var divOut = document.getElementById("divOut");
    divOut.innerHTML = divOut.innerHTML + '<div>' + msg + '</div>';
}

function solve() {

}

function measure() {
    var t0 = performance.now();
    out('Start: ' + t0);
    solve();
    var t1 = performance.now();
    out('Stop: ' + t1);
    out('Result: ' + (t1 - t0) + " ms");
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}
