import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
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
    const newMessage = { email, name, message };
    console.log("newMessage = ", newMessage);

    res.status(201).json({ message: "Success", data: newMessage });
  }
}

export default handler;
