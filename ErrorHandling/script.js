
try{
    console.log("Try block will throw an error");
    // console.log(Shreya);
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log("Catch block will detect it");
}
finally{
    console.log("This is final block");
}