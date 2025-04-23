import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Section
          header="Возможности"
          footer="Здесь вы можете воспользоваться возможностями, чтобы узнать больше о функциях бота, колодах и картах или тарологии"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#3a2a5c' }}/>}
              //subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Полезные вкладки"
          //footer="These pages help developer to learn more about current launch information"
        >
          {/*<Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>*/}
          <Link to="/faq">
            <Cell subtitle="Ответы на вопросы о боте">Ответы на вопросы о боте</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
