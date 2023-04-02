const read = require("./api/read");
const processNew = require("./processNew");
const auth = require("./api/auth");
const save = require("./api/save");
const dotenv = require("dotenv");
dotenv.config();

auth
  .authorize()
  .then(async (auth) => {
    const savedRows = await read.run(auth);
    const rowsToSave = processNew.run(savedRows);
    save.run(auth, rowsToSave);
  })
  .catch(console.error);
