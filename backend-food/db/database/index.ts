import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://zolushkazz13:@Pi98307@zolushkazz.p23msff.mongodb.net/";

export const ConnectDb = async () => {
  set("strictQuery", false);

  try {
    await connect(CONNECTION_STRING),
      console.log("Successfully connected to DB");
  } catch (err) {
    console.log("DB connection is unsuccessful");
  }
};
