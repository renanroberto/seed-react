import { addUser } from '../store/user'

async function request(url, method) {
  const headers = new Headers({ 'Content-Type': 'application/json' })
  const config = { method, headers }
  const request = new Request(url, config)

  const res = await fetch(request)
  const data = await res.json()

  return data
}

const get = (url) => request(url, 'GET')

export const getUser = async () => {
  const user = await get('http://www.mocky.io/v2/5bd4db073200005300a3be40')
  addUser(user)

  return user
}
