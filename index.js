const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
//endpoints:
//put, delete, post, get

students = [
    { id: "1", name: "Benji" },
    { id: "2", name: "Itir" },
    { id: "3", name: "Olgcan" },
];


app.get('/greetings', (req, res) => {
    res.send('Hello Class!');
    // console.log(req);
});

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});


app.get('/students', (req, res) => {
    res.send(students);
});


app.get('/students/:id', (req, res) => {
    const studentId = req.params.id;
    const studentInfos = students.find((student) => {
        return student.id === studentId;
    });
    res.send(studentInfos);
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent)
    console.log(newStudent);
});



// app.listen(port);

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})