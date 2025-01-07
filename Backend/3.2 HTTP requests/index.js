import express from "express";
const app = express();
const port =3000;

app.get("/" , (req , res) => {
   res.send("<h1>Home page</h1>")
})

app.get("/contact" , (req , res) => {
    res.send("<h1>constact me </h1><p> phone no 7879511983</p>")
})

app.get("/about" , (req , res) => {
    res.send("<h1>About me</h1><p>I'm the coolest motherfuckaa</p>");
});
app.listen(port , () => {
    console.log(`Server has started on port ${port}`);
})