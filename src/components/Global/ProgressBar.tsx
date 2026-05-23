import HolyLoader from "holy-loader";

export default function ProgressBar() {
  return (
    <HolyLoader
      color="#9234ea"
      height="3px"
      easing="linear"
      showSpinner={false}
      ignoreSearchParams
    />
  );
}
