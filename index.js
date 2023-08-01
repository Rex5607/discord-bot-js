
// 1) Activate all 3 Intents from your Bot
// 2) Add your Bot-Token as a Secret [SECRET NAME: token]






const Discord = require('discord.js');

const token = process.env['token']


const status = "STATUS" // michi

const command = "+test"
const command_title = "TITLE from Embed"
const command_description = "DESCRIPTION from Embed"
const command_color = "Hex-Code from Color (#123456)"
const command_footer = "FOOTER from Embed"

// michi

const { Client, GatewayIntentBits,  ActionRowBuilder, Events, TextInputBuilder, TextInputStyle} = require('discord.js');
const client = new Client()



const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);

client.login(token);

client.once('ready', () => {
  log.info(`I am logged in as ${client.user.tag} to Discord!`); // michi
  client.user.setActivity(`${status}`, { type: "STREAMING" })});

client.on("message", (message) => {
if (message.content !== `${command}`) return;
  const embed = new Discord.MessageEmbed()
  .setTitle(`${command_title}`)
  .setDescription(`${command_description}`)
  .setColor(`${command_color}`);
  message.channel.send(embed)});






































































// discord.gg/michitools
// https://michi.tools/