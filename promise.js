
const chocolate=new Promise((resolve,reject)=>{
    const choco=0;
    if(choco>=3){
        resolve("Give one chocolate");
    
    }else{
        reject("Not give you chocolate");
    }
})
chocolate.then((task1)=>{
    console.log(task1);
    console.log("no need to bring more chocolates");
}).catch((error)=>{
    console.log(error);
    console.log("need to bring chocolates");
})