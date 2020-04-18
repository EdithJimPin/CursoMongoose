require('./connection')

const User = require('./models/User')

async function createUsers(){
    const user = new User({
        username: 'Dona',
        password: '12345'
    })
    await user.save();

    const userTwo = new User({
        username: 'Cameron',
        password: 'pass'
    })
    await userTwo.save();
}

createUsers();