function hasNetwork(online) {
  const element = document.querySelector(".status");
  const element2 = document.querySelector(".offlinemsg");
  // Update the DOM to reflect the current status
  if (online) {
    element.classList.remove("offline");
    element.classList.add("online");
    element.innerText = "Online";
    element2.innerText = "";
  } else {
    element.classList.remove("online");
    element.classList.add("offline");
    element.innerText = "Offline";
    element2.innerText = "You are offline! Autosave is disabled.";
  }
}
window.addEventListener("load", () => {
  hasNetwork(navigator.onLine);
  window.addEventListener("online", () => {
    // Set hasNetwork to online when they change to online.
    hasNetwork(true);
  });
  window.addEventListener("offline", () => {
    // Set hasNetwork to offline when they change to offline.
    hasNetwork(false);
  });
});
