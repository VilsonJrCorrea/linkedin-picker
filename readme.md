#### Snippet 

- In `./snippet` folder you can find the spippet that you can add in `DevTools`;
- Then just run this snippet on [job page](https://www.linkedin.com/jobs/search/?currentJobId=3538868348);
- When you run the snippet, it will open a `blank page` with the jobs filtered by  `tags` and `notTags` included on `snippet`;
- You just need to scroll the page, you don't need to click in any of the jobs offers,
- If you want you can move to subsequent page, go ahead, everything will be added on `blank page`
- After that, you can copy the content added in this new page and paste it on the path: `/input/content.txt`

#### How to configure google sheets

- Enable [Google API](https://console.cloud.google.com/flows/enableapi?apiid=sheets.googleapis.com&hl=pt-br);
- Create a new [credential](https://console.cloud.google.com/apis/credentials?hl=pt-br), download the file, rename to `credentials.json` and add on the `root` of the project;
- Any problems you can verify the full documentation [here](https://developers.google.com/sheets/api/quickstart/nodejs?hl=pt-br);
- Create an `.env` file based on `.env.example` which contains the informations about your `google sheets` like `sheet's id` (included on URL of you sheet) and `sheet's name `(that's the name of the tab on your sheet)
- So then you can run  `npm install` to install de dependencies and then `npm run dev` to parse the `content.txt` to the `google sheets`

#### Extra features on google sheets 

- On google sheets, I created a filter where the line is painted based on `subscribed` colunm, for example:

  - 0 - not subscribed (background color: white, font color: black);
  - 1 - subscribed (background color: green, font color: black);
  - 2 - not interested (background color: white, font color: white);
- You can check this [tutorial](https://support.google.com/docs/answer/78413?hl=en&co=GENIE.Platform%3DDesktop) for more details;

#### Final's considerations

- Any doubt open an issue or contact me by [e-mail](vilsonjrcorrea@gmail.com)
