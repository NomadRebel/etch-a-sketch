const main = document.querySelector("#main");
function sketch(){
  main.innerHTML ="";
  const ask = window.prompt("Type your choice", '');
  const num = parseInt(ask);
  if (num>100){
    alert("Number should be less than Hundered! Your PC isn't powerful enough to handle more than that.");
  }
  else{
    const size = (680/ask)-2;
    const asks = ask*ask;
    
    for(let i=0; i<asks; i++){
      const childDivOne = document.createElement("div");
      childDivOne.style.width = size+"px";
      childDivOne.style.height = size+"px";
      childDivOne.addEventListener("mouseover", ()=> {
        childDivOne.style.backgroundColor = "black";
      });
      
      childDivOne.className = "childOne";
      main.appendChild(childDivOne);
    }
  }
}

const btn = document.querySelector("#start");
btn.addEventListener("click",sketch);
