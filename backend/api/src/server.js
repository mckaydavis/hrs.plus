const app = require("./app");

const { EXPRESS_SERVER_PORT } = process.env;

const server = app.listen(EXPRESS_SERVER_PORT, () => {
  console.log(`> Listening on http://localhost:${server.address().port}`);
});
