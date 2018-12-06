var fs = require('fs');

/* just write to file*/
var msg = 'Hello, the Halley\'s Comet!';

fs.writeFile('text.txt', msg, function(err){
    if (err) throw err;
});

/* write without delete of existing data*/
var msgAdd = '\nHello again, the Halley\'s Comet!';

fs.appendFile('text.txt', msgAdd, function(err){
    if (err) throw err;
    var content = fs.readFileSync('text.txt', 'utf-8');
    console.log(content);
});