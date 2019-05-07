// Create Connection to mysql db

const { createConnection }= require('mysql2')
const { prompt } = require('inquirer')

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
        if (e) { console.log(e) } else {
            data.forEach(({ item_id, product_name, price}) => {
                console.log(`
                **************
                Product: ${product_name}
                Price: ${price}
                Product ID: ${item_id}
                **************
                `)
            })
        }
        // console.log(data)
    })
    const getAction = _ => {
        prompt ({
            type: 'input',
            name: 'action',
            message: 'What is the ID of the product you wish to purchase?'
        },
        {
           type: 'input',
           name: 'action',
           message: 'How many units would you like to purchase?'
        })
        .then(r => {
           console.log(r)
        })
        .catch(e => console.log(e))
    }
   
    getAction()
})

