import express = require("express");

const app = express()
app.set("port", process.env.PORT || 3000)

export default app

app.get('/user-api/user', req, res) => {
  res.send('Welcome back ${user.email}!')
}

app.post('user-api/user', req, res) => {
  res.send('User created')
}

// app.put('/user-api/user', req, res) =>{
//   res.send('User updated')
// }

app.delete('user-api/user', req, res) =>{
  res.send('User deleted')
}