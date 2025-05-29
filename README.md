# 🎻 QR-Maestro

**QR-Maestro** is a fast and easy QR code generator for creating custom QR codes with a sleek and intuitive interface.

## ✨ Features

- **Instant Generation** – Create QR codes in real-time
- **Custom Content** – Supports URLs, text, and other custom data
- **Color Customization** – Choose your own foreground and background colors
- **Downloadable QR Codes** – Export your QR code as a high-quality image
- **Responsive Design** – Optimized for both desktop and mobile devices
- **Minimal UI** – Clean and user-friendly layout

## 🚀 Getting Started

### Prerequisites

- Node.js `v16.8.0` or later

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/qr-maestro.git
   cd qr-maestro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

## 🧠 Project Structure

- `/app` – Main app routing and layout (Next.js)
- `/components` – UI components like QR generator and inputs
- `/lib` – Utility functions for QR creation and handling
- `/hooks` – Custom React hooks for managing state

## 🛠 Technologies Used

- **Next.js 13.5**
- **React 18**
- **Tailwind CSS** – For styling
- **qrcode** – QR code generation library
- **shadcn/ui** – For ready-to-use UI components

## ☁️ Deployment

Easily deploy to **[Vercel](https://vercel.com/)**:

1. Push your project to GitHub
2. Import it to Vercel
3. Add environment variables if needed and deploy instantly
