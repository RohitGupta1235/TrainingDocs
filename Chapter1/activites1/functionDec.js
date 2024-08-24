// const x=()=>{



//     console.log("this is the man !!");
    
// }

// x();

// document.write("fejkkdfjkj");

const x=function(){
    console.log("prajwal is handsome!!");
    
}

x();


// setTimeout(()=>{

// },5000);



// map /rdeuce /FileSystemEntry

// const y=[1,2,3,4,];

//  const out=y.map(x=> x*x);

//  console.log(out);

//  filter name



// const out1=y.filter(x=>(x%2)!=0)
// console.log(out1);


// const stud=[


//     {
//         name:"rohit",
//         age:23

//     },
//     {
//         name:"prajwal",
//         age:21

//     }
//     ,{
//         name:"prachi",
//         age:20
//     }
// ]



// const outstud=stud.filter(x=>(x.name.startsWith('p'))?x.name:"");

// const finalOut=outstud.map(x=>x.name)
// console.log(finalOut);



// console.log(stud);

 
const y=[1,2,3,4,5];



///reduce(function(acc,x),intialvalue of the acuatlot)


const sum=y.reduce(function(acc,x){

    acc+=x;
    return acc;
},0)
console.log(sum);


const max=y.reduce(function(acc,curr){

    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)
console.log(max);






// {


//     name:
//     age:
//     height:
//     marks:


// }


// return ({
     
// studentDetails.map((x)=>{x})






// })


// Map



//higher order function name 












