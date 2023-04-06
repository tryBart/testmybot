const express = require('express');
const fs = require('then-fs');
const Discord = require('discord.js')
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { REST, Routes } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle} = require('discord.js')

var PastebinAPI = require('pastebin-js');
 
// Without any parameter you can only use getPaste!
var pastebin = new PastebinAPI();
 
// Provide a developer key as string, this key can be found when logged in.
// This can be found here: http://pastebin.com/api#1
var pastebin = new PastebinAPI('6i_Wn1sZA57ThIErY6AKmbLCQuPDEVEW');
 
// Provide an object containing the api_dev_key, api_user_name and api_user_password
pastebin = new PastebinAPI({
                'api_dev_key' : '6i_Wn1sZA57ThIErY6AKmbLCQuPDEVEW',
                'api_user_name' : 'piromaneexe',
                'api_user_password' : 'FallGuys000&'
               });




require('dotenv').config();
const keepAlive = require(`./server`)


client.on('ready', async () => {
    console.log(`Testing bot is now online successfully!`)
    console.log("Bot Online")
  client.user.setStatus('dnd')
  client.user.setActivity(`Livorno - Toscana `)
});
const TOKEN = "MTA4NDA1NTg2MjA4MDk4MzA2MA.GgdjpZ.fZ3rg-KOQOs-bxd8p3LWZpu1aCPI0hWzADOGYA"
const CLIENT_ID = "1084055862080983060"
keepAlive()

const commands = [
  {
    name: "robloxlogban",
    description: "Invia il log di un ban eseguito sul gioco roblox.",
    options: [
        {
            name: "utente",
            description: "Utente bannato",
            type: 3,
            required: true
        },
     {
            name: "tempoban",
            description: "tempo del ban",
            type: 3,
            required: true
        },
{
            name: "motivo",
            description: "motivo del ban",
            type: 3,
            required: true
        },

    ]
  },
    {
    name: "robloxlogunban",
    description: "Invia il log di un unban eseguito sul gioco roblox.",
    options: [
        {
            name: "utente",
            description: "Utente unbannato",
            type: 3,
            required: true
        },
{
            name: "motivo",
            description: "motivo dell'unban]",
            type: 3,
            required: true
        },

    ]
  },
  {
    name: "messaggio",
    description: "Invia un messaggio rp non anonimo.",
    options: [
        {
            name: "messaggio",
            description: "messaggio da inviare",
            type: 3,
            required: true
        },

    ]
  },
  {
    name: "messaggioanonimo",
    description: "Invia un messaggio rp anonimo.",
    options: [
        {
            name: "messaggio",
            description: "messaggio da inviare",
            type: 3,
            required: true
        },

    ]
  },
  {
    name: "messaggioistituzionale",
    description: "Invia un messaggio rp istituzionale.",
    options: [
      {
            name: "messaggio",
            description: "messaggio da inviare",
            type: 3,
            required: true,
      },
        {
            name: "istituzione",
            description: "istituzione con cui inviare il messaggio",
            type: 3,
            required: true,
choices: [
                {
                    name: "poliziadistato",
                    value: "ps"
                },
                {
                    name: "armadeicarabinieri",
                    value: "cc"
                },
                {
                    name: "poliziapenitenziaria",
                    value: "pp"
                },
                  {
                    name: "guardia costiera",
                    value: "gc"
                },
                {
                    name: "esercito",
                    value: "es"
                },
                {
                    name: "crocerossaitaliana",
                    value: "cri"
                },
                {
                    name: "vigilidelfuoco",
                    value: "vvf"
                },



            ]
        },

    ]
  },

    {
    name: "ticketsetup",
    description: "Invia il setup per aprire un ticket.",
  },
  {
    name: "robloxlogkick",
    description: "Invia il log di un kick eseguito sul gioco roblox.",
    options: [
        {
            name: "utente",
            description: "Utente kickato",
            type: 3,
            required: true
        },
{
            name: "motivo",
            description: "motivo del kick",
            type: 3,
            required: true
        },

    ]
  },
    {
    name: "ping",
    description: "Controlla il ping del bot",
  },
  {
    name: "ban",
    description: "Banna un utente dal server discord.",
    options: [
        {
            name: "utente",
            description: "Utente da bannare",
            type: 6,
            required: true
        },
{
            name: "motivo",
            description: "Motivo del ban",
            type: 3,
            required: false
},
    ]
  },
  {
    name: "kick",
    description: "Kicka un utente dal server discord.",
    options: [
        {
            name: "utente",
            description: "Utente da kickare",
            type: 6,
            required: true
        },
{
            name: "motivo",
            description: "Motivo del kick",
            type: 3,
            required: false
},
    ]
  },
  {
    name: "help",
    description: "Visualizza la lista dei comandi.",
  },
  
]

    

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    const embed = new Discord.EmbedBuilder()
    .setTitle("Ping bot")
    .setDescription(`Il ping del bot è: ${client.ws.ping} ms`)
    await interaction.reply({embeds: [embed]});
  }
});
const sourcebin = require('sourcebin_js');
  const { Events } = require('discord.js');



