const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'Kawai') {
   // message.reply('pong');
    message.channel.sendMessage('hi');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SINGING AND DANCING TO NEW"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'YVES');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('NDA4MjE2MzU1NjA3OTM3MDI2.DVR5Jw.8yMgNbX9TAHXeEn0SX6nK9z-3Ss');
