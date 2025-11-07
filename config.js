import dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.PUBLIC_URL; 
const token = process.env.TELEGRAM_TOKEN;

export const config = {
  token: token,
  qrisString: process.env.QRIS_STRING,
  port: process.env.PORT || 3000,
  
  webhookPath: `/webhook/${token}`,
  webhookUrl: `${baseURL}/webhook/${token}`,
};