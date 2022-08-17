// problem1
//= the the function to check if the number is even or old

function check_number(x){
if(x%2==0){
    console.log("yes")
}else{
    console.log("No");
}
}

check_number(2,1);



//1. ---------------------------------



//=> write a function to check if the number is even or odd if the number is even then check is it a multiple of 4  or not

function check_number(x){
if(x%2==0){
    return x; // returining enven number
    // console.log("yes")
}else{
    // console.log("No");
    return false;
}
}

let num=check_number(8);  //calling statement

// when i have to perform any added operation on the outcome of a function, i will use return


if(num%4==0){
    console.log(num, "is a multiple of 4");
}else{
     console.log(num, "is a not multiple of 4");
}



// 2. -----------------------------------------



function check_number(x){
    if(x%2==0){
        return true;
    }else{
        return false;
    }
}

// if a number is even the function will give true as tthe output m otherwise false

let result= check_number(50);

// console.log(result);    case 1


if(result==true){
    console.log("yes, it is even");
}else{
    console.log("Odd number");
}



// 3 ==> --------------------------------------------------

// using the previously defined function check even and odd number 1 and 50;


for(let i=1; i<=50; i++){
    let res = check_number(i);
    if(res==true){
        console.log(i, " is even");
    }else{
        console.log(i,"is odd");
    }
}


// 4.---------------------------------------

// problem4

// write a function to reverse a string


let str=["amanl"]


function reverse(str){
let bag ="";

for(let i=str.length-1; i>=0; i--){
    bag =bag+str[i];

}

console.log(bag);
}

reverse("vikram");



// 5.---------------------------------------

// using the reverse Function , check if the string is a pallindrome or not naman


let string= "naman";

function reverse(str){
let bag ="";

for(let i=str.length-1; i>=0; i--){
    bag =bag+str[i];

}

return bag;
}

let rev_str=reverse(string);

// console.log(rev_str);

if(string==rev_str){
    console.log("pallindrome");
}else{
    console.log("Not a Pallindrome");
}



// 6.---------------------------------------------------------
// inbuild function

// let x= 9;

// console.log(typeof(x));


let animal = ["pigs", "goats", "sheep"];

let x=animal.push("dog");

console.log(animal);
console.log(x);


// let sentence = 'the qucik brown fox jumps over the lazy dog';

// let word = "";

// for(let i=0; i<=sentence.length-1; i++){
//     if(sentence[i]=""){
//         word=word+sentence[i];
//     }else{
//         arr.push(word);
//         word="";
//     }
// }

// console.log(arr);




let character = ["Rey" , "mondo","kenobi", "boba Fett" , "Yida"]

function starwars(char){
    let subTotal =0;

    for(let i=0; i<char.length; i++){
        if(char[i].length%2==0){
            subTotal=subTotal+1;
        }else{
            subTotal=subTotal+2;
        }
        return subTotal;
    }
}

let total =5 + starwars(character);
console.log(total);