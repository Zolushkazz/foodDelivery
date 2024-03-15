// import jwt from "jsonwebtoken";
// import { Response, Request } from "express";
// import { UserModel } from "../../db/models/user";

// const getUserByEmail = async (email: string) => {
//   const user = await UserModel.findOne({ email: email });
//   return user;
// };

// export const tokenVerify = async (req: Request, res: Response) => {
//   try {
//     const token: string = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       res.status(400).send("Token is not provided");
//     }
//     jwt.verify(token, "secret", (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//     // const decoded = jwt.decode(token, "secret")

//     // const email = decoded.email
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
