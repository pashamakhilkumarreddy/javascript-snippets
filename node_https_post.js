const https = require("https");

const data = JSON.stringify({
  todo: `Pagar la cuenta`,
});

const options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/todos",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  console.info(`Status Code: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (err) => {
  console.error(err);
});

req.write(data);

req.end();
