# QRIS-bot

QRIS-bot is a Telegram bot that generates dynamic QRIS payment codes (Indonesia) from a static QRIS payload. Users send a numeric amount in chat and the bot returns a QR image for that exact amount.

Key features
- Generate dynamic QRIS strings by inserting the requested amount and correct CRC16.
- Produce a PNG QR code image and send it back to the user via Telegram.
- Simple webhook-ready Express server (includes a `/register-webhook` route to set Telegram webhook).

Quick start
1. Create a `.env` file in the project root with these variables:
	- `TELEGRAM_TOKEN` — your Telegram bot token
	- `QRIS_STRING` — a valid static QRIS payload to be used as base
	- `PUBLIC_URL` — the publicly reachable base URL where Telegram will post updates (used to construct the webhook URL)
	- (optional) `PORT` — server port (default: 3000)

2. Install dependencies:

	```bash
    npm install
    ```

3. Run the app:

	```bash
    node index.js
    ```

4. Register the webhook (once your app is publicly reachable):

	Visit `GET /register-webhook` on your server (e.g. `https://your-public-url/register-webhook`) to call the `setWebhook` helper.

Usage
- In Telegram, send a numeric message containing the amount (for example: `10000`).
- The bot replies with a QR image (QRIS) for that amount. If a non-numeric message is sent, the bot replies with a short instruction.

Notes
- The project is configured for deployment to Vercel (see `vercel.json`), but any Node server that exposes the webhook URL will work.