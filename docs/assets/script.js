const download = (rawUrl) => {
  let url;
  console.log({ rawUrl });
  if (rawUrl.startsWith("http")) {
    url = new URL(url).pathname;
  }
  if (rawUrl.startsWith("//")) {
    url = new URL(`http:${url}`).pathname;
  } else {
    url = new URL(`${location.origin}${rawUrl}`).pathname;
  }
  console.log({ url });
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

$(document).ready(() => {
  const eachElement = (selector, fn) => {
    for (let e of document.querySelectorAll(selector)) {
      fn(e);
    }
  };
  const copyToClipboard = (index) => {
    const textToCopy = document.querySelector(
      `div#post-${index} input#post-url-${index}`
    );
    console.log(`div#post-${index} input#post-url-${index}`);
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    return textToCopy.value;
  };

  eachElement("div.modal.fade", (e) => {
    const modalId = e.getAttribute("id");
    const id = modalId.split("-").pop();
    console.log({ modalId });
    $(`#${modalId}`).on("show.bs.modal", function () {
      const postId = `post-${id}`;
      console.log({ postId });
      const modalElement = document.querySelector(`input#post-url-${id}`);
      modalElement.value = `${window.location.origin}${window.location.pathname}#${postId}`;
    });
  });

  // initalize all tooltips
  $('[data-toggle="tooltip"]').tooltip();
  // onclick copy text to clipboard
  $('[data-toggle="tooltip"]').on("click", function (e) {
    const id = e.target.getAttribute("id").split("-").pop();
    const copiedText = copyToClipboard(id);
    // dispose old tooltip and show new tooltip
    $(`#tooltip-${id}`).tooltip("dispose");
    e.target.setAttribute("data-bs-original-title", `Copied: ${copiedText}`);
    $(`#tooltip-${id}`).tooltip("show");
    // restore to old state, hover-out and hover-in reflect
    e.target.setAttribute("data-bs-original-title", `Copy to clipboard`);
  });
});
