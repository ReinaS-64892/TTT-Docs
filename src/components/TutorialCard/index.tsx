import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

interface CardProps {
  imageSrc: string;
  text: string;
  jumpLink: string;
}

const tpCards = [
  {
    imageSrc: require("@site/static/img/TutorialCard/TextureBlender.png").default,
    text: "専用テクスチャの導入",
    jumpLink: "/docs/Tutorial/SetupExclusiveTexture",
  },

  {
    imageSrc: require("@site/static/img/TutorialCard/SimpleDecal.png").default,
    text: "デカールの追加",
    jumpLink: "/docs/Tutorial/SetupSimpleDecal",
  },

  {
    imageSrc: require("@site/static/img/TutorialCard/SingleGradation.png").default,
    text: "グラデーションの追加",
    jumpLink: "/docs/Tutorial/SetupGradationToHair",
  },

  {
    imageSrc: require("@site/static/img/TutorialCard/AtlasTexture.png").default,
    text: "強力なアトラス化",
    jumpLink: "/docs/Tutorial/ReductionTextureMemoryByAtlasing",
  },
]


function TutorialCard(tpCord: CardProps) {
  return (
    <div className={styles.TutorialCardTop}>
      <Link to={tpCord.jumpLink} className={styles.JumpLink}>
        <img src={tpCord.imageSrc} alt="Card" className={styles.TutorialCardImage} />
        <div className={styles.TutorialCardText}> {tpCord.text} </div>
        <div className={styles.TutorialCardGradient} />
      </Link>
    </div>
  );

}


export function TutorialCardElement(): JSX.Element {
  return (
    <div className={styles.TutorialContainer}>
      {tpCards.map((card) => (<TutorialCard key={card.text} {...card} />))}
    </div>
  )
}
