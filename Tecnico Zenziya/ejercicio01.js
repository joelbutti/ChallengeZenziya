
const PrintMultiples = () => {

    for (let i = 1; i <= 200; i++){
        
        if(i % 3 === 0 && i % 5 === 0){
            console.log("ZenziyFinctech");
        }else if(i % 3 === 0){
             console.log("Zenziya");
        }else if(i % 5 === 0){
            console.log("Fintech");
        }else{
            console.log(i)
        }
    }
}

PrintMultiples();
