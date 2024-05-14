// const a=10
// a=11


// Array

// let a=[1,"Hello",true]
// console.log(a)

// Object
// let a={
//     "hello":"This",
//     2:"is"
// }
// console.log(a.hello)
// console.log(a['hello'])
// console.log(a)

// let a
// console.log(a);

// for(i=0;i<5;i++)
//     {
//         console.log(i);
//     }
// let i=0
//     while(i<5)
//         {
//             console.log(i);
//             i++
//         }

a=[1,2,3,4,5]

// let sum=0
// for(i=0;i<=a.length-1;i++)
//     {
//         sum+=a[i]
//     }
// console.log("The sum of the array is "+sum);

// let largest=a[0]
// for(i=0;i<a.length;i++)
//     {
//         if(a[i]>largest)
//             {
//                 largest=a[i]
//             }
//     }

//     console.log("The largest element of the array is "+largest);

//     a.push(6)
//     console.log(a);

//     for(const num of a)
//         {
//             console.log(num);
//         }


// Array function
// map
// doubled=a.map((num)=>num*2)
// halfed=a.map((num)=>num*0.5)
// console.log(halfed);
// filter

// even=a.filter((num)=>num%2==0)
// console.log(even);

// function adding(a,b)
// {
//     return a+b
// }
// const add=(a)=>
//     {
//         return a+b
//     }

// reduce
// const sum=a.reduce((acc,num)=>acc+num,0)
// console.log(sum/a.length);

// FOr Each

// a.forEach((num) => {
//     console.log(num)
// });

// const add=(a,b,c)=>
//     {

//         return a+b+c
//     }

//     let num=1

// String Literals
// let b="Test"+1
// let b=`Test${num}`
// console.log(b);


// object destructering

// a={name:"test",roll:2,subject:"maths"}
// // name1=a.name
// // roll1=a.roll
// // sub=a.subject
// const {name,roll,subject}=a
// console.log(name,roll,subject);

// for(i=2;i<5;i++)
//     {
//         console.log(a[i]);
//     }

// sum=0
// for(i=0;i<5;i++)
//     {
//         sum+=a[i]
//     }

// let a1=parseInt(prompt("Enter The first number"))
// let b=parseInt(prompt("Enter The second number"))
// document.write(`The sum is ${a1+b}`)

// let a1=1
// let b=2
// console.log(a1++b);

// var name1=document.getElementById("name")

// console.log(name1.innerHTML);

// name1.classList.add("four")

function verify(e)
{
    e.preventDefault();
    console.log("yes");
    let error=false
    var username=document.getElementById('name').innerText
    var pass=document.getElementById('pass')
    console.log(pass)
    if(username.length<3)
        {
            error=true
        }
    if(pass.length<6)
        {
            error=true
        }
    if(error!=false)
        {
            alert("Wrong Username or password")
        }

    
    

}




    

