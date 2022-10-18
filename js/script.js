const wrapper = document.querySelector(".wrapper");
console.log(wrapper);
const levelGrid = document.getElementById("level");
console.log(levelGrid);
const submitBtn = document.getElementById("submit");
console.log(submitBtn);
let flag = false;
submitBtn.addEventListener("click", function(){
    if(flag == false){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        wrapper.append(grid);
        let squaresInGrid = "";
        switch (levelGrid.value) {
            case "easy":
                squaresInGrid = 100;
                break;
            case "medium":
                squaresInGrid = 81;
                break;
            case "hard":
                squaresInGrid = 49;
                break;
        }
        const generatedSquares = generateSquare(squaresInGrid);
        
        function generateSquare (gridLegth){
        let innerSquare = 1;
        for(i = 0; i < gridLegth; i++){
            const thisSquare = document.createElement("div");
            thisSquare.classList.add("square");
            switch (levelGrid.value) {
                case "easy":
                    thisSquare.classList.add("square-10");
                    break;
                case "medium":
                    thisSquare.classList.add("square-9");
                    break;
                case "hard":
                    thisSquare.classList.add("square-7");
                    break;
            }
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
    }
    flag = true;
})