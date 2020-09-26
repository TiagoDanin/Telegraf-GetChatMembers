const allChats = {}

const getChatMembers = function (chatId) {
	if (!chatId) {
		if (this && this.chat && this.chat.id) {
			chatId = this.chat.id
		} else {
			return new Error('Expected a [chatId]')
		}
	}
	if (!allChats[chatId]) {
		return []
	}
	return Object.keys(allChats[chatId]).map((id) => allChats[chatId][id])
}

module.exports = async function (ctx, next) {
	if (ctx.chat && ctx.chat.id && !allChats[ctx.chat.id]) {
		allChats[ctx.chat.id] = {}
	}

	if (ctx.chat && ctx.chat.id && ctx.from && ctx.from.id) {
		const member = await ctx.getChatMember(ctx.from.id).catch(() => false)
		if (!member) {
			return next(ctx)
		}
	
		allChats[ctx.chat.id][ctx.from.id] = member
	}

	ctx.getChatMembers = getChatMembers
	return next(ctx)
}
module.exports.check = getChatMembers
module.exports.all = allChats
