const Telegraf = require('telegraf')
const telegrafGetChatMembers = require('./')

const bot = new Telegraf(process.env.telegram_token)

bot.use(telegrafGetChatMembers)

bot.on('message', async (ctx) => {
	ctx.getChatMembers(ctx.chat.id) //[Members]
	ctx.getChatMembers() //[Members]
	telegrafGetChatMembers.check(ctx.chat.id) //[Members]
	telegrafGetChatMembers.all //[Chats]
})

bot.launch()
