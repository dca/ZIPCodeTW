var csv = require('csv');
var fs = require('fs');
var fuzzy = require('fuzzy');
var zips = [];

var _addr = '新北市中和區中山路３段';

csv()
    .from.stream(fs.createReadStream(__dirname+'/Zip32_10301.csv'))
    .on('record', function(row,index){
        zips[index] = JSON.stringify(row);
    })
    .on('end', function(count){
        var results = fuzzy.filter(_addr, zips);
        var matches = results.map(function(el) { return el.string; });
        console.log('查詢：', _addr);
        console.log(matches);
    });


