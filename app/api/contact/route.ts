// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    const msg = {
      to: "info@movee.jp",
      from: "info@movee.jp", // SendGridで認証済みメール
      subject: `お問い合わせ: ${name}`,
      text: `お名前: ${name}\nメール: ${email}\n内容:\n${message}`,
      html: `<p><strong>お名前:</strong> ${name}</p>
             <p><strong>メール:</strong> ${email}</p>
             <p><strong>内容:</strong><br/>${message}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
  }
}
