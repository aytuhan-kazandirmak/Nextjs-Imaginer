import styles from "./styles.module.scss";
import GithubIcon from "@/assets/icons/github.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"https://github.com/aytuhan-kazandirmak"} target="__blank">
        <GithubIcon />
      </Link>
      <Link href={"https://twitter.com/Aytuhan10"} target="__blank">
        <TwitterIcon />
      </Link>
      <p>
        Made by <b>Aytuhan Kazandırmak</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
};

export default Footer;
