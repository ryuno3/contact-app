import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/contact", (req, res) => {
  res.send("this is a my contact application");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
