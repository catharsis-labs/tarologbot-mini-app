import { Page } from '@/components/Page';
import { motion } from 'framer-motion';
import { Image, List, Cell } from '@telegram-apps/telegram-ui';

const cardImages = import.meta.glob('./*.webp', { eager: true });

// Преобразуем в массив объектов с названием и картинкой
const cards = Object.entries(cardImages).map(([path, module]) => {
  const filename = path.split('/').pop() || '';
  const [index, ...nameParts] = filename.replace('.webp', '').split('-');
  const name = nameParts.join(' ');

  return {
    index: parseInt(index),
    name: name.charAt(0).toUpperCase() + name.slice(1),
    image: (module as { default: string }).default,
  };
}).sort((a, b) => a.index - b.index);

export const RiderWaite = () => {
  return (
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
                <Cell
                    before={<Image src={card.image} style={{ width: 96, height: 160, objectFit: 'cover' }} />}
                    subtitle={`Карта №${card.index}`}
                >
                  {card.name}
                </Cell>
              </motion.div>
          ))}
        </List>
      </Page>
  );
};
