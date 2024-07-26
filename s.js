// from https://khang-nd.github.io/7.css/script.js
function tabHandler(e, tabButtons) {
    e.preventDefault();
    const tabContainer = e.target.parentElement.parentElement;
    const targetId = e.target.getAttribute("aria-controls");
    tabButtons.forEach((_tabButton) =>
      _tabButton.setAttribute("aria-selected", false)
    );
    e.target.setAttribute("aria-selected", true);
    e.target.focus();
    tabContainer
      .querySelectorAll("[role=tabpanel]")
      .forEach((tabPanel) => tabPanel.setAttribute("hidden", true));
    tabContainer
      .querySelector(`[role=tabpanel]#${targetId}`)
      .removeAttribute("hidden");
  }
  const templateTabList = document.querySelector("[aria-label='tabs']");
  const templateTabButtons = templateTabList.querySelectorAll("[role=tab]");
  templateTabButtons.forEach((tabButton) =>
    tabButton.addEventListener("mousedown", (evt) => {
      tabHandler(evt, templateTabButtons)
    }));
  templateTabButtons.forEach((tabButton) =>
    tabButton.addEventListener("focus", (evt) => {
      tabHandler(evt, templateTabButtons)
    }));