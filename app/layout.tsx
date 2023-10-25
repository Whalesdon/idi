import "./globals.css";


export const metadata = {
  title: "Gala",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-black">{children}</body>
    </html>
  );
}
