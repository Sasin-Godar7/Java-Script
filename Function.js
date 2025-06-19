//   function onePlus(x, y) {
//             console.log("done");

//             return Math.round(1 + (x + y) / 2);
//         }


//         let a = 1;
//         let b = 2;
//         let c = 3;

//         console.log("one plus the average of a and b is", onePlus(a, b));

//         console.log("one plus the average of b and c is", onePlus(b, c));

//         console.log("one plus the average of a and c is", onePlus(a, c));

//         // arrow function

//         const sum = (p, q) => {

//             return p + q;

//         }
//         console.log("the sum of the given two number is ", sum(9, 1));

//         const hello = () => {
//             console.log("hey guys i am using the arrow funtion");
//         }

//         hello();  // this is envoking the hello function

let age = Number.parseInt(prompt("Enter you age :"));

ageCheck(age);

const ageCheck=(age)=>
{
    if (age <= 18);
    {
        console.log("you can go for vote");
    }
    {
        console.log("you cant go for the vote");
    }
}



