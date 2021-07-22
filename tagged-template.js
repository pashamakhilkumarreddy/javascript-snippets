const introduce = (strs, ...args) => {
  console.log(strs, args);
  return `Hola ${args[0]} Como estas?`;
};

const [name] = ["Gwen Stacy"];

const msg = introduce`Hola Mundo! Estoy ${name}`;

console.info(msg);
