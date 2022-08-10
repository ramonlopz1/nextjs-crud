export function post(user) {
    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })
}

export function put(id, user) {
    fetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify({id, user})
    })
}

export async function get() {
    const list = await fetch('/api/users')
    const users = await list.json()
    return users
}

export async function del(id) {
    fetch(`/api/users/`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
}