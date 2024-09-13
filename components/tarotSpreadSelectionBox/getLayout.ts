import { TarotDeckData } from '../../types/tarotDeckData';

/**
 * Defines the layout and styling properties for a group of tarot cards.
 */
export interface CardLayout {
  /**
   * Array of image URLs to be used for the tarot cards.
   * Each entry corresponds to a specific card in the layout.
   */
  images: string[];

  /**
   * CSS grid template column definition for arranging the cards.
   * Specifies how the columns should be laid out in the grid.
   *
   * In other words, it is the defined space in between cards in a layout.
   * Since it is the space in between, the length will be one less than amountOfCards.
   */
  gridTemplateColumns: string;

  /**
   * CSS grid column definition for the hover state of the cards.
   * Specifies how the columns should adjust when the cards are hovered.
   */
  gridHover: string;

  /**
   * Optional array defining the vertical spacing between each card.
   */
  verticalCardSpacing?: number[];

  /**
   * Optional vertical offset applied to the entire grid layout.
   * This offset shifts the grid vertically relative to its container (from the top).
   */
  gridVerticalOffset?: string;

  /**
   * Optional tilt angle for the cards.
   * This property determines the angle at which the cards are tilted.
   * Cards will tilt to opposite sides
   */
  tilt?: number;

  /**
   * Optional tilt angle applied when the cards are hovered.
   * This property determines the angle at which the cards are tilted during hover.
   */
  tiltHovered?: number;

  /**
   * Optional scale factor applied when the cards are hovered.
   * This property determines how much the cards are scaled during hover.
   */
  scaleHovered?: number;

  /**
   * A generated array of objects, the styles for each card in a layout.
   */
  styles?: Array<{ sx: React.CSSProperties }>;
}

/**
 * Determines the layout and styles for tarot cards based on input parameters.
 */
export default function getLayout(
  tarotDeckData: TarotDeckData,
  amountOfCards: number
): CardLayout {
  /**
   * Mapping of tarot card indices to their respective image links.
   * This serves to shorten the images arrays in cardLayouts.
   */
  const img = {
    a: tarotDeckData[51].image_link,
    b: tarotDeckData[10].image_link,
    c: tarotDeckData[3].image_link,
    d: tarotDeckData[1].image_link,
    e: tarotDeckData[5].image_link,
    f: tarotDeckData[6].image_link
  };

  /**
   * Defines card layouts and images for different cards amounts.
   *
   * Make style adjustments to the layout configurations here.
   */
  const cardLayouts: Record<number, CardLayout> = {
    1: {
      images: [img.d],
      gridTemplateColumns: 'auto',
      gridHover: 'auto'
    },
    3: {
      images: [img.c, img.d, img.e],
      gridTemplateColumns: '30px 30px',
      gridHover: '70px 70px',
      gridVerticalOffset: '5px'
    },
    4: {
      images: [img.b, img.c, img.d, img.e],
      gridTemplateColumns: '30px 30px 30px',
      gridHover: '55px 55px 55px'
    },
    5: {
      images: [img.b, img.c, img.d, img.e, img.f],
      gridTemplateColumns: '20px 20px 20px 20px',
      gridHover: '40px 50px 50px 40px',
      verticalCardSpacing: [10, 8, 6, 8, 10],
      gridVerticalOffset: '5px'
    },
    7: {
      images: [img.a, img.b, img.c, img.d, img.e, img.f, img.d],
      gridTemplateColumns: '15px 15px 20px 20px 15px 15px',
      gridHover: '60px 70px 80px 80px 70px 60px',
      verticalCardSpacing: [40, 30, 20, 10, 20, 30, 40],
      gridVerticalOffset: '20px',
      tilt: 50
    }
  };

  return cardLayouts[amountOfCards];
}
