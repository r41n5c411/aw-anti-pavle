document.querySelector("#chat_expanded_inner").childNodes.forEach((node) => {
  node.childNodes.forEach((childNode) => validate(node, childNode));
});

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      node.childNodes.forEach((child) => validate(node, child));
    });
  });
});

function validate(parent, child) {
  if (
    child.nodeName === "A" &&
    child.textContent &&
    child.textContent.includes("Pavle")
  ) {
    parent.style.display = "none";
  }
}

observer.observe(document.querySelector("#chat_expanded_inner"), {
  childList: true,
});
