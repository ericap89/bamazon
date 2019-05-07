// Create Connection to mysql db

const { createConnection }= require('mysql2')

db = createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database:'bamazon'
})

// db.connect(e => e ? console.log(e) : console.log('Connected...'))
db.connect(e => {
    if (e) { console.log(e) }
    //Display Products
    db.query('SELECT * FROM products', (e, data) => {
        if (e) { console.log(e) }
        console.log(data)
    })
})
