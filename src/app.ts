// consider using joi for validation

import server from "./server";
const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { email: "a@gmail.com", password: "12345" },
  { email: "b@gmail.com", password: "98765" },
  { email: "c@gmail.com", password: "6273fg" },
];

app.get("/user-api/user", (req, res) => {
  res.send("Welcome back!");
});

app.get("/user-api/user/:email", (req, res) => {
  const user = users.find((u) => u.email === req.params.email);
  if (user) {
    res.send("Welcome back, " + req.params.email);
  } else {
    res.status(404).send("This user does not exist");
    res.send(user);
  }
});
app.get("/user-api/users", (req, res) => {
  res.send(users);
});

app.post("user-api/users", (req, res) => {
  if (!req.body.email || !req.body.email.includes("@")) {
    res.status(400).send("Email is required and should contain @");
    return;
  }
  if (!req.body.password || req.body.password.length <= 3) {
    res
      .status(400)
      .send("A password is required and it should be longer than 3 characters");
    return;
  }
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  users.push(user);
  res.send("User created successfully");
  res.send(user);
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
