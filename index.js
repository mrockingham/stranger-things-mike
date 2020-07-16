const server = require("./api/server.js");
const express =('express')
const chalk = require('chalk')

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(chalk.blue`\n** My app is running on ${PORT} **\n`);
});
