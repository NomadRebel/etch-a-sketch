const main = document.querySelector("#main");
for(let i=0; i<256; i++){
  const childDiv = document.createElement("div");
  childDiv.textContent = `${i}`;
  childDiv.addEventListener("mouseover", ()=> {
    childDiv.style.backgroundColor = "black";
  })
  childDiv.className = "child";
  main.appendChild(childDiv);

}
