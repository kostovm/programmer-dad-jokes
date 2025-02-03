//Title: Ternary for a Happy Marriage

const isRight = true ? 'wife' : 'husband';

// ------- Ba Dum Tss! ------- //

//Title: Recursive Hydration

function getDrink(isTimeForBeer){

    if(isTimeForBeer){
        let drink = 'Beer';
        return drink;
    }else{
        let drink = 'Water';
        return getDrink(!isTimeForBeer);
    }
}

// ------- Ba Dum Tss! ------- //

//Title: When in Doubt, Throw

if(looksAs === 'shit' && smelsAs === 'shit' && tastesAs === 'shit'){
    throw new Error("You probably shouldn't have eaten it");
}

// ------- Ba Dum Tss! ------- //

//Title: Will to Live Reduced

const reasonsToLive = {
    'kids': 40,
    'work': 10,
    'happiness': 20,
    'love': 30,
    // Adjust your values in percents
}

const willToLive = Object.values(reasonsToLive);

const meaningOfLife = willToLive.reduce((will, reason) => {
 will + reason;
});

console.log(`The meaning of life is: ${meaningOfLife}`); 