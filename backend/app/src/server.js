require("node-jsx").install();
const app = require("./app.jsx");

const { EXPRESS_SERVER_PORT } = process.env;

const server = app.listen(EXPRESS_SERVER_PORT, () => {
  console.log(`> Listening on http://localhost:${server.address().port}`);
});
