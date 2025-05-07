import { Header } from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive" // 페이지 렌더 전에 불러옴
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
