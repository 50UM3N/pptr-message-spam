const puppeteer = require('puppeteer')
async function pptr(name) {
    const url = 'https://web.whatsapp.com/'
    const personSelector = `[title="${name}"]`
    const inputBoxSelector = '#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text'
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto(url)
    await page.waitForSelector(personSelector)
    await page.click(personSelector)
    let counter = 0
    const emojis = '😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾'
    const arrayOfEmojis = emojis.split(' ')
    const timer = setInterval(async () => {
        await page.type(inputBoxSelector, `${arrayOfEmojis[counter]}`)
        await page.keyboard.press('Enter')
        counter++
        if (counter >= arrayOfEmojis.length) {
            clearInterval(timer)
            await browser.close()
        }
    }, 1000)
}

pptr('Sohan Kanrar')