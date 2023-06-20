import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // input validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // store it in db
    const newMessage = { email, name, message, id: "" };
    console.log("newMessage = ", newMessage);

    let client;
    try {
      client = await MongoClient.connect(
        process.env.NEXT_MONGODB_URI as string
      );
    } catch (err) {
      return res.status(500).json({ message: "Couldn't connect to db" });
    }

    const db = client?.db();

    try {
      const result = await db?.collection("messages").insertOne(newMessage);
      newMessage.id = result?.insertedId.toString() as string;
    } catch (err) {
      return res.status(500).json({ message: "Storing mnessage failed" });
    } finally {
      client?.close();
    }

    return res.status(201).json({ message: "Success", data: newMessage });
  }
}

export default handler;
