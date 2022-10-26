const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect", (data) => {
    console.log("You're connected...!");
    setTimeout(() => {
      conn.write("Name: UWU");
    }
    ,1000);
  });

  conn.on("data", (data) => {
    console.log("It's got a sharp tongue, this server!", data);
  });

  conn.setEncoding("utf8");

  return conn;
};
console.log('Connecting ... ');

module.exports = {
  net,
  connect,
};