import { Response, Request } from "express";
import nodeMailer from "nodemailer";
import { UserModel } from "../../db/models/user";

const isEmailValid = async (email: string) => {
  const result = UserModel.findOne({ email: email });
  return result;
};

const transporter = nodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "zolushkazz13@gmail.com",
    pass: "felmlsywlpcyizii",
  },
});
function generateRandomToken(): string {
  const min = 100000;
  const max = 999999;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

export const ResetQuery = async (req: Request) => {
  //trasnportoor email bichigdene
  try {
    const { email } = req.body;
    console.log(req.body);
    const isUserThere = await isEmailValid(email);

    if (!isUserThere) {
      return "User not existed";
    }
    //4orontoi too ashigladag func
    const randomNumber = generateRandomToken();

    //where which email from whom? sent email
    const options = {
      from: "zolushkazz13@gmail.com",
      to: email,
      subject: "helloooo",
      text: `Your random code ${randomNumber}`,
    };

    await transporter.sendMail(options);

    const updateOtp = await UserModel.updateOne(
      { email: isUserThere.email },
      { $set: { otp: randomNumber } }
    );

    return updateOtp;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
