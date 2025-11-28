const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const sendEmailCreateOrder = async (email, orderItems) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_ACCOUNT,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        // HTML danh sách sản phẩm
        let listItemHTML = "";
        const attachments = [];

        orderItems.forEach((item) => {
            listItemHTML += `
                <div style="margin-bottom: 16px;">
                    <div>
                        Bạn đã đặt sản phẩm <b>${item.name}</b> 
                        với số lượng: <b>${item.amount}</b> 
                        và giá: <b>${item.price} VND</b>
                    </div>
                    <div>Hình ảnh sản phẩm:</div>
                    <img src="${item.image}" width="200" style="border-radius: 8px; margin-top: 8px;">
                    <hr>
                </div>
            `;

            // Nếu muốn attach dạng file
            attachments.push({
                filename: `${item.name}.jpg`,
                path: item.image
            });
        });

        await transporter.sendMail({
            from: process.env.MAIL_ACCOUNT,
            to: email,
            subject: "Xác nhận đơn hàng từ Enzo Shop",
            html: `
                <div>
                    <h2>Cảm ơn bạn đã đặt hàng!</h2>
                    <p>Dưới đây là thông tin đơn hàng của bạn:</p>
                    ${listItemHTML}
                </div>
            `,
            attachments: attachments,
        });

        console.log("Email đã gửi!");
    } catch (err) {
        console.error("Lỗi gửi email:", err);
    }
};

module.exports = {
    sendEmailCreateOrder,
};
