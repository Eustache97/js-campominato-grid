//Prendiamo gli elementi DOM che ci servono
const wrapper = document.querySelector(".wrapper");
console.log(wrapper);
const levelGrid = document.getElementById("level");
console.log(levelGrid);
const submitBtn = document.getElementById("submit");
console.log(submitBtn);
//al click di submit
submitBtn.addEventListener("click", function(){
    //Ripuliamo il contenuto di wrapper
        wrapper.innerHTML = "";
        //Creiamo dinamicamente la grilla e lo appendiamo nel wrapper
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.classList.add("bg_white");
        wrapper.append(grid);
        //Inizializziamo una variabile vuota che conterra a seconda della difficoltà il numero di square del grid 
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
        //andiamo ad appendere al grid il numero di square che ci servono
        let innerSquare = 1;
        for(let i = 0; i < squaresInGrid; i++){
            const square = generateSquare(squaresInGrid);
            grid.append(square);
            innerSquare++;
        }
        console.log(grid);
        const generatedSquares = document.getElementsByClassName("square");
        console.log(generatedSquares);
        const bombArray = [];
        let randomNumber = "";
        let i = 0;
        while(i < 16 ){
              randomNumber = rndNumberGenerate(squaresInGrid);

              if(bombArray.includes(randomNumber)){
                randomNumber = rndNumberGenerate(squaresInGrid);
              }else{
                bombArray.push(randomNumber);
                i++;
              }
            }
            console.log(bombArray);
        //funzione per la creazione di uno square
        function generateSquare (){
        
            let gridFormat = "";
            const thisSquare = document.createElement("div");
            thisSquare.classList.add("square");
            switch (levelGrid.value) {
                case "easy":
                    gridFormat = 10;
                    break;
                case "medium":
                    gridFormat = 9;
                    break;
                case "hard":
                    gridFormat = 7;
                    break;
            }
            thisSquare.classList.add(`square-${gridFormat}`);
            thisSquare.append(innerSquare);
            thisSquare.addEventListener("click", squareOnClick());
            
        return thisSquare;
        }
        //funzione per la gestione del click sugli square
        function squareOnClick(array){
            const noBombArray = [];
            const innerNumber = parseInt(this.textContent);
            if(bombArray.includes(innerNumber)){
                this.classList.add("bomb");
                for(let i = 0; i < bombArray.legth; i++){
                    let elementI = bombArray[i];
                    for(let j = 0; j < generatedSquares.length; j++){
                        let elementJ = generatedSquares[j];
                       if(elementI == elementJ){
                        elementI.classList.add("bomb");
                    } 
                    }
                    
                }
            } 
            else{
                this.classList.add("bg_lightblue");
                console.log(this.textContent);
                noBombArray.push(this.textContent);
            }
            
        }
        //funzione per generazione un numero random
        function rndNumberGenerate(gridLegth){
            let rndNumber = Math.floor(Math.random() * gridLegth) + 1;
            return rndNumber;
        }

})