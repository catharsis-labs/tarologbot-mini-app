import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cell, Image } from '@telegram-apps/telegram-ui';
import { ChevronDown } from 'lucide-react';

interface CardCellProps {
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
}

export const SlideCell = ({ image, title, subtitle, description }: CardCellProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);

    return (
        <div
            onClick={handleToggle}
            style={{
                cursor: 'pointer',
                marginBottom: '1rem',
                borderColor: '#2e1a47',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                transition: 'height 0.3s ease',
            }}
        >
            <Cell
                before={<Image src={image} style={{ width: 96, height: 160, objectFit: 'cover' }} />}
                subtitle={subtitle}
                after={<ChevronDown style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />}
            >
                {title}
            </Cell>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ padding: '1rem' }}
                    >
                        <h3 style={{ marginTop: 0 }}>{title}</h3>
                        <p style={{ marginBottom: 0 }}>{description || 'Описание скоро будет добавлено.'}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};