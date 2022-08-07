import { Request, Response, NextFunction } from "express";

// need a get user, create users, update users and delete users

interface User {
  //id
  //DOB
  email: string;
  password: string;
}

// logging in a single user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let result;
};
