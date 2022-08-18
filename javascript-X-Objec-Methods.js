// Object method to print name and age


let ob={
    print :function(){
        console.log("aman");
        console.log(24);
    }
}

ob["print"]();


let object={
    print:function (){
        console.log("name" , "vikram");
        console.log("age",24);
        console.log("phone" , "97564917244")
    }
}

object["print"]();


// 2.-------------------------------------------


// how to pass parameters in object mehhords



// let obj ={
//      print: function(name,age , location){
//         console.log("My name is" ,name);
//         console.log("I am", age, "years old");
//         console.log("I am from", location);
//     }
// };


// obj["print"]("vikram", 25, "bihar");




// 3.----------------------------------------


// declare an Object method which would return the sum of two numbers

// function sum(){
//     let x=10;
//     let y=90;

//     return x+y;
// }


// let rusult= sum (10,90);
// console.log(rusult);


// let ob={
//     sum:function (x+y){
//         return x+y;
//     }
// }


// 4.------------------------------------------

// there is on object given with length and breadth to you, create object methods to calculate the area and perimeter of rectangel.


// let obj={

//     l:10,
//     b:5,

//     area: function(){
//         return this.l*this.b;
//     }

//     per: function (){
//         return 2*(this.l+this.b);
//     }

// }

// let area=obj["area"]();
// let parameters=obj["peri"]();

// console.log(area, perimeters);




let details={
    name: "Bruce Wayne",
    age: 43,
    location: "Gotham city",
    hobbies: ["Gadgets", "Crime Fighting","Biking"],

    intro: function(){
        console.log("My name is" , this.name);
        console.log("I am ", this.age, "years old");
        console.log("I am from", this.location);

        let bag = "";
        for(let i=0; i<=this.hobbies.length-1;i++){
            bag=bag+this.hobbies[i]+" ,";
        }
        console.log("MY hobbies are", bag);
    }
};

details["intro"]();

// let object={
//     print:function (){
//         console.log("name" , "vikram");
//         console.log("age",24);
//         console.log("phone" , "97564917244")
//     }
// }