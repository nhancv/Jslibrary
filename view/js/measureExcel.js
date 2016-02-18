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
function output(msg) {
    var divOut = document.getElementById("divOut");
    divOut.innerHTML = divOut.innerHTML + '<div>' + msg + '</div>';
}

function solve() {

    function fixdata(data) {
        var o = "", l = 0, w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }

    function to_csv(workbook) {
        var result = [];
        workbook.SheetNames.forEach(function (sheetName) {
            var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
            if (csv.length > 0) {
                result.push("SHEET: " + sheetName);
                result.push("");
                result.push(csv);
            }
        });
        return result.join("\n");
    }

    function process_wb(wb) {
        var output = to_csv(wb);
        if (out.innerText === undefined) out.textContent = output;
        else out.innerText = output;
        if (typeof console !== 'undefined') console.log("output", new Date());
    }

    function readSingleFile(files) {
        var f = files;
        {
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function (e) {
                var data = e.target.result;
                var wb;
                var arr = fixdata(data);
                wb = XLSX.read(btoa(arr), {type: 'base64'});
                process_wb(wb);
            };
            reader.readAsArrayBuffer(f);
        }
    }

    readSingleFile(document.getElementById('fileUpload').files[0]);
}


function measure() {
    var t0 = performance.now();
    output('Start: ' + t0);
    solve();
    var t1 = performance.now();
    output('Stop: ' + t1);
    output('Result: ' + (t1 - t0) + " ms");
    output('<br><hr><br>');
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}
