module.exports = {
  sendMessage: function (req, res) {
    var user = req.query.user;
    var message = req.query.message;
    var TelegramBot = require('node-telegram-bot-api');
    var token = '258816672:AAFFEQgcounJtF6W5EMHpVzJEeBoh2Va0Mw';
    var bot = new TelegramBot(token, {polling: true});
    bot.sendMessage(user, message);
    return res.view("sendmessage");;
  }
};
