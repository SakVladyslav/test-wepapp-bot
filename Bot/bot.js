const TelegramBot = require('node-telegram-bot-api');

const token = '6773910566:AAHbyk1tmtXadhIRoUvEgXeQ5KzbinLiu8M';
const webAppUrl = 'https://main--test-web-app-tg.netlify.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('web_app_data', (msg) => {
    console.log(msg);
})

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Welcome');
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
