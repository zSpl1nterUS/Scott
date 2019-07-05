const http = require('http'),
  express = require('express'),
  app = express();

app.get("/", (request, response) => {
    response.sendStatus(200);
  });
app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const { ShardingManager } = require('discord.js'),
  manager = new ShardingManager(`./scott.js`, { totalShards: 1, respawn: true }); 
manager.on('launch', shard => console.log(`Shard ${(shard.id + 1)}: iniciada com sucesso!`))

manager.spawn()