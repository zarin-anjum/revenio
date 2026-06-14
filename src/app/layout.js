import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Revenio - Event Management",
  description: "Discover and manage amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster position="top-right" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}