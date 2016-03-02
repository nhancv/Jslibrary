/**
 * Created by nhancao on 3/2/16.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

function requestTest(){
    var request = require('request')
    var username = 'admin'
    var password = 'district'
    var options = {
        url: 'http://139.162.30.100:8080/dhis_scale/api/analytics.json?dimension=dx:uP1VRQfXX85&dimension=ou:OU_GROUP-lBQUJ9K4wQK;WCIF0Llr1a1&dimension=pe:LAST_12_MONTHS&displayProperty=NAME',
        auth: {
            user: username,
            password: password
        }
    }

    request(options, function (err, res, body) {
        if (err) {
            console.dir(err)
            return
        }
        console.dir('headers', res.headers)
        console.dir('status code', res.statusCode)
        console.dir(body)
    });
}


