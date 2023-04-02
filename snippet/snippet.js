const myWindow = window.open("", "_blank", " ");
const tags = [
  "desenvolvedor",
  "remote",
  "software",
  "developer",
  "vue",
  "react",
  "full",
  "stack",
  "frontend",
  "front",
  "end",
  "vue.js",
];
const notTags = [
  "backend",
  "devops",
  "data",
  "freelancer",
  "php",
  "angular",
  "afirmativa",
  "afirmativas",
  "adobe",
  "ux",
  "ruby",
  "salesforce",
  "c#",
  ".net",
  "ui",
  "java",
  "internship",
  "native",
  "citizen",
  "lead",
  "mobile",
  "designer",
  "bi",
  "ui/ux",
  "magento",
  "python",
];
const prefixId = "https://www.linkedin.com/jobs/view/";
const sufixId = "/?";
const pad = 30;
const space = ";";
let prevText = "";

const intervalId = setInterval(() => {
  let $cards = document.querySelectorAll(".job-card-container");
  let result = {};
  $cards.forEach(($card) => {
    let $titleContent = $card.querySelector(
      ".full-width.artdeco-entity-lockup__title.ember-view>a"
    );
    let title = $titleContent.innerHTML
      .replaceAll("(", " ")
      .replaceAll(")", " ")
      .replaceAll(",", " ")
      .replaceAll(".", " ")
      .replaceAll("-", " ")
      .replaceAll("/", " ")
      .replaceAll(":", " ")
      .replaceAll(";", " ")
      .replaceAll("!", " ")
      .replaceAll("?", " ")
      .replaceAll("[", " ")
      .replaceAll("]", " ")
      .replaceAll("{", " ")
      .replaceAll("}", " ")
      .replaceAll("  ", " ")
      .toLowerCase()
      .trim();
    let link = $titleContent.href.trim();
    let location = $card
      .querySelector(".job-card-container__metadata-item")
      .innerHTML.trim();
    const idStart = link.indexOf(prefixId);
    const idEnd = link.indexOf(sufixId);
    const id = link.substring(idStart + prefixId.length, idEnd);
    const $flavor = $card.querySelector(".job-flavors__label");
    let bMatch = false;
    if ($flavor) {
      bMatch = $flavor.innerHTML.trim() === "Your profile matches this job";
    }
    let bEasyApply = false;
    const $applyMethod = $card.querySelector(
      ".job-card-container__apply-method"
    );
    if ($applyMethod) {
      bEasyApply = $applyMethod.lastChild.wholeText.trim() === "Easy Apply";
    }
    let workplace = $card
      .querySelector(".job-card-container__metadata-item--workplace-type")
      .innerHTML.toLowerCase()
      .trim();

    const bMatchTitle = title.split(" ").some((t) => tags.includes(t));
    const bDontMatchTitle = title.split(" ").some((t) => notTags.includes(t));

    if ((bMatchTitle || tags.includes(workplace)) && !bDontMatchTitle) {
      result[id] = { id, title, location, link, workplace, bMatch, bEasyApply };
    }
  });

  let text = "";
  Object.values(result).forEach((line) => {
    text += `${line.id}${space}match:${String(
      line.bMatch
    )}${space}easyApply:${String(line.bEasyApply)}${space}${
      line.title
    }${space}${line.location}${space}\t${line.workplace}${space}\t${
      line.link
    };<br>`;
  });

  if (prevText === text) {
    console.log("text is the same");
    return;
  }
  myWindow.document.write(text);
  prevText = text;
  console.log("Saved");
}, 3000);

console.log(intervalId);
