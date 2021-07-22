// run the file using USER_NAME='Gwen Stacy' ENV=development node node_env.js

console.info(
  `Hola ${process.env.USER_NAME}, you are in ${process.env.ENV} mode`
);
