import server from "./server";
const express = require("express");

const app = express();

app.get("/user-api/user", (req, res) => {
  res.send("Welcome back!");
});

app.post("user-api/user", (req, res) => {
  res.send("User created");
});

// app.put('/user-api/user', (req, res) =>{
//   res.send('User updated')
// })

// app.delete("user-api/user", (req, res) => {
//   res.send("User deleted");
// });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));

export default app;
