const users = [
        {
        "username": "totallylegitusername",
        "password": "48nb574v23c5"
        //never store passwords like this
        },
        {
        "username": "leroyjenkins",
        "password": "756g4w3762gf4"
        },
        //never store passwords in the open
    ];



function getAll() {
    return users;
}

function register(user){
    return users
    .insert(user)
}

function login(user){
    return users
    .where({user})
}

module.exports = {
    getAll,
    register,
    login,
}