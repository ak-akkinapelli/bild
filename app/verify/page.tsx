"use client";
/* Instruments */
import { useSelector, selectCount } from "@/lib/redux";
import styles from "../styles/layout.module.css";

export default function VerifyPage() {
  const count = useSelector(selectCount);

  return (
    <>
      {count % 2 === 0 ? (
        <p className={styles.verify_text}>
          Even when it's even,<br /> I keep a track of the current count: <strong>{count}</strong>
        </p>
      ) : (
        <p className={styles.verify_text}>
          That's odd! the current count is <strong>{count}</strong>
        </p>
      )}
    </>
  );
}
