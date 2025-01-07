const fs = require('fs');
const os = require("os");
console.log(os.cpus().length);

//Synchronous
fs.writeFileSync('./test.txt', "hey there!"); 

//Asynschronous

//  const result =fs.readFileSync('./test.txt',"utf-8")
//  console.log(result);

fs.writeFileSync('./test.txt', "dont get Overwhelmed dumbshit!"); 

// fs.readFile("./test.txt", "utf-8" ,(err,result) => {
//     if(err){
//         console.log("Error" , err);

//     }
//     else {
//         console.log(result);
//     }
// });

fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());
console.log(fs.statSync("./test.txt"));


