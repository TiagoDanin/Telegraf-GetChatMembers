# Telegraf GetChatMembers
[![Node](https://img.shields.io/node/v/telegraf-getchatmembers.svg?style=flat-square)](https://npmjs.org/package/telegraf-getchatmembers)
[![Version](https://img.shields.io/npm/v/telegraf-getchatmembers.svg?style=flat-square)](https://npmjs.org/package/telegraf-getchatmembers)
[![Downloads](https://img.shields.io/npm/dt/telegraf-getchatmembers.svg?style=flat-square)](https://npmjs.org/package/telegraf-getchatmembers)
[![Travis](https://img.shields.io/travis/TiagoDanin/Telegraf-GetChatMembers.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Telegraf-GetChatMembers)

Implementation of getChatMembers method in Telegraf using cache


## Installation
Module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
# NPM
npm install telegraf-getchatmembers --save
# Or Using Yarn
yarn add telegraf-getchatmembers
```

## Usage
```js
const Telegraf = require('telegraf')
const telegrafGetChatMembers = require('telegraf-getchatmembers')

const bot = new Telegraf(process.env.telegram_token)

bot.use(telegrafGetChatMembers)

bot.on('message', async (ctx) => {
	ctx.getChatMembers(ctx.chat.id) //[Members]
	ctx.getChatMembers() //[Members]
	telegrafGetChatMembers.check(ctx.chat.id) //[Members]
	telegrafGetChatMembers.all //[Chats]
})

bot.launch()

```

## Tests
To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
None


## Related
- [telegraf-start-parts](https://ghub.io/telegraf-start-parts): Command /start parameters parser middleware for Telegraf
- [telegraf-test](https://ghub.io/telegraf-test): Telegraf Test - Simple Test ToolKit of Telegram Bots

## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Telegraf-GetChatMembers/issues). [List of all contributors](https://github.com/TiagoDanin/Telegraf-GetChatMembers/graphs/contributors).


## License
[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)
