// use fs-extra for additional functionality
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.json");

const content = JSON.stringify({
  userId: 1,
  id: 1,
  title: "ich bin anna",
  completed: false,
});

console.info(
  path.dirname(filePath),
  path.basename(filePath),
  path.extname(filePath),
  path.resolve(filePath),
  path.parse(filePath)
);

fs.open(filePath, "r", (err, fd) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(fd);
});

try {
  const fd = fs.openSync(filePath, "r");
  console.info(`fs openSync`, fd);
} catch (err) {
  console.error(err);
}

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(stats);
});

try {
  const stat = fs.statSync(filePath);
  console.info("StatSync", stat);
  console.info(
    "StatSync",
    stat.isFile(),
    stat.isDirectory(),
    stat.size,
    stat.isSymbolicLink()
  );
} catch (err) {
  console.error(err);
}

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(data);
});

try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.info("ReadFileSync ", data);
} catch (err) {
  console.error(err);
}

// fs.writeFile(filePath, content, { flag: "a+" }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.info(content);
// });

// try {
//   const data = fs.writeFileSync(filePath, content);
//   console.info("WriteFileSync", data);
// } catch (err) {
//   console.error(err);
// }

// fs.appendFile(filePath, content, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.info(content);
// });

// try {
//   const data = fs.appendFileSync(filePath, content);
//   console.info("appendFileSync", data);
// } catch (err) {
//   console.error(err);
// }

// fs.existsSync(dir);
// fs.mkdirSync(dir);
// fs.readdirSync(dir);
// fs.renameSync(filePath, filePath);
// fs.rmdirSync(dir);
