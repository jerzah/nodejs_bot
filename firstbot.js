var irc = require('irc')
var client = new irc.Client('irc.freenode.net', 'TestNick', {
    channels: ['#testchannel']
});

client.on('error', function(message) {
    console.error('error: ', message);
});

client.on('connect', function() {
    console.log('connected to irec server');
});

client.on('message', function (from, to, message) {
    console.log(from + ' --> ' + to + ': ' +  message);
    if (message == "Hello"){
        client.say(to, "Hi " + from);
        console.log("Replised HI --> " + from)
    }
});
