"use client";
import styles from "./styles.module.scss";
import { useHomePage } from "../useHomePage";

const PromptForm = () => {
  const { prompt, setPrompt, generateImage } = useHomePage();
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage();
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
