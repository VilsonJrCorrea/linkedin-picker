const { google } = require("googleapis");

module.exports = {
  async run(auth) {
    const sheets = google.sheets({ version: "v4", auth });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: process.env.SHEET_NAME,
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
      console.log("No data found.");
      return [];
    }
    return rows;
  },
};
