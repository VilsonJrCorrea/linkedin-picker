const { google } = require("googleapis");
module.exports = {
  run(auth, rowsToSave) {
    const sheets = google.sheets({ version: "v4", auth });
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: process.env.SHEET_ID,
        range: process.env.SHEET_NAME,
        valueInputOption: "RAW",
        resource: {
          values: rowsToSave,
        },
      },
      (err, result) => {
        if (err) {
          // Handle error
          console.log(err);
        } else {
          console.log(
            `${rowsToSave.length} rows appended.`,
            result.data.updates.updatedRange
          );
        }
      }
    );
  },
};
