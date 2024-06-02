import { Resend } from "resend";
import { Welcome } from "./templates/Welcome";
const resend = new Resend("re_XseFEsqZ_BtFq9beki5F8aHzMH94g7vtu");

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ymain2038@gmail.com",
    subject: "Welcom",
    react: Welcome(),
  });
}
