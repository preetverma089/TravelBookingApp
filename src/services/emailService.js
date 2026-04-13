import { transporter } from "../utils/mailConfig.js";
export const sendEmail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: `"Travel App" <${process.env.MAIL_USER}>`,
            to,
            subject,
            html,
        });

        console.log("Email sent:", info.messageId);
        return true;

    } catch (error) {
        console.error("Email error:", error.message);
        return false;
    }
};