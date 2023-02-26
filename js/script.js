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
        //prendiamo tutti gli elementi square
        const generatedSquares = document.getElementsByClassName("square");
        console.log(generatedSquares);
        //inizializziamo l'array dei numeri bomba e lo carichiamo in maniera casuale 
        const bombArray = [];
        let randomNumber = "";
        let i = 0;
        while(i < 16 ){
              randomNumber = rndNumberGenerate(squaresInGrid);
              //se il numero generato è già presente ne generiamo un altro
              if(bombArray.includes(randomNumber)){
                randomNumber = rndNumberGenerate(squaresInGrid);
              }else{
                //altrimenti lo carichiamo nell'array
                bombArray.push(randomNumber);
                i++;
              }
            }
            console.log(bombArray);
            ///////////////////////////////////////////////////////////////////////
            //ciclo per debug che mostra in tutti i quadrati rossi
            // for(let i = 0; i < bombArray.length; i++){
            //     let elementI = bombArray[i];
            //     for(let j = 0; j < generatedSquares.length; j++){
            //         let elementJ = parseInt(generatedSquares[j].innerHTML);
            //         if(elementI === elementJ){
            //             generatedSquares[j].classList.add("bomb");
            //         } 
            //     }
            // }
            //////////////////////////////////////////////////////////////////////
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
            thisSquare.addEventListener("click", squareOnClick);

        return thisSquare;
        }
        //funzione per la gestione del click sugli square
        let noBombIndex = 0;
        const noBombArray = [];
        function squareOnClick(){
            let flag = false;
            const innerNumber = parseInt(this.textContent);
            console.log(innerNumber);
            if(bombArray.includes(innerNumber)){
                flag = true;
                this.classList.add("bomb");
                for(let i = 0; i < bombArray.length; i++){
                    let elementI = bombArray[i];
                    for(let j = 0; j < generatedSquares.length; j++){
                        let elementJ = parseInt(generatedSquares[j].innerHTML);
                        if(elementI === elementJ){
                            generatedSquares[j].classList.add("bomb");
                        } 
                        generatedSquares[j].removeEventListener('click', squareOnClick);
                    }
                }
                alert('Partita finita , hai perso');
            } 
            else{
                const remainingSquares = squaresInGrid - 16;
                console.log(remainingSquares);
                    if(flag == false)
                    {
                    this.classList.add("bg_lightblue");
                    console.log(this.textContent);
                    noBombArray.push(parseInt(this.textContent));
                    this.removeEventListener('click', squareOnClick)
                    noBombIndex++;
                    console.log(noBombArray);

                    if(noBombArray.length === remainingSquares){
                        console.log('hai vinto');
                        alert('Congratulazioni hai vinto!!');
                        for(let j = 0; j < generatedSquares.length; j++){
                            generatedSquares[j].removeEventListener('click', squareOnClick);
                        } 
                    }
                } 
               
            } 
        }
        //funzione per generazione un numero random
        function rndNumberGenerate(gridLegth){
            let rndNumber = Math.floor(Math.random() * gridLegth) + 1;
            return rndNumber;
        }

})