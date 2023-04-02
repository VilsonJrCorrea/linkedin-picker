const fs = require("fs");
module.exports = {
  run(currentRows) {
    const allFileContents = fs.readFileSync("input/content.txt", "utf-8");
    const result = {};
    allFileContents.split(/\r?\n/).forEach((line) => {
      const [id, match, easyApply, title, location, remote, link] =
        line.split(";");
      result[id] = {
        subscribed: 0,
        id,
        match,
        easyApply,
        title,
        location,
        remote,
        link,
      };
    });

    const rows = currentRows;
    const resultReader = {};
    rows.forEach((row) => {
      const [id, subscribed, match, easyApply, title, location, remote, link] =
        row;
      resultReader[id] = {
        id,
        subscribed,
        match,
        easyApply,
        title,
        location,
        remote,
        link,
      };
    });
    const toSave = [];
    Object.keys(result).forEach((key) => {
      if (resultReader[key] === undefined) {
        toSave.push(result[key]);
      }
    });
    console.log("Rows to save", toSave.length);
    if (!toSave.length) {
      return [];
    }

    return Object.values(toSave).map((row) => {
      return [
        row.id,
        row.subscribed,
        row.match,
        row.easyApply,
        row.title,
        row.location,
        row.remote,
        row.link,
      ];
    });
  },
};
