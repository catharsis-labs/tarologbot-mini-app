import { motion } from 'framer-motion';
import { Page } from '@/components/Page';

export const Faq = () => {
    const faqs = [
        {
            question: 'Что такое Таро?',
            answer: 'Таро — это древняя система символических образов, используемая для самопознания, предсказаний и анализа жизненных ситуаций. Каждая карта несёт в себе глубокий смысл и может быть интерпретирована по-разному в зависимости от контекста вопроса и положения карты. Это не просто "гадание", а инструмент для размышлений и нахождения новых перспектив.'
        },
        {
            question: 'Что такое Таро-бот?',
            answer: 'Таро-бот — это цифровой помощник, созданный для того, чтобы виртуально вытягивать карты Таро и давать их интерпретации. Он сочетает в себе элементы классической символики карт и современные технологии обработки текста. Вы можете обратиться к нему за советом, задать вопрос или просто узнать, что подсказывает судьба прямо сейчас.'
        },
        {
            question: 'Какие колоды использует бот?',
            answer: 'В основе работы бота лежит самая популярная и узнаваемая колода — Таро Райдера-Уэйта. Эта колода известна своей яркой визуальной символикой и традиционной структурой из 78 карт. Именно её чаще всего используют для обучения и профессиональной практики, поэтому интерпретации будут понятными и глубокими. Планируется расширять возможности в том числе и расширение количества доступных колод карт.'
        },
        {
            question: 'Как бот выбирает карты?',
            answer: 'Карты выбираются случайным образом, имитируя реальное тасование колоды. При этом учитывается, может ли карта выпасть в прямом или перевёрнутом положении — что существенно влияет на её значение. Такой подход помогает создать максимально приближённый к настоящему расклад, где интуиция и случай играют свою роль.'
        },
        {
            question: 'Можно ли задать свой вопрос?',
            answer: 'Да! Вы можете ввести собственный вопрос перед тем, как бот вытянет карты. Он постарается учесть тему и интонацию вашего запроса, чтобы интерпретация была более точной и уместной. Такой подход делает расклад персонализированным — словно вы общаетесь с настоящим Тарологом. Этот бот конфиденциален так как не хранит вопросы и ответы в нашей базе.'
        }
    ];

    return (
        <Page>
            <div style={{ padding: '1.5rem', fontFamily: 'sans-serif' }}>
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.4}}
                >
                    <h1>Ответы на вопросы о Таро-боте</h1>
                </motion.div>
                {faqs.map((item, index) => (
                    <div key={index} style={{marginBottom: '1rem'}}>
                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.2 + (index * 0.2)}}
                        >
                            <div>
                                <h3 style={{marginBottom: '0.5rem'}}>{item.question}</h3>
                                <p style={{margin: 0}}>{item.answer}</p>
                            </div>
                        </motion.div>
                    </div>
                    ))}
            </div>
        </Page>
    );
};