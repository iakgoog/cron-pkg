const chalk = require("chalk");
const chokidar = require("chokidar");
const path = require("path");

const watchDir = path.join(__dirname, "..", "watch");

const watcher = chokidar.watch(watchDir, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

const log = console.log.bind(console);

watcher.on("add", (path) => log(chalk.red(`File ${path} has been added`)));
