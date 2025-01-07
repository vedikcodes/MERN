//---->Creating an Express Server<-------

//1.create directory
//2.Create index.js file
//3.Initialise NPM
//4.Install the Express package
//5.write Server application in index.js
//6.start server

import express from "express";
const app =express();
const port =3000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
});