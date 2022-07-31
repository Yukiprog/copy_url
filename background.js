browser.pageAction.onClicked.addListener((tab) => {
  const decodedUrl = decodeURI(tab.url);
  try{
    navigator.clipboard.writeText(decodedUrl);

  } catch(error) {
    console.log("can't copy");
  }
});