var app = (function (exports) {
  "use strict";
  const doGet = () => {
    const title = "Google Apps Script";
    const fileName = "index.html";
    return HtmlService.createHtmlOutputFromFile(fileName)
      .setTitle(title)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
  };
  const doPost = (e) => {
    const title = "Google Apps Script";
    const fileName = "index.html";
    const template = HtmlService.createTemplateFromFile(fileName);
    template.data = e.parameter;
    return template
      .evaluate()
      .setTitle(title)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
  };
  exports.doGet = doGet;
  exports.doPost = doPost;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  return exports;
})({});

const doGet = (...args) => app.doGet(...args);
const doPost = (...args) => app.doPost(...args);
