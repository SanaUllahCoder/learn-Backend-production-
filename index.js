import express from "express";
// import dotenv from "dotenv";
// dotenv.config();

const app = express();


app.use(express.static('dist'))


app.get("/api/student", (req, res) => {
  const students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Ahmed", age: 21 },
    { id: 3, name: "Sara", age: 19 },
    { id: 4, name: "Usman", age: 22 },
    { id: 5, name: "Ayesha", age: 20 },
    { id: 6, name: "Bilal", age: 23 },
    { id: 7, name: "Hina", age: 18 },
    { id: 8, name: "Zain", age: 24 },
    { id: 9, name: "Fatima", age: 21 },
    { id: 10, name: "Hassan", age: 22 },
    { id: 11, name: "Maryam", age: 19 },
    { id: 12, name: "Omar", age: 25 },
    { id: 13, name: "Noor", age: 20 },
    { id: 14, name: "Daniyal", age: 23 },
    { id: 15, name: "Laiba", age: 18 },
    { id: 15, name: "Laiba", age: 18 }

  ];
  res.send(students);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`START SERVER on port`);
});
