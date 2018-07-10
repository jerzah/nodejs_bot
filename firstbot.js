var irc = require('irc')
var client = new irc.Client('irc.undernet.org', 'BruckerNet', {
    channels: ['#bruckernet']
});

function ircAuth(nick, key) {
        this.nick = nick,
        this.key = key,
        this.authorised = false
};
    

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
        console.log("'Replised: HI'" + from +"' --> " + from)
    }
    if ("Eroade" == from && msg == "testkeywooo"){
        console.log("Owned");
        var test = new ircAuth(from, "testkeywooo");
        test.authorised = true;
        console.log(test.authorised);
        client.say(from, "Authorised") 
        console.log(from, "Authorised") 
    }
});
