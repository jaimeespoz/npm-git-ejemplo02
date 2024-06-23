/**
 * 
 */

const axios = require('axios')

const greet = name => {
    'Hello ' + name
}

const users = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res
}

// users().then(res => console.log(res));

module.exports = { greet, users }