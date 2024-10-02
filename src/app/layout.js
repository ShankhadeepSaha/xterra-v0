import "./globals.css";

export const metadata = {
  title: "xTerra Robotics",
  description: "xTerra Robotics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
