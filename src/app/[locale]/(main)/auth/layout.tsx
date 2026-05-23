import AppProviders from "@/components/Global/AppProviders";
import GoogleAuthProvider from "@/components/Global/GoogleAuthProvider";
import "@/styles/vendor-forms.css";
import "@/styles/dashboard-forms.css";
import "@/styles/auth.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProviders>
      <GoogleAuthProvider>{children}</GoogleAuthProvider>
    </AppProviders>
  );
}
