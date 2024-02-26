"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          required
          value={prompt}
          onChange={handlePromptChange}
          type="text"
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
        />
        <button className={styles.generateButton} type="submit">
          Generate
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
