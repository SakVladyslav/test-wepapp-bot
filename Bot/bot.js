const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('6773910566:AAHbyk1tmtXadhIRoUvEgXeQ5KzbinLiu8M');

bot.start((ctx) => ctx.reply('Welcome'));
bot.launch()

