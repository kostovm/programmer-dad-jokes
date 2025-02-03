// Ternary for a Happy Marriage

const isRight = true ? 'wife' : 'husband';

// Recursive Hydration

function getDrink(isTimeForBeer: boolean): string{

    if(isTimeForBeer){
        let drink = 'Beer';
        return drink;
    }else{
        let drink = 'Water';
        return getDrink(!isTimeForBeer);
    }
}

// When in Doubt, Throw

if(looksAs === 'shit' && smelsAs === 'shit' && tastesAs === 'shit'){
    throw new Error("You probably shouldn't have eaten it");
}

