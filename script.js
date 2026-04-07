function showAnimation() {
  let text = document.getElementById("inputText").value.toLowerCase();
  let box = document.getElementById("animationBox");

  if (text.includes("walk")) {
    box.innerHTML = "🚶";
  } else if (text.includes("run")) {
    box.innerHTML = "🏃";
  } else if (text.includes("sleep")) {
    box.innerHTML = "😴";
  } else {
    box.innerHTML = "🎬";
  }
}
