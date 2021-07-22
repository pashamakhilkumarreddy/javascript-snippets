// run the file using node node_args.js gwen ashido

/**
  argv[0]: Node installation path
  argv[1]: File path with command
  argv[2:]: Rest of the arguments
 */

console.info(`The args are ${process.argv}`);

const args = process.argv.slice(2);

console.info(`Args: ${args}`);
