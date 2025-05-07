// src/types/kakao.d.ts

export {}; // 이 파일이 모듈임을 명시

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}
