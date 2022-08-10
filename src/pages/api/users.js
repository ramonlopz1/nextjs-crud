import UserModel from '../../models/UserModel.js'
const { newUser, attUser, listUsers, removeUser } = UserModel

// /api/users: post and get
export default function users(req, res) {
    if(req.method === 'POST') {
        const bd = JSON.parse(req.body)
        const user = newUser(bd)
        res.status(200).send(user)
    } else if (req.method === 'GET') {
        const list = listUsers()
        res.status(200).json(list)
    } else if(req.method === 'DELETE') {
        const id = JSON.parse(req.body)
        const deletedUser = removeUser(id)
        res.status(200).send(deletedUser)
    } else if(req.method === 'PUT') {

        const { id, user } = JSON.parse(req.body)
        console.log(id)
        console.log(user)
        const attedUser = attUser(id, user)
        res.status(200).send(attedUser)
    }
}