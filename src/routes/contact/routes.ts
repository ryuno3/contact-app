import express, { Request, Response, Router } from "express";
import nodemailer from "nodemailer";
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("this is my contact application");
});

router.post("/", async (req, res) => {
  // お問い合わせ内容のjson
  // {
  //     "type":"contact",
  //     "params":{
  //         "name":"john doe",
  //         "email":"email.com",
  //         "content":"text text text"
  //     }
  // }

  const EMAIL_ADDRESS: string = process.env.EMAIL_ADDRESS || "";
  const APP_PASSWORD: string = process.env.APP_PASSWORD || "";

  try {
    const body = req.body;
    if (!body) {
      res.status(400).send({ error: "Cannnot Find Request Body" });
    }
    const { name, email, content } = body?.params;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_ADDRESS,
        pass: APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL_ADDRESS,
      to: EMAIL_ADDRESS,
      subject: "[自動送信]ポートフォリオからの問い合わせ",
      html: `
    <h1>${name}からの問い合わせ</h1>
    <div>メールアドレス:${email}</div>
    <p>問い合わせ内容:${content}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "メール送信が完了しました" });
  } catch (e) {
    res.status(500).json({ success: false, message: "メール送信に失敗しました。" });
  }
});

export default router;
