// code your solution here
// let me experiment how to write default values.i think it should be 
//assigned in order for it to be a default value
function test(one='test',two='test'){
    console.log (`this test is stupid right ${one} and ${two}.`)}
// forgot to call it 
test()
//seems i was right

function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun());
//function declaration is where in the function you give it a name
//function expression is the function itself without the name

console.log(function(){
   return('yet more dazzling')
});
// i am definitely going to regret not reading the event listener content
//const button  = document.getElementById('button');
//button.addEventListener('click',function(){
  //  console.log('Yet more dazzling');
//})
//recall that any expression can be assigned to a variable even a function expression

const fn=function(){
    console.log('Yet more razzling');
};
fn();

let mondayWork = function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
};
console.log(mondayWork());

// we are now onto immediately invoked function expression
//example
(function(baseNumber){
    console.log(baseNumber + 3);
})(5);// it surely works

//now to function level scope

function outer(greeting,msg='it is a fine day to learn'){
    const innerFunction = function (name,lang = 'python'){
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction ('student','javascript');
}
console.log(outer('hello'));
// i have seen a couple of complex stuff including anonymous function 
// i was kinda wondering where else you can use an anonymous function 
// and now i got it 

// what is a closure i wonder 
//anonymous function and closure
const array = (function(thingToAdd){
    const base = 3;  // in this function there are a couple of anonymous functions 
    return [   // what i am honestly wondering is how i will make an anonymous function visible
        function (){ // because i tried console.log but it seemed that it was going to give me an error of the sort
            return base + thingToAdd;
        },
        function(){
            return base;
        },
    ];
})(2);
console.log(array[0]());
console.log(array[1]());

// this is complex stuff and i need to be done with it be the time i am going to sleep
//define scope chain

// it seems you can have anonymous functions within other functions
//as long as you cannot call them there should be no issues
// i was also wondering this in the parameters area what if the parameter you have placed is not being used anywhere in your code 

function wrapAdjective(string='*'){
    return function (gift = 'special') {
        return `You are ${string}${gift}${string}!`;
    }
};
// console.log(wrapAdjective('%')('a dedicated programmer'));
// this does not work why i wonder should i have that console.log command in the function itself

console.log(wrapAdjective('*')('a programmer'));





