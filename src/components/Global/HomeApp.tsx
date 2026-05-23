import useCatchError from "@/hooks/useCatchError";
import AuthHydrate from "./AuthHydrate";

function HomeApp({ children }: { children: React.ReactNode }) {
  useCatchError();

  return (
    <>
      <AuthHydrate />
      {children}
    </>
  );
}

export default HomeApp;