client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isButton()) return;

	if (interaction.customId === 'buttonAssistenza') {
		// Create the modal
		const modal = new ModalBuilder()
			.setCustomId('assistenzaModal')
			.setTitle('Assistenza di Livorno - Toscana');

		// Add components to moda
		// Create the text input components
		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('nomeroblox')
		    // The label is the prompt the user sees for this input
			.setLabel("Il tuo nome roblox")
		    // Short means only a single line of text
      
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('tipoAssistenza')
			.setLabel("Che tipo di assistenza richiedi?")
		    // Paragraph means multiple lines of text.
    
			.setStyle(TextInputStyle.Short);

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
	}
});

const { ChannelType, PermissionsBitField } = require('discord.js')


client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ticketsetup') {
    const embed = new EmbedBuilder()
      	.setColor(0x0099FF)
    .setTitle("Assistenza di Livorno - Toscana")
    .setDescription(`Per richiedere assistenza, clicca sul bottone che trovi giù e compila tutte le domande che ti vengono chieste.`)
      
   const button = new ButtonBuilder()
    .setCustomId("buttonAssistenza")
    .setLabel("Apri un ticket")
    .setStyle(ButtonStyle.Primary)
    
    interaction.reply({embeds: 
      [embed], components: [new ActionRowBuilder().addComponents(button)]})
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'messaggio') {

    const message = interaction.options.getString('messaggio')
    const embed = new EmbedBuilder()
      	.setColor(0x0099FF)
    .setTitle(`Messaggio - ${interaction.user.username}`)
    .setDescription(message)
	.setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

  const channelLog = interaction.client.channels.cache.get("1093465743850471515")
    
  const channel = interaction.client.channels.cache.get("1093470488652685342")
  const send = new EmbedBuilder()
                    .setColor(0x0049FF)
                .setTitle(`Messaggio inviato`)
                .setDescription("Messaggio inviato con successo")
              .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
                
              interaction.reply({embeds: [send], ephemeral: true})

              const logEmbed = new EmbedBuilder()
                .setColor(0x0049FF)
            .setTitle(`Messaggio non anonimo - ${interaction.user.username}`)
            .setDescription(`${interaction.user.username} ha inviato un messaggio non anonimo.`)
            .addFields(
              { name: 'Messaggio:', value: ` ${message}` },
            )
          .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
          channelLog.send({embeds: [logEmbed]})
    
    channel.send({embeds: 
      [embed], ephemeral: true})
}});

              client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'messaggioanonimo') {

    const channelLog = interaction.client.channels.cache.get("1093465743850471515")


    const message = interaction.options.getString('messaggio')
    const embed = new EmbedBuilder()
      	.setColor(0x0099FF)
    .setTitle(`Messaggio - Anonimo`)
    .setDescription(message)
	.setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
  const channel = interaction.client.channels.cache.get("1093470488652685342")
  const send = new EmbedBuilder()
                    .setColor(0x0049FF)
                .setTitle(`Messaggio inviato`)
                .setDescription("Messaggio inviato con successo")
              .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
                
              interaction.reply({embeds: [send], ephemeral: true})

              const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio Anonimo - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio anonimo.`)
              .addFields(
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
            channelLog.send({embeds: [logEmbed]})
    
    channel.send({embeds: 
      [embed], ephemeral: true})
}});

              client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
                const choices = interaction.options.get('istituzione')?.value
  if (interaction.commandName === 'messaggioistituzionale') {
            if (choices === "ps") {
              if (interaction.member.roles.cache.has('1018575673679425666')) {
                const channelLog = interaction.client.channels.cache.get("1093465743850471515")
              const message = interaction.options.getString('messaggio')
              const channel = interaction.client.channels.cache.get("1093470488652685342")
              const embed = new EmbedBuilder()
                  .setColor(0x0099FF)
              .setTitle(`Messaggio - Polizia di Stato`)
              .setDescription(message)
              .setThumbnail('https://media.discordapp.net/attachments/1077382124732157962/1093153955640520784/IMG_0707.png?width=676&height=676')
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
            const send = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio inviato`)
              .setDescription("Messaggio inviato con successo")
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

            const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Polizia di Stato' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
              
            interaction.reply({embeds: [send], ephemeral: true})
            await channel.send({embeds: 
              [embed], ephemeral: true})
          }}

          await channelLog.send({ embeds: [logEmbed]})
            if (choices === "cc") {
              if (interaction.member.roles.cache.has('1018575670261059717')) {
                const channelLog = interaction.client.channels.cache.get("1093465743850471515")
                const channel = interaction.client.channels.cache.get("1093470488652685342")
              const message = interaction.options.getString('messaggio')
              const embed = new EmbedBuilder()
                  .setColor(0x0099FF)
              .setTitle(`Messaggio - Arma dei Carabinieri`)
              .setDescription(message)
              .setThumbnail('https://media.discordapp.net/attachments/1077382124732157962/1093153971054583979/image0.jpg?width=392&height=676')
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
            const send = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio inviato`)
              .setDescription("Messaggio inviato con successo")
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

            const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Arma dei Carabinieri' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
await channelLog.send({ embeds: [logEmbed]})
              
            interaction.reply({embeds: [send], ephemeral: true})
              await channel.send({embeds: 
                [embed], ephemeral: true})
            }}
            if (choices === "pp") {
              if (interaction.member.roles.cache.has('1061664741505908886')) {
                const channelLog = interaction.client.channels.cache.get("1093465743850471515")
              const message = interaction.options.getString('messaggio')
              const channel = interaction.client.channels.cache.get("1093470488652685342")
              const embed = new EmbedBuilder()
                  .setColor(0x0099FF)
              .setTitle(`Messaggio - Polizia Penitenziaria`)
              .setDescription(message)
              .setThumbnail('https://media.discordapp.net/attachments/1077382124732157962/1093153955313369198/IMG_0703.png?width=589&height=675')
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
            const send = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio inviato`)
              .setDescription("Messaggio inviato con successo")
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

            const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Polizia Penitenziaria' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
await channelLog.send({ embeds: [logEmbed]})
              
            interaction.reply({embeds: [send], ephemeral: true})
            await channel.send({embeds: 
              [embed], ephemeral: true})
          }}
          if (choices === "gc") {
            if (interaction.member.roles.cache.has('1082362740787646504')) {
              const channelLog = interaction.client.channels.cache.get("1093465743850471515")
            const message = interaction.options.getString('messaggio')
            const channel = interaction.client.channels.cache.get("1093470488652685342")
            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
            .setTitle(`Messaggio - Guardia Costiera`)
            .setDescription(message)
            .setThumbnail('https://cdn.discordapp.com/attachments/1077382124732157962/1093154409573253233/image0.jpg')
          .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
          const send = new EmbedBuilder()
                .setColor(0x0049FF)
            .setTitle(`Messaggio inviato`)
            .setDescription("Messaggio inviato con successo")
          .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

          const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Guardia Costiera' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
await channelLog.send({ embeds: [logEmbed]})
            
          interaction.reply({embeds: [send], ephemeral: true})
          await channel.send({embeds: 
            [embed], ephemeral: true})
        }}
        if (choices === "es") {
          if (interaction.member.roles.cache.has('1093466402142302238')) {
            const channelLog = interaction.client.channels.cache.get("1093465743850471515")
          const message = interaction.options.getString('messaggio')
          const channel = interaction.client.channels.cache.get("1093470488652685342")
          const embed = new EmbedBuilder()
              .setColor(0x0099FF)
          .setTitle(`Messaggio - Esercito`)
          .setDescription(message)
          .setThumbnail('https://cdn.discordapp.com/attachments/1077382124732157962/1093154252056170588/image0.jpg')
        .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
        const send = new EmbedBuilder()
              .setColor(0x0049FF)
          .setTitle(`Messaggio inviato`)
          .setDescription("Messaggio inviato con successo")
        .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

        const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Esercito' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
await channelLog.send({ embeds: [logEmbed]})
          
        interaction.reply({embeds: [send], ephemeral: true})
        await channel.send({embeds: 
          [embed], ephemeral: true})
      }}
      if (choices === "cri") {
        if (interaction.member.roles.cache.has('1024048612314988615')) {
          const channelLog = interaction.client.channels.cache.get("1093465743850471515")
        const message = interaction.options.getString('messaggio')
        const channel = interaction.client.channels.cache.get("1093470488652685342")
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
        .setTitle(`Messaggio - Croce Rossa Italiana`)
        .setDescription(message)
        .setThumbnail('https://cdn.discordapp.com/attachments/1077382124732157962/1093154672786808902/image0.jpg')
      .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
      const send = new EmbedBuilder()
            .setColor(0x0049FF)
        .setTitle(`Messaggio inviato`)
        .setDescription("Messaggio inviato con successo")
      .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

      const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Croce Rossa Italiana' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
await channelLog.send({ embeds: [logEmbed]})
        
      interaction.reply({embeds: [send], ephemeral: true})
      await channel.send({embeds: 
        [embed], ephemeral: true})
    }}
    if (choices === "vvf") {
      if (interaction.member.roles.cache.has('1018575566653358261')) {
        const channelLog = interaction.client.channels.cache.get("1093465743850471515")
      const message = interaction.options.getString('messaggio')
      const channel = interaction.client.channels.cache.get("1093470488652685342")
      const embed = new EmbedBuilder()
          .setColor(0x0099FF)
      .setTitle(`Messaggio - Vigili del Fuoco`)
      .setDescription(message)
      .setThumbnail('https://cdn.discordapp.com/attachments/1077382124732157962/1093154806270537830/image0.jpg')
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
    const send = new EmbedBuilder()
          .setColor(0x0049FF)
      .setTitle(`Messaggio inviato`)
      .setDescription("Messaggio inviato con successo")
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

    const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Messaggio istituzionale - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha inviato un messaggio istituzionale.`)
              .addFields(
                { name: 'Istituzione: ', value: 'Vigili del Fuoco' },
                { name: 'Messaggio:', value: ` ${message}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
await channelLog.send({ embeds: [logEmbed]})
      
    interaction.reply({embeds: [send], ephemeral: true})
    await channel.send({embeds: 
      [embed], ephemeral: true})
  }}
}});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
  if (interaction.commandName === 'robloxlogkick') {
    if (interaction.member.roles.cache.has('1093120742473875466')) {
      const utente = interaction.options.getString('utente')
      const motivo = interaction.options.getString('motivo')
      const autore = interaction.user
      const data = new Date();
      const embed = new EmbedBuilder()
          .setColor(0xFF9900)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione gioco roblox'})
      .setTitle(`Moderazione - ${utente}`)
      .setDescription(`${utente} è stato kickato dal gioco roblox.`)
      .addFields(
        { name: 'Motivazione kick:', value: ` ${motivo}`},
        { name: 'Autore kick:', value: ` ${autore.username}`},
        { name: 'Data kick:', value: ` ${data.toLocaleTimeString(),data.toLocaleString(), data.toLocaleDateString()}`},
      )
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
    const channelLog = interaction.client.channels.cache.get("1090006595678765077")
    channelLog.send({embeds: [embed]})
    }
}});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
  if (interaction.commandName === 'robloxlogban') {
    if (interaction.member.roles.cache.has('1017169974655197217')) {
      const utente = interaction.options.getString('utente')
      const motivo = interaction.options.getString('motivo')
      const tempoban = interaction.options.getString('tempoban')
      const autore = interaction.user
      const data = new Date();
      const embed = new EmbedBuilder()
          .setColor(0xA31100)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione gioco roblox'})
      .setTitle(`Moderazione - ${utente}`)
      .setDescription(`${utente} è stato bannato dal gioco roblox.`)
      .addFields(
        { name: 'Motivazione ban:', value: ` ${motivo}`},
        { name: 'Tempo ban:', value: ` ${tempoban}`},
        { name: 'Autore ban:', value: ` ${autore.username}`},
        { name: 'Data ban:', value: ` ${data.toLocaleTimeString(),data.toLocaleString(), data.toLocaleDateString()}`},
      )
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

    const channelLog = interaction.client.channels.cache.get("1090006595678765077")
    channelLog.send({embeds: [embed]})
    }
}});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
  if (interaction.commandName === 'robloxlogunban') {
    if (interaction.member.roles.cache.has('1017169974655197217')) {
      const utente = interaction.options.getString('utente')
      const motivo = interaction.options.getString('motivo')
      const autore = interaction.user
      const data = new Date();
      const embed = new EmbedBuilder()
          .setColor(0x11A300)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione gioco roblox'})
      .setTitle(`Moderazione - ${utente}`)
      .setDescription(`${utente} è stato unbannato dal gioco roblox.`)
      .addFields(
        { name: 'Motivazione unban:', value: ` ${motivo}`},
        { name: 'Autore unban:', value: ` ${autore.username}`},
        { name: 'Data unban:', value: ` ${data.toLocaleTimeString(),data.toLocaleString(), data.toLocaleDateString()}`},
      )
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

    const channelLog = interaction.client.channels.cache.get("1090006595678765077")
    channelLog.send({embeds: [embed]})
    }
}});


client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
  if (interaction.commandName === 'ban') {
    if (interaction.member.roles.cache.has('1017169974655197217')) {
      const channelLog = interaction.client.channels.cache.get("1093469967367802960")
      const utente = interaction.options.getMember('utente')
      const motivo = interaction.options.getString('motivo') || 'Nessun motivo fornito.'
      const autore = interaction.user
      const data = new Date();
      const embedBanned = new EmbedBuilder()
          .setColor(0xFF1A00)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Moderazione - ${utente.user.username}`)
      .setDescription(`${utente} è stato bannato dal server discord.`)
      .addFields(
        { name: 'Motivazione ban:', value: ` ${motivo}`},
        { name: 'Autore ban:', value: ` ${autore.username}`},
        { name: 'Data ban:', value: ` ${data.toLocaleTimeString(),data.toLocaleString(), data.toLocaleDateString()}`},
      )
      const embedNotFound = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Errore - ${utente.user.username}`)
      .setDescription(`Non trovo ${utente.user.username} nel discord.`)
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
    const embedNotBannable = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Errore - ${utente.user.username}`)
      .setDescription(`Non posso bannare ${utente.user.username}.`)
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
    const embedTeStesso = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Errore - ${utente.user.username}`)
      .setDescription(`Non puoi auto bannarti.`)
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

    const logEmbed = new EmbedBuilder()
                  .setColor(0x0049FF)
              .setTitle(`Ban log - ${interaction.user.username}`)
              .setDescription(`${interaction.user.username} ha bannato un utente.`)
              .addFields(
                { name: 'Utente:', value: ` ${utente}` },
                { name: 'Motivo:', value: ` ${motivo}` },
              )
            .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

    if (!utente) return interaction.reply({ embeds: [embedNotFound], ephemeral: true});

    if (!utente.bannable) return interaction.reply({ embeds: [embedNotBannable], ephemeral: true})

    if (utente.id === autore.id) return interaction.reply({ embeds: [embedTeStesso], ephemeral: true})

    
    return (
      (await utente.ban()) + interaction.reply({ embeds: [embedBanned]}) + await channelLog.send({ embeds: [logEmbed]})
    )
    }
}});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
  if (interaction.commandName === 'kick') {
    if (interaction.member.roles.cache.has('1093120742473875466')) {
      const channelLog = interaction.client.channels.cache.get("1093469967367802960")
      const utente = interaction.options.getMember('utente')
      const motivo = interaction.options.getString('motivo') || 'Nessun motivo fornito.'
      const autore = interaction.user
      const data = new Date();
      const embedKicked = new EmbedBuilder()
          .setColor(0xFF1A00)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Moderazione - ${utente.user.username}`)
      .setDescription(`${utente} è stato kickato dal server discord.`)
      .addFields(
        { name: 'Motivazione kick:', value: ` ${motivo}`},
        { name: 'Autore kick:', value: ` ${autore.username}`},
        { name: 'Data kick:', value: ` ${data.toLocaleTimeString(),data.toLocaleString(), data.toLocaleDateString()}`},
      )
      const embedNotFound = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Errore - ${utente.user.username}`)
      .setDescription(`Non trovo ${utente.user.username} nel discord.`)
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
    const embedNotKickable = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Errore - ${utente.user.username}`)
      .setDescription(`Non posso kickare ${utente.user.username}.`)
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });
    const embedTeStesso = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
          .setAuthor({ name: 'Moderazione server discord'})
      .setTitle(`Errore - ${utente.user.username}`)
      .setDescription(`Non puoi auto kickarti.`)
    .setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });

    if (!utente) return interaction.reply({ embeds: [embedNotFound], ephemeral: true});

    if (!utente.kickable) return interaction.reply({ embeds: [embedNotKickable], ephemeral: true})

    if (utente.id === autore.id) return interaction.reply({ embeds: [embedTeStesso], ephemeral: true})

    const logEmbed = new EmbedBuilder()
    .setColor(0x0049FF)
.setTitle(`Ban log - ${interaction.user.username}`)
.setDescription(`${interaction.user.username} ha bannato un utente.`)
.addFields(
  { name: 'Utente:', value: ` ${utente}` },
  { name: 'Motivo:', value: ` ${motivo}` },
)
.setFooter({ text: 'Livorno - Toscana', iconURL: 'https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png' });


    
    return (
      (await utente.kick()) + interaction.reply({ embeds: [embedKicked]}) + await channelLog.send({ embeds: [logEmbed]})
    )
    }
}});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
                if (!interaction.isCommand()) return;
  if (interaction.commandName === 'help') {
      const embedHelp = new EmbedBuilder()
          .setColor(0x000000)
          .setThumbnail('https://cdn.discordapp.com/attachments/1088175259246669876/1091343178906484787/5a7cb23b9e5b3c36d089f61322f460ea.png')
      .setTitle(`Help - Comandi`)
      .setDescription(`${interaction.user.username} ecco a te la lista dei comandi.`)
      .addFields(
        { name: '/help', value: `Comando per vedere la lista dei comandi.`},
        { name: '/ban', value: `Comando per bannare un utente dal discord.`},
        { name: '/kick', value: `Comando per kickare un utente dal discord.`},
        { name: '/messaggio', value: `Comando per inviare un messaggio rp non anonimo.`},
        { name: '/messaggioanonimo', value: `Comando per inviare un messaggio rp anonimo.`},
        { name: '/messaggioistituzionale', value: `Comando per inviare un messaggio rp da parte di una istituzione.`},
        { name: '/robloxlogban', value: `Comando per inviare un ban eseguito sul gioco roblox.`},
        { name: '/robloxlogkick', value: `Comando per inviare un kick eseguito sul gioco roblox.`},
        { name: '/robloxlogunban', value: `Comando per inviare un unban eseguito sul gioco roblox.`},
        { name: '/ping', value: `Comando per vedere il ping del bot.`},
        { name: '/ticketsetup', value: `Comando per inviare il setup ticket.`},
      )

      interaction.reply({ embeds: [embedHelp]})
}});









client.login(TOKEN)