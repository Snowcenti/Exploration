(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const { Calculator, Snake, Fight } = require('weky')
    const os = require("os-utils");
    let https = require("https")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if(!require('./package.json').dependencies['discord.js'].includes("13.")) console.log("Seems you arent using v13 please run `npm i discord.js@13.12.0`");

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    

    // blockly code
    var welcomes, red_valley, pines;
    
    function listsGetRandomItem(list, remove) {
      var x = Math.floor(Math.random() * list.length);
      if (remove) {
        return list.splice(x, 1)[0];
      } else {
        return list[x];
      }
    }
    
    
    await s4d.client.login('OTk2OTAzNjU1MzEzNzg5MDcw.Gr3tNJ.igRB0dtIiBEn_pg84aorSKIqWRjktP1FTeWc9g').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end('This site was created to keep Harmony on 24/7!');
    });
    server.listen(3000);
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if ((s4dmessage.content) == 'h!ping') {
        s4dmessage.channel.send({content:String('pong!')});
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      // This will set your ticket channel to mentioned channel
      if (((s4dmessage.content) || '').startsWith('h!ticket' || '')) {
        try{
                  ticket.setup(s4dmessage, s4dmessage.mentions.channels.first().id);s4dmessage.channel.send({content:String((['I have set the ticket channel to ','<#',s4dmessage.mentions.channels.first(),'>'].join('')))});
    
            }catch(err){
                  s4dmessage.channel.send({content:String('You need to mention a channel!')});
    
            };
            }
      if (((s4dmessage.content) || '').startsWith('h!close' || '')) {
        ticket.close(s4dmessage.channel);s4dmessage.channel.send({content:String('Closed the ticket')});
      }
      if (((s4dmessage.content) || '').startsWith('h!archive' || '')) {
        s4dmessage.channel.send({content:String('Archived the ticket')});
        ticket.archive(s4dmessage.channel);}
      if (((s4dmessage.content) || '').startsWith('h!unarchive' || '')) {
        s4dmessage.channel.send({content:String('Unarchived the ticket')});
        ticket.unarchive(s4dmessage.channel);}
    
    });
    
    s4d.client.on('guildMemberAdd', async (param1) => {
    s4d.joiningMember = param1;
      _Ad__FT_25s__isfdsO29U = await   await delay(Number(2)*1000);
        (s4d.joiningMember.guild).channels.cache.find((category) => category.name === 'general').send({content:String((['Welcome <@',(s4d.joiningMember.user).id,'> to **',(s4d.joiningMember.guild).name,'**! Please make sure to fill out an <#694040065357250651><:cattoblush:805860428365430784>'].join('')))});
    s4d.joiningMember = null
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (!((s4dmessage.author).bot)) {
        if ((s4dmessage.content) == 'h!redvalley') {
          red_valley = ['You find some **Moss** under a bush!', 'Feeling the texture under your paws change, you find some **Moss**!', 'You pounce towards a mouse! Oh wait… Its actually a **Stone**.', `Not able to find much, you grab a **Stone** out of the grass.
          `, `You pull a branch off of a bush, but it breaks in your mouth. Now you have a **Stick**!
          `, `You find a **Stick** in the grass.
          `, `You caught… a **Leaf**! Good try!
          `, `Thinking you’ve found some herbs, you pick up a **Leaf**!
          `, 'You’ve found some **Gunk!** ', 'You lift up a rock and find some **Gunk**... This is useless!', `Running! Running! And it’s down! You’ve caught yourself a **Rabbit**!
          `, `Following a soft rattling sound, you manage to catch yourself a **Snake**!
          `, `As you sniff the air a silly little **Mouse** runs right into your paw, yum!
          `, 'You dart though the grass and catch yourself a **Mouse**.', `Pushing a rock over, you find a pretty **Lizard** hiding underneath. You’re coming home with me, little guy!
          `, `As it flies overhead you leap up and catch a **Small Bird**.
          `, `You run out from a bush and scare a **Small Bird**. If only it was faster than you!
          `, 'You run towards something bright in the grass only to find rotting **Carrion**... gross!', `Trying to find any prey, all you smell is some **Carrion**. Maybe it's time to head home.
          `, `You run towards what looks like lavender, but it's actually a budding **Catmint** plant! The herbalists might want some of this!
          `, `Is that tree roots at your feet? Nope, it's just some big **Burdock Root**
          `, `A big leaf hits your face, and you realize it's a burdock plant! Perfect time to gather some **Burdock Root**!
          `, `You carefully pick up some **Cobwebs** off a rock.
          `, 'You almost walk straight through some **Cobwebs** while hiding in a bush.', `You see something bright in the distance, finding yourself a **Pretty Flower**.
          `, `You roll around in some **Flowers**! Might as well take one home!
          `, `You miss your catch *flighty*, but end up pulling out a **Feather**!
          `, `You find a **Feather** in the grass.
          `, `While trying to find herbs you find some **Small Flowers** instead.
          `, `You find some **Bone Shards** in what remains of an eaten carrion.
          `, `You can't find any prey, only some **Bone Shards**. Creepy.
          `];
          s4dmessage.channel.send((listsGetRandomItem(red_valley, false)));
        }
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (!((s4dmessage.author).bot)) {
        if ((s4dmessage.content) == 'h!pines') {
          pines = ['>>>You notice a weird lump on the ground, while inspecting it you realize that it’s a **Moss Cluster!**', '>>>While walking you trip over a **Leafy Branch!** Watch where you are going. ', '>>>Walking up to a tree, you dig your claws into some **Moss** that was resting on the side of it! ', `>>>While looking for prey you find **Moss** instead! It’s not going to fill your belly but you take it anyways.
          `, `>>>While scratching your claws on a tree some **Bark** comes off!
          `, `>>>While walking you notice a piece of **Bark** peeling from a tree, you take it!
          `, `>>>As you’re walking something glitters, you realize it’s just a **Stone.**
          `, `>>>You stare at an oddly shaped **Stone** for a while before deciding to take it.
          `, `>>>You found a really pointy **Stick!** Be careful with it.
          `, '>>>You get hit in the head with a falling **Stick!** You keep it as revenge.', `>>>While playing you notice a pretty **Leaf!**
          `, `>>>You pull on a branch and get a mouthful of leaves, you pick the driest **Leaf.**
          `, `>>>While running you step in some **Gunk** ew! It’s stuck to your fur.
          `, `>>>You stick your paw in a hole and get a pawfull of **Gunk!** Why?
          `, `>>>While walking you find some **Pebbles!** Why are they here?
          `, `>>>You find a bunch of **Pebbles** by stepping on them! Ouch.
          `, '>>>Something screeches in your ear, out of panic you attack! Somehow you managed to kill a **Large Bird**, you say you were confident.', `>>>Your belly rumbles, it’s time to hunt! You go and catch a **Mouse**.
          `, `>>>You’re enjoying your day when you find a dead **Mouse**, cool.
          `, `>>>While walking you hear something, you pounce! You catch a **Small Bird**.
          `, `>>>While hunting you catch a **Small Bird** it’s not too impressive but will be a nice snack.
          `, `>>>You smell something rotting, it’s leftover **Carrion**.
          `, `>>>You find **Carrion** and cringe.
          `, `>>>You smell something GOOD, going for it you realize it’s **Catmint**, you keep it for yourself.
          `, `>>>While foraging you find some **Borage**.
          `, `>>>You’re unsure of what this plant is, but you take it anyways. You got **Borage!**
          `, `>>>You walk right through **Cobweb!** Well that’s one way to collect it.
          `, `>>>You notice **Cobweb** and admire it’s intricacies before collecting it.
          `, `>>>As your walking you step in a pile of **Poppy Seeds** interesting.
          `, `>>>You see a broken flower, you collect **Poppy Seeds**.
          `, `>>>While walking a **Pretty Flower** catches your eye, you can’t help yourself and you take it.
          `, `>>>While walking you hear a crunch under your paw, you stepped on **Bones.**
          `, `>>>You see **Bones** sticking out from underneath some leaves and take them.
          `, `>>>You hear wings above you and look up, a **Feather** floats down onto your nose.
          `, `>>>While hunting you find a **Feather!** Maybe it’s good luck?
          `, `>>>You find a patch of **Small Flowers** and pick them.
          `, `>>>You frolic through the hunting grounds and find some **Small Flowers**, aw pretty!
          `, `>>>You find something dead, you collect **Bone Shards** from it!
          `, `>>>After awhile of walking you settle down, only to find some **Bone Shards**, maybe keep walking…
          `];
          s4dmessage.channel.send((listsGetRandomItem(pines, false)));
        }
      }
    
    });
    
    return s4d
})();