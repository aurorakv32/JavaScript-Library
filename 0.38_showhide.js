// you can use .hide() when you want hide a page for a given tab.  

browser.pageAction.onClicked.addListener((tab) => {
	browser.pageAction.hide(tab.id);
});

// the opposite of this would be .show()
browser.contextMenus.create({
  id: "show",
  title: "Show page action"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "show") {
    browser.pageAction.show(tab.id);
  }
});