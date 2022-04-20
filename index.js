const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Building my first node project with node, express and reloading with nodemon');
});

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    res.send(users);
});

app.post('/user', (req, res)=>{
    const user = (req.body);
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

const users = [
    { id: 1, name: "Jalil", email: "Jalil@gmail.com" },
    { id: 2, name: "Rahim", email: "Rahim@gmail.com" },
    { id: 3, name: "Abdul", email: "Abdul@gmail.com" },
    { id: 4, name: "Karim", email: "Karim@gmail.com" },
    { id: 5, name: "Farid", email: "Farid@gmail.com" },
    { id: 6, name: "Rafiq", email: "Rafiq@gmail.com" },
    { id: 7, name: "Abdul", email: "Abdul@gmail.com" }
]

app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.userId);
    const user = users.find(element => element.id === id);
    res.send(user);
});

app.get('/names',(req,res)=>{
    res.send(['abdul', 'jabbar','rafiq','jalil']);
})

app.listen(port, () => {
    console.log('listening to the port,', port);
});