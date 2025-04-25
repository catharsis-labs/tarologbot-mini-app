import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

export const Layouts: FC = () => {
    return (
        <Page back={true}>
            <List>
                <Section
                    header="Виды раскладов"
                >
                    <Link to="/layouts/yes">
                        <Cell subtitle="Самый простой расклад">Расклад: Да или Нет</Cell>
                    </Link>
                    <Link to="/layouts/past-present-future">
                        <Cell subtitle="Базовый (3 карты)">Прошлое-настоящее-будущее</Cell>
                    </Link>
                    <Link to="/layouts/base-relationship">
                        <Cell subtitle="На отношения (5 карт)">На взаимоотношения</Cell>
                    </Link>
                </Section>
            </List>
        </Page>
    );
};