var fuzzy   = require('fuzzy');
var fs      = require('fs');

var _addr   = '新北市中和區中山路３段';

fs.readFile(__dirname+'/Zip32_10301.csv' ,
            'utf-8',
            function read( err , data ) {
    if (err) throw err;
    data = data.split('\r\n');
    console.log('查詢：', _addr);
    console.log( fuzzy.filter( _addr , data )
                            .map( function(rt) { 
                                    return rt.string; 
                                  }));
});
