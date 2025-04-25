import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cell, Image } from '@telegram-apps/telegram-ui';

interface CardCellProps {
    image: string;
    title: string;
    subtitle?: string[];
    upright?: string;
    reversed?: string;
}

export const CardCell = ({ image, title, subtitle, upright, reversed }: CardCellProps) => {
    const [flipped, setFlipped] = useState(false);

    const handleToggle = () => setFlipped(!flipped);

    return (
        <div
            onClick={handleToggle}
            style={{
                perspective: 1000,
                cursor: 'pointer',
                marginBottom: '1rem',
                height: '300px',
                position: 'relative',
            }}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                }}
            >
                {/* FRONT SIDE */}
                <motion.div
                    style={{
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        inset: 0, // заменяет width, height, top, left
                        padding: '1rem',
                        borderColor: '#2e1a47',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Cell
                        before={<Image src={image} style={{ width: 96, height: 160, objectFit: 'cover' }} />}
                        subtitle={subtitle?.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    >
                        {title}
                    </Cell>
                </motion.div>

                {/* BACK SIDE */}
                <motion.div
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        inset: 0, // фиксируем точно как фронт
                        padding: '1rem',
                        backgroundColor: '#3f2a5e',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        color: '#fff',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <h3 style={{ marginTop: 0 }}>{title}</h3>
                    <p style={{ marginBottom: 0 }}>{upright || 'Описание скоро будет добавлено.'}</p>
                    <p style={{ marginBottom: 0 }}>{reversed || 'Описание скоро будет добавлено.'}</p>
                </motion.div>
            </motion.div>
        </div>
    );
};