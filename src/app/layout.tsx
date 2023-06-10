import "@/styles/globals.css";

export const metadata = {
  title: "Rick and Morty Database",
  description: "A database of Rick and Morty characters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
