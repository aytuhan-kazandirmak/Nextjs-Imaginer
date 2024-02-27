"use client";
import { useHomePage } from "../useHomePage";
import { EXAMPLES } from "./contstants";
import styles from "./style.module.scss";
import Tag from "@/components/tag";
import Image from "next/image";
const Examples = () => {
  const { changePrompt } = useHomePage();

  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
          <Tag
            title="Copy"
            className={styles.copyButton}
            onClick={() => {
              changePrompt(example.prompt);
            }}
          />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  );
};

export default Examples;
