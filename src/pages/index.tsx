import CaffeineGauge from "@/components/gauge";
import style from "@/styles/home.module.css";

export interface Data {
  name: string;
  content: number;
  image: string;
}
// export async function getStaticProps() {
//   return {
//     props: {
//       data: [
//         {
//           name: "바나프레소",
//           image: "./imgs/banapresso.jpg",
//           content: "203.4mg",
//         },
//         {
//           name: "카페 봄봄",
//           image: "./imgs/bombom.png",
//           content: "209.6mg",
//         },
//         {
//           name: "컴포즈 커피",
//           image: "./imgs/compose.png",
//           content: "156mg",
//         },
//         {
//           name: "빽다방",
//           image: "./imgs/dabang.jpg",
//           content: "237mg",
//         },
//         {
//           name: "매머드커피",
//           image: "./imgs/mammoth.png",
//           content: "243mg",
//         },
//         {
//           name: "메가 커피",
//           image: "./imgs/mega.jpg",
//           content: "204.2mg",
//         },
//         {
//           name: "파리바게트",
//           image: "./imgs/paris.jpg",
//           content: "189mg",
//         },
//         {
//           name: "스타벅스",
//           image: "./imgs/starbucks.png",
//           content: "150mg",
//         },
//         {
//           name: "투썸 플레이스",
//           image: "./imgs/twosome.png",
//           content: "184mg",
//         },
//         {
//           name: "더 벤티",
//           image: "./imgs/venti.png",
//           content: "192mg",
//         },
//       ],
//     },
//   };
// }
export default function Home() {
  const items = [
    {
      name: "바나프레소",
      image: "./imgs/banapresso.jpg",
      content: 203,
    },
    {
      name: "카페 봄봄",
      image: "./imgs/bombom.png",
      content: 209,
    },
    {
      name: "컴포즈 커피",
      image: "./imgs/compose.png",
      content: 156,
    },
    {
      name: "빽다방",
      image: "./imgs/dabang.jpg",
      content: 237,
    },
    {
      name: "매머드커피",
      image: "./imgs/mammoth.png",
      content: 243,
    },
    {
      name: "메가 커피",
      image: "./imgs/mega.jpg",
      content: 204,
    },
    {
      name: "파리바게트",
      image: "./imgs/paris.jpg",
      content: 189,
    },
    {
      name: "스타벅스",
      image: "./imgs/starbucks.svg",
      content: 150,
    },
    {
      name: "투썸 플레이스",
      image: "./imgs/twosome.png",
      content: 184,
    },
    {
      name: "더 벤티",
      image: "./imgs/venti.png",
      content: 192,
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.grid}>
          {items.map((item, index) => (
            <div key={index} className={style.card}>
              <img
                src={item.image}
                alt={`${item.name} 아이스아메리카노`}
                className={style.image}
              />
              <span className={style.name}>{item.name}</span>
              <p className={style.content}>{item.content}mg </p>
              <CaffeineGauge mg={item.content} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
