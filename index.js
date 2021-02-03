const express = require("express");
require("dotenv").config();

const { SERVER_PORT } = process.env;

const app = express();

app.use();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});
