const users = {}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const newUser = (user) => {
    if(!user) return

    if(!user.id) user.id = sequence.id
    users[user.id] = user
    return user
}

const attUser = (id, user) => {
    users[id] = user
}

const listUsers = () => {
    return Object.values(users) || {}
}

const removeUser = (id) => {
    const user = users[id]
    delete users[id]
    return user
}

export default {
    newUser,
    attUser,
    listUsers,
    removeUser
}