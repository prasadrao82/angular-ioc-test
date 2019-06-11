"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var messages_1 = require("./messages");
var bot_replies_1 = require("./bot-replies");
var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    ChatService.prototype.loadMessages = function () {
        return messages_1.messages;
    };
    ChatService.prototype.loadBotReplies = function () {
        return bot_replies_1.botReplies;
    };
    ChatService.prototype.reply = function (message) {
        var botReply = this.loadBotReplies()
            .find(function (reply) { return message.search(reply.regExp) !== -1; });
        if (botReply.reply.type === 'quote') {
            botReply.reply.quote = message;
        }
        if (botReply.type === 'gif') {
            botReply.reply.files[0].url = bot_replies_1.gifsLinks[Math.floor(Math.random() * bot_replies_1.gifsLinks.length)];
        }
        if (botReply.type === 'pic') {
            botReply.reply.files[0].url = bot_replies_1.imageLinks[Math.floor(Math.random() * bot_replies_1.imageLinks.length)];
        }
        if (botReply.type === 'group') {
            botReply.reply.files[1].url = bot_replies_1.gifsLinks[Math.floor(Math.random() * bot_replies_1.gifsLinks.length)];
            botReply.reply.files[2].url = bot_replies_1.imageLinks[Math.floor(Math.random() * bot_replies_1.imageLinks.length)];
        }
        botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
        return tslib_1.__assign({}, botReply.reply);
    };
    ChatService = tslib_1.__decorate([
        core_1.Injectable()
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map