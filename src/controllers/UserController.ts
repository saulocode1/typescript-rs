import { Request, Response } from "express";

const users = [{ name: "Saulo", email: "sauloveigr@hotmail.com" }];

export default {
   async index(req: Request, res: Response) {
      return res.json(users);
   },
};
