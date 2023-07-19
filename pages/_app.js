import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progres = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progres.start);
Router.events.on("routeChangeComplete", progres.finish);
Router.events.on("routeChangeError", progres.finish);
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
