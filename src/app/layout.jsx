import "../index.css";

export const metadata = {
  title: "Atives",
  description: "Elevating businesses with cutting-edge technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
