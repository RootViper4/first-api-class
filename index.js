const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
//endpoints:
//CRUD 
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

app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        res.send(`Student with ID ${id} has been deleted`);
    } else {
        res.status(404).send('Student not found');
    }
});


app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedStudent };
        res.send(`Student with ID ${id} has been updated`);
    } else {
        res.status(404).send('Student not found');
    }
});



// app.listen(port);

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})