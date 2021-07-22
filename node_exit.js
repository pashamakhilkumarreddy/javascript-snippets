const http = require("http");

const [PORT, HOST] = [5000, "127.0.0.1"];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: `Hola Mundo Gwen Stacy`,
    })
  );
});

server.listen(PORT, HOST, () => {
  console.info(`The server is up and running on http://${HOST}:${PORT}`);
  // process.exit(1);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.warn(`Process terminated`);
  });
});
