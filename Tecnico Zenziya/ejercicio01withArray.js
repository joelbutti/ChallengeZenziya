
const PopulateArray = () => {

    let array = [];
    for(let i=1 ; i <= 200; i++){
        array.push(i);
    }
    return array;
}

const PrintMultiples= (array) => {

    array.map((x) =>{
        x % 3 === 0 && x % 5 === 0? console.log("ZenziyFinctech") :
            x % 3 === 0? console.log("Zenziya") :
                x % 5 === 0? console.log("Fintech") : null;
    })
}

const array = PopulateArray();

PrintMultiples(array);

