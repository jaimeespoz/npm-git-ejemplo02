const axios = require('axios')

/**
 * 
 * @param {string} name 
 */
const greet = name => {
    return 'Hello ' + name
}

/**
 * 
 * @returns 
 */
const users = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res
}

// users().then(res => console.log(res));

module.exports = { greet, users }