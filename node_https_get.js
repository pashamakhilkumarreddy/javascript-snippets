const https = require("https");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/todos",
  method: "GET",
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

req.end();
