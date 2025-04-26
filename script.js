const main = document.querySelector("#main");
function sketch(){
  const ask = window.prompt("Type your choice", '');
  const size = (680/ask)-2;
  const asks = ask*ask;
  console.log(size);
  for(let i=0; i<asks; i++){

    const childDivOne = document.createElement("div");
    childDivOne.style.width = size+"px";
    childDivOne.style.height = size+"px";
    childDivOne.addEventListener("mouseover", ()=> {
    childDivOne.style.backgroundColor = "black";
    })
    childDivOne.className = "childOne";
    main.appendChild(childDivOne);
  }
}

const btn = document.querySelector("#start");
btn.addEventListener("click",sketch);
