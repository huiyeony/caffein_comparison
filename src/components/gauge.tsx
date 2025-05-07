import React, { useEffect, useState } from "react";
import style from "@/styles/gauge.module.css";
type CaffeineGaugeProps = {
  mg: number;
  maxMg?: number; // 기본값 400mg (권장량)
};

const CaffeineGauge: React.FC<CaffeineGaugeProps> = ({ mg, maxMg = 300 }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPercent(Math.min((mg / maxMg) * 100, 100));
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);
  const getcolor = () => {
    if (mg <= 150) return "#05df72";
    else if (mg < 200) return "#ff8904";
    else if (mg < 230) return "#fb2c36";
    else return "#460809";
  };
  return (
    <>
      <div className={style.gauge}>
        <div
          className={style.fill}
          style={{ width: `${percent}%`, backgroundColor: `${getcolor()}` }}
        ></div>
      </div>
    </>
  );
};

export default CaffeineGauge;
