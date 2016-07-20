var TelegramBot = require('node-telegram-bot-api');
var fs = require("fs");

var token = '258816672:AAFFEQgcounJtF6W5EMHpVzJEeBoh2Va0Mw';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

function sendMessageTo(userId,Message){
    bot.sendMessage(userId, "Registro Exitoso!");
}
// Matches /echo [whatever]
bot.onText(/\/registro/, function (msg, match) {
  var fromId = msg.from.id;
  console.log(msg.from);
  var usersJson = JSON.parse(fs.readFileSync('./assets/dict/users.json', 'utf8'));;
  console.log(JSON.stringify(usersJson));
  usersJson.users.push(msg.from);
  
  fs.writeFile("./assets/dict/users.json",JSON.stringify(usersJson), (err) => {
    if (err) throw  console.log(err);
    sendMessageTo(fromId,"GG izi");
  });
  
});
var botTelegramService = {  
  sendMessageTo: function sendMessageToService() {
    return 'Hello I am the real Service';
  }
};
module.exports = sendMessageTo;  

