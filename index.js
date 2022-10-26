const express = require('express')
const app = express()
const port = process.env.port || 5000;
var cors = require('cors')
app.use(cors())
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('news api is running');
});

app.get('/course-category', (req, res) => {
    res.send(categories)
});
app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = courses.filter(course => course.category_id === id);
    res.send(selectedCategory);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log(`Knowledge Dot website listening on port ${port}`)
});