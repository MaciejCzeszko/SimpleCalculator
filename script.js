const buttons = document.querySelectorAll("button");
const output = document.querySelector("#output");
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (e) => {
  if (e.target.id === "") return;
  switch (e.target.id) {
    case "C":
      output.innerHTML = "";
      break;
    case "equal":
      output.innerHTML = eval(output.innerHTML);
      break;
    default:
      output.innerHTML += e.target.innerHTML;
  }
});
