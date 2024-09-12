


const calculate = (num1, num2, operator ) => {
        
       const  allowedoperator = ['add', 'subtract', 'multiply', 'divide']
      
       if ( allowedoperator.includes(operator) ) {
      switch (operator){
        case'add':
            console.log(num1+num2)
            break;
        case'subtract':
            console.log(num1-num2)
            break;
        case'multiply':
           console.log(num1*num2)
            break;
        case'divide':
            console.log(num1/num2)
            break;
        default: 
            console.log("wrong operation") } }
            // else if (num1 === null || num2 === null || num1 === undefined || num2 === undefined ) {
            //     console.log(`you entered a text that is either not acceptable or undefined check: num1 = ${num1}, num2 = ${num2}, operator = ${operator}`)
            // }
            // although these else statement should catch what ever error  that will occur
            // i did the else if block just to show the kind of error that could occur
            else {console.log(`you entered a text that is not a number or an operator not acceptable check: num1 = ${num1}, num2 = ${num2}, operator = ${operator}`)}

};

// test cases

calculate(1,2,'add');
calculate(1,2,'subtract');
calculate(1,2,'multiply');
calculate(10,5,'divide');
calculate(1,'t','divide');
calculate(1,'','divid');
calculate(4, 'add')
calculate(10, 0, 'divide')


//CE64-E271
//https://github.com/Triplebond1/node/commit/b81f0aaa0ca7d8b65f75958748952e43bd59a04d

//2
//https://github.com/Triplebond1/node/commit/7f834b7f00ab4bf60bccb580315bdaa39635b0b2