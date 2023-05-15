import LinkInfo from "../data/linkInfo";
import cardData from "../data/homeCards";

import NavCard from "../components/NavCard";

export default function Home({}) {
  return (
    <div className="intro-container">
      <h1 className="intro">Hi, I'm Evan. Let's connect!</h1>

      <div className="links-row">
        {LinkInfo.map((link, idx) => (
          <a
            key={idx}
            className={"link-icon"}
            href={link.link}
            title={link.alt}
          >
            <i className={link.classes}></i>
          </a>
        ))}
      </div>
      {cardData.map((card, i) => (
        <NavCard
          key={i}
          left={i % 2}
          title={card.title}
          text={card.text}
          link={card.link}
          path={card.path}
          image={card.image}
        ></NavCard>
      ))}
    </div>
  );
}
