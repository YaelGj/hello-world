export const getUsers = async() => {
  const response = await fetch('http://localhost:3001/users',{method:'GET'})
  const users = await response.json()
  return users
}