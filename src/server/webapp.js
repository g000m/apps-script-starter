export const doGet = () => {
  const title = 'Google Apps Script';
  const fileName = 'index.html';
  return HtmlService.createHtmlOutputFromFile(fileName)
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
};

export const doPost = (e) => {
  const title = 'Google Apps Script';
  const fileName = 'index.html';
  const template = HtmlService.createTemplateFromFile(fileName);

  // Pass the POST data to the template
  template.data = e.parameter;

  return template.evaluate()
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
