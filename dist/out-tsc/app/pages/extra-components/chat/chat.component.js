"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var chat_service_1 = require("./chat.service");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.messages = this.chatService.loadMessages();
    }
    ChatComponent.prototype.sendMessage = function (event) {
        var _this = this;
        var files = !event.files ? [] : event.files.map(function (file) {
            return {
                url: file.src,
                type: file.type,
                icon: 'nb-compose',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
        var botReply = this.chatService.reply(event.message);
        if (botReply) {
            setTimeout(function () { _this.messages.push(botReply); }, 500);
        }
    };
    ChatComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-chat',
            templateUrl: 'chat.component.html',
            styleUrls: ['chat.component.scss'],
            providers: [chat_service_1.ChatService],
        }),
        tslib_1.__metadata("design:paramtypes", [chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map