import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import dailyDevIcon from "../../assets/action_32.png"
import githubIcon from "../../assets/github.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>M</span>
        <span>Petrovic</span>
      </a>
      <div>
        <p>
          Made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://app.daily.dev/milanche"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dailyDevIcon} alt="DailyDev" />
        </a>

        <a
          href="https://github.com/milanche032"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        
      </div>
    </Container>
  );
}
