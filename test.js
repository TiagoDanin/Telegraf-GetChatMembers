const telegrafGetChatMembers = require('./index.js')
const assert = require('assert')

const my = {
	user: {
		id: 89198119,
		is_bot: false,
		first_name: 'Tiago',
		last_name: 'Danin',
		username: 'TiagoEDGE',
		language_code: 'en'
	},
	status: 'creator'
}

const next = (ctx) => ctx
const getChatMember = async () => my
var ctx = {
	chat: {
		id: 1
	},
	from: {
		id: 1
	},
	getChatMember: getChatMember
}

const main = async () => {
	console.log('[+] Executing tests')
	await telegrafGetChatMembers(ctx, next)
	assert.equal(JSON.stringify(telegrafGetChatMembers.check(999)), JSON.stringify([]))
	assert.equal(JSON.stringify(telegrafGetChatMembers.check(1)), JSON.stringify([my]))
	console.log('[+] 100% OK')
}
return main()
