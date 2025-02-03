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