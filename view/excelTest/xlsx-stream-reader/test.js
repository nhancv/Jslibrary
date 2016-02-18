/**
 * Created by nhancao on 2/18/16.
 */
const XlsxStreamReader = require("./lib/xlsx-stream-reader");
var fs = require('fs');
var fileName = "../testcase/case6-1kx2k.xlsx";
var title= "Loop on numbers";

var workBookReader = new XlsxStreamReader();
workBookReader.on('error', function (error) {
    throw(error);
});
workBookReader.on('sharedStrings', function () {
    // do not need to do anything with these,
    // cached and used when processing worksheets
    //console.log(workBookReader.workBookSharedStrings);
});

workBookReader.on('styles', function () {
    // do not need to do anything with these
    // but not currently handled in any other way
    //console.log(workBookReader.workBookStyles);
});

workBookReader.on('worksheet', function (workSheetReader) {
    console.time(title);
    if (workSheetReader.id > 1){
        // we only want first sheet
        workSheetReader.skip();
        return;
    }
    // if we do not listen for rows we will only get end event
    // and have infor about the sheet like row count
    workSheetReader.on('row', function (row) {
        //if (row.attributes.r == 1){
            // do something with row 1 like save as column names
        //}else{
            // second param to forEach colNum is very important as
            // null columns are not defined in the array, ie sparse array
            //row.values.forEach(function(rowVal, colNum){
                // do something with row values
            //});
        //}
    });
    workSheetReader.on('end', function () {
        //console.log(workSheetReader.rowCount);
    });

    // call process after registering handlers
    workSheetReader.process();
});
workBookReader.on('end', function () {
    // end of workbook reached
    console.timeEnd(title);
});

fs.createReadStream(fileName).pipe(workBookReader);