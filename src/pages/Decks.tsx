import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

export const Decks: FC = () => {
    return (
        <Page back={true}>
            <List>
                <Section
                    header="Колоды карт"
                >
                    <Link to="/decks/rider–waite">
                        <Cell subtitle="Базовая колода">Таро Райдера — Уайта</Cell>
                    </Link>
                </Section>
            </List>
        </Page>
    );
};