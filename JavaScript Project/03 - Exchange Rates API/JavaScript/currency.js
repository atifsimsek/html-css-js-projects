class Currency
{

    constructor(firstCurrency,secondCurrency)
    {
        this.firstSelect = firstCurrency;
        this.secondSelect = secondCurrency;
        this.url ="https://api.exchangerate.host/latest?base="
        this.amount;

    }

    exchange(){

    return new Promise((resolve, reject) =>{
        fetch(this.url + this.firstSelect)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondSelect];
            const amount2 = Number(this.amount);
            let total = parity * amount2;
            resolve(total);

        })
        .catch(err => reject(err));
    });
          

    
    
    }

    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstSelect=newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondSelect=newSecondCurrency;
    }





    
}