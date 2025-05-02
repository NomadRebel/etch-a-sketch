const main = document.querySelector("#main");
const size = (680/16)-2; // 680 width of main div and 2 for the borders
const asks = 16*16;
for(let i=0; i<asks; i++){ //generate a div till the i is less than asks 
      
  const childDivOne = document.createElement("div");
    
    childDivOne.style.width = size+"px"; // changing size by variable
    childDivOne.style.height = size+"px";
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // generate once
    childDivOne.addEventListener("mouseover", () => {
      if (!childDivOne.style.backgroundColor) {
        childDivOne.style.backgroundColor = randomColor;
      }
      childDivOne.style.opacity = (parseFloat(childDivOne.style.opacity) || 0) + 0.2;
      childDivOne.style.transition = "0.1s";
    });
     
    childDivOne.className = "childOne";
    main.appendChild(childDivOne);
  }
  
function sketch(){ //function that do all the stuff that the page suppose to do

  main.innerHTML ="";  // empty the main div

  const ask = window.prompt("Type your choice", '');
  const num = parseInt(ask); // convert the string the user inputed to number so we can apply conditions

  if (num>100){ //number should be less than hundered
    alert("Number should be less than Hundered! Your PC isn't powerful enough to handle more than that.");
  }

  else{ // this do everything
    const size = (680/ask)-2; // 680 width of main div and 2 for the borders
    const asks = ask*ask; // to make enough number of div
    
    for(let i=0; i<asks; i++){ //generate a div till the i is less than asks 
      
    const childDivOne = document.createElement("div");
      
      childDivOne.style.width = size+"px"; // changing size by variable
      childDivOne.style.height = size+"px";
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // generate once
      childDivOne.addEventListener("mouseover", () => {
        if (!childDivOne.style.backgroundColor) {
          childDivOne.style.backgroundColor = randomColor;
        }
        childDivOne.style.opacity = (parseFloat(childDivOne.style.opacity) || 0) + 0.2;
        childDivOne.style.transition = "0.1s";
      });
      
      
      childDivOne.className = "childOne";
      main.appendChild(childDivOne);
    }
  }
}

const btn = document.querySelector("#start");
btn.addEventListener("click",sketch);

