import "./globals.css";
import Header from "./home/components/header";
import ReduxProvider from "./store/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
