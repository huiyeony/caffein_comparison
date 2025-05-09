import { useEffect } from "react";
import style from "@/styles/kakaoShareButton.module.css";
const KakaoShareButton = () => {
  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.js";
    kakaoScript.async = true;
    kakaoScript.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("b516a42f02c134e04ee9dbf4eb421fb6"); // 카카오 JavaScript 키로 변경
      }
    };
    document.head.appendChild(kakaoScript);
  }, []);

  const shareToKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "카페인 함량 비교 사이트☕️",
        description: "브랜드별 카페인 함량을 비교해보세요",
        imageUrl: "./imgs/coffee-removebg.png", // 필수
        link: {
          mobileWebUrl: "https://caffein-comparison.vercel.app/",
          webUrl: "https://caffein-comparison.vercel.app/",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://caffein-comparison.vercel.app/",
            webUrl: "https://caffein-comparison.vercel.app/",
          },
        },
      ],
    });
  };

  return (
    <button className={style.button} onClick={shareToKakao}>
      카카오톡으로 공유
    </button>
  );
};

export default KakaoShareButton;
