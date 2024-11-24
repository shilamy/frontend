import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2";

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost:3000",       
  user: "root",      
  password: "", 
  database: "educonnect",     
});

// Handle the request
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { question }: { question: string } = req.body;

    // Validation
    if (!question || question.trim() === "") {
      return res.status(400).json({ message: "Question cannot be empty." });
    }

    // Insert the question into the database
    const query = "INSERT INTO questions (text) VALUES (?)";
    db.query(query, [question], (err, result) => {
      if (err) {
        console.error("Error inserting question:", err);
        return res.status(500).json({ message: "Failed to save question." });
      }

      const newQuestion = { id: result[0].insertId, text: question };

      
      return res.status(201).json({ message: "Question added successfully.", question: newQuestion });
    });
  } else if (req.method === "GET") {
    // Fetch all questions from the database
    const query = "SELECT * FROM questions";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching questions:", err);
        return res.status(500).json({ message: "Failed to fetch questions." });
      }

      return res.status(200).json(results);
    });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
