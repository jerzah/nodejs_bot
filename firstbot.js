var irc = require('irc')
var client = new irc.Client('irc.undernet.org', 'BruckerNet', {
    channels: ['#bruckernet'],
   /userName: '~aLameBotbla',
    realName: 'myTestBot',
    floodProtection: true,
    floodProtectionDelay: 1000,
    autoRejoin: true,
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

client.on('join', function(channel, nick, message) {
    var date =new Date();
    console.log(date);
    console.log(nick + " joined " + channel);
    console.log(message);
});

client.on('message', function (from, to, message) {
    if (message == "Hello"){
        client.say(to, "Hi " + from);
        console.log("'Replised: HI'" + from +"' --> " + from);
    }
    if ("Eroade" == from && message == "testkeywooo") {
        console.log("Owned");
        var test = new ircAuth(from, "testkeywooo");
        client.on('message#bruckernet', function (nick, text, message) {
            console.log(nick, text, message);
        });
        test.authorised = true;
        console.log(test.authorised);
        client.say(from, "Authorised"); 
        console.log(from, "Authorised"); 
    } 
    console.log(from + " say's " + "'" + message + "'" + " to: " +  to);
});
