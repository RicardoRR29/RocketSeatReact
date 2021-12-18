type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.city}`;
}

const user = {
    name: 'John doe',
    email: 'John doe',
    address: {
        city: 'New York',
        state: 'NY'
    },
}

const message = showWelcomeMessage(user)