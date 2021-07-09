require('dotenv').config()
const discord = require('discord.js')

const client = new discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.get('863092723404767264');
    channel.bulkDelete(100)
    const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()
const sfbuff = new Buffer.from(canvas.toDataURL().split(",")[1], "base64");
const sfattach = new discord.MessageAttachment(sfbuff, "output.png");
channel.send(sfattach)
channel.send('now THAT is awesome! Isn\'t it <@181311301635670018>?')
});



client.login(process.env.DISCORD);