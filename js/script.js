const wrapper = document.querySelector(".wrapper");
console.log(wrapper);
const submitBtn = document.getElementById("submit");
console.log(submitBtn);
submitBtn.addEventListener("click", function(){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    wrapper.append(grid);
    const generatedSquares = generateSquare(100);
    
    function generateSquare (gridLegth){
    let innerSquare = 1;
    for(i = 0; i < gridLegth; i++){
        const thisSquare = document.createElement("div");
        thisSquare.classList.add("square");
        thisSquare.classList.add("square-10");
        thisSquare.classList.add("bg_white");
        thisSquare.append(innerSquare);
        grid.append(thisSquare);
        thisSquare.addEventListener("click", function(){
            this.classList.remove("bg_white");
            this.classList.add("bg_lightblue");
            console.log(this.textContent);
        })
        innerSquare++;
    }
    }
})