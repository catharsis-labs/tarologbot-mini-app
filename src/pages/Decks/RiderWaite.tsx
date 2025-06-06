import { Page } from '@/components/Page';
import { motion } from 'framer-motion';
import { List } from '@telegram-apps/telegram-ui';
import {CardCell} from "@/components/CardCell.tsx";
import deckData from './rider-waite/RiderWaiteDeck.json'  assert { type: 'json' };

// Загружаем все изображения из папки с картами
const cardImages = import.meta.glob('./rider-waite/*.webp', { eager: true });

interface TarotCard {
    id: number;
    name: string;
    image: string;
    keywords: string[];
    meaning: {
        upright: string;
        reversed: string;
    };
}

interface RiderWaiteDeckType {
    class: string;
    majorArcana: TarotCard[];
    minorArcana: {
        wands: TarotCard[];
        cups: TarotCard[];
        swords: TarotCard[];
        pentacles: TarotCard[];
    };
}

const RiderWaiteDeck = deckData as unknown as RiderWaiteDeckType;
const major = RiderWaiteDeck.majorArcana as TarotCard[];
const wands = RiderWaiteDeck.minorArcana.wands as TarotCard[];
const cups = RiderWaiteDeck.minorArcana.cups as TarotCard[];
const swords = RiderWaiteDeck.minorArcana.swords as TarotCard[];
const pentacles = RiderWaiteDeck.minorArcana.pentacles as TarotCard[];

const CardsData: TarotCard[] = [...major, ...wands, ...cups, ...swords, ...pentacles];

// Преобразуем в массив объектов с названием и картинкой
const cards = Object.entries(cardImages).map(([path, module]) => {
    const filename = path.split('/').pop() || '';
    const [indexStr] = filename.replace('.webp', '').split('-');
    const index = parseInt(indexStr);

    const cardInfo = CardsData.find(card => card.id === index);

    return {
        index,
        title: cardInfo?.name || `Карта №${index}`,
        image: (module as { default: string }).default,
        subtitle: cardInfo?.keywords,
        upright: cardInfo?.meaning.upright,
        reversed: cardInfo?.meaning.reversed,
    };
}).sort((a, b) => a.index - b.index);

export const RiderWaite = () => {
  return (
      // flipper
      <Page>
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
          >
              <h1 style={{ padding: '1.5rem', fontFamily: 'sans-serif' }}>Таро Райдера - Уэйта</h1>
          </motion.div>
          <List>
              {cards.map((card, index) => (
                  <motion.div
                      key={card.index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                      <CardCell
                          image={card.image}
                          title={card.title}
                          subtitle={card.subtitle}
                          upright={card?.upright}
                          reversed={card?.reversed}
                      />
                  </motion.div>
              ))}
          </List>
      </Page>
  );
};
