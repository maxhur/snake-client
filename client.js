const net = require("net");
const { iP, port } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host : iP,
    port : port
  });

  conn.on("connect", (data) => {
    console.log("You're connected...!");
    conn.write("Name: UWU");
  });
  
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};