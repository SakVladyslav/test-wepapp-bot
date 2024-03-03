const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();

app.use(express.json());

const token = '6773910566:AAHbyk1tmtXadhIRoUvEgXeQ5KzbinLiu8M';
const webApp = 'https://0136-185-208-231-1.ngrok-free.app';

const bot = new TelegramBot(token, {polling: true});

console.log('bot');

bot.on('web_app_data', (msg) => {
    console.log(msg);
})

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    console.log(msg);

    if (text === '/start') {
        await bot.sendMessage(chatId, 'button to site', {
            reply_markup: {
                keyboard: [
                    [{text: 'dasdasd', web_app: {url: webApp}}]
                ]
            }
        })
    }

    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data)
            console.log(data)

            await bot.sendMessage(chatId, 'Fuck yeah!!!');
        } catch (e) {
            console.log(e);
        }
    }
});

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT))
