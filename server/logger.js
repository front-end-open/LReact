/*
 * @LastEditTime: 2022-03-15 00:53:10
 * @Description: 控制台日志输出配置
 * @Date: 2022-03-15 00:48:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const chalk = require("chalk"); // 粉笔
const ip = require("ip");

const divider = chalk.gray("\n-----------------------------------");

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.green("✓")}`);

    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green("✓")}`);
    }
    console.log(`
${chalk.bold("Access URLs:")}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
LAN: ${
      chalk.magenta(`http://${ip.address()}:${port}`) +
      (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : "")
    }${divider}
${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `);
  },
};

module.exports = logger;
