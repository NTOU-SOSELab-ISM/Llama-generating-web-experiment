function createKeyboardLayout() {
  const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  for (const row of keyboard) {
    const div = document.createElement("div");
    div.className = "key";

    for (const key of row) {
      const span = document.createElement("span");
      span.textContent = key;
      div.appendChild(span);
    }

    document.getElementById("keyboardLayout").appendChild(div);
  }
}

function addEventListenerToSwitchBackground() {
  document.getElementById("switchBackground").addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  });
}

function init() {
  addEventListenerToSwitchBackground();
  createKeyboardLayout();
}

init();
