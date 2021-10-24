const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const port = 5000;



app.get('/', (req, res) => {
    res.send(' hello hello hlw hi bye bye from node js');
})

const users = [
    { id: 0, name: 'gonia',email:'gonia@gmail.com', age: 29, phone: '0182827337' },
    { id: 1, name: 'sabana',email:'sabana@gmail.com', age: 22, phone: '0172827337' },
    { id: 2, name: 'sonia',email:'sonia@gmail.com', age: 23, phone: '0176627337' },
    { id: 3, name: 'monia',email:'monia@gmail.com', age: 20, phone: '0192827737' },
    { id: 4, name: 'tonia',email:'tonia@gmail.com', age: 28, phone: '0133827337' },
    { id: 5, name: 'bania',email:'bania@gmail.com', age: 29, phone: '0182827337' }
]

app.get('/users', (req, res) => {
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})


app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy yummy fazli');
})
app.get('/fruits/mangoes',(req,res)=>{
    res.send('yummy yummy fruit mango');
})

app.listen(port, () => {
    console.log('listening to port', port);
});