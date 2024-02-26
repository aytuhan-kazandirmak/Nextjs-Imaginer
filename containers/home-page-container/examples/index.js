"use client";
import { EXAMPLES } from "./contstants";
import styles from "./style.module.scss";
import Tag from "@/components/tag";
import Image from "next/image";
const Examples = () => {
  const handleCopy = () => {};
  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
          <Tag
            title="Copy"
            className={styles.copyButton}
            onClick={handleCopy}
          />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  );
};

export default Examples;
