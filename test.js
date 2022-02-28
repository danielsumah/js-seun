const users = [
    {
        username: "timpel",
        password: "123"
    },
    {
        username: "daniel",
        password: "xyz"
    }
]

const details = [
    {
        username: "daniel",
        fname: "Daniel",
        accountBalance : 5000
    },
    {
        username: "timpel",
        fname: "Seun",
        accountBalance : 7000
    }
]

const getUser = (username,password) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].username ===username && users[index].password ===password ) {
            return true
        }
    }

    return false
}

const getAccountBalance = (username) =>{
    for (let index = 0; index < details.length; index++) {
        if (details[index].username == username) {
            return details[index].accountBalance
        }
        
    }
}
// console.log(getUser("timpel", "123"))
console.log(getAccountBalance('danielreee'))

