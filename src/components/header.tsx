/* eslint-disable @typescript-eslint/no-unused-vars */
import style from "@/styles/header.module.css";
import Script from "next/script";
declare global {
  interface Window {
    KaKao: string;
  }
}
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.left}>
          <img
            src={"/imgs/coffee-removebg.png"}
            alt="커피 아이콘"
            className={style.icon}
          />
          <div className={style.title_container}>
            <h1 className={style.title}>카페인 비교</h1>
            <p className={style.subtitle}>
              브랜드별 아메리카노의 카페인 함량을 한눈에 비교하세요!
            </p>
          </div>
        </div>
        <button className={style.button}> ↗︎ 공유하기 </button>
      </div>
    </header>
  );
};
