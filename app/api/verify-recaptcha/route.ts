import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await response.json();

  if (!data.success || data.score < 0.5) {
    return NextResponse.json({ success: false, error: "Bot detected" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
