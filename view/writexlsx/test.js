/**
 * Created by nhancao on 3/9/16.
 */
var Excel = require("exceljs");
var fs = require('fs');
var _ = require('underscore');
var filename = "test1.xlsx";
var workbook = new Excel.Workbook();
workbook.xlsx.readFile(filename)
    .then(function() {
        workbook.eachSheet(function(worksheet, sheetId) {
            // ...
            console.log(worksheet + " - " + sheetId);
        });
        var worksheet = workbook.getWorksheet(1);
        worksheet.getCell("H8").value=12;

        workbook.xlsx.writeFile(filename)
            .then(function() {
                // done
            });
    });