import { connect, set } from "mongoose";

export const dbConnection = async () => {
  const dbConfig = {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };

  await connect(process.env.MONGODB_URI, dbConfig.options);
  console.log("MONGODB connected successfully");
};
