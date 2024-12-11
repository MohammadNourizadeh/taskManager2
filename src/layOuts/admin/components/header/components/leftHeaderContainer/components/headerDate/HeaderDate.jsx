import { useEffect, useState } from "react";
import { days, months } from "./dateInfo";
import styles from "./HeaderDate.module.scss";

export default function HeaderDate() {
  const [date, setDate] = useState(new Date());
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
  const dayNum = date.getDay();
  const sec = date.getSeconds();

  useEffect(() => {
    const myInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles.king}>
      {day}, {month} {dayNum}
    </div>
  );
}
