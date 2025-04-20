const main = document.querySelector("#main");
const btn = document.querySelector("#create");
btn.addEventListener("click", ()=>{
  for(let i=0; i<33; i++){
    const childDiv = document.createElement("div");
    childDiv.textContent = `${i} it works`;
    main.appendChild(childDiv);
  }
})