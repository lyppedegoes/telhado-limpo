import Image from 'next/image';

import styles from './instagram.module.scss';

import BotaoInsta from '../BotaoSeguir';
import InstaFeed from '../InstaFeed';

export default function Instagram() {
  return (
    <div className={styles.container}>
      <div className={styles.instagram}>
        <div className={styles.user}>
          <Image
            src="/icons/icon-telhado-limpo.png"
            alt="Agenda uma visita agora mesmo"
            width={60}
            height={60}
            priority
          />
          <div className={styles.title}>
            <h2>@telhado.limpo</h2>
            <h4>Acompanhe as nossas postagens no Instagram</h4>
          </div>
        </div>
        <BotaoInsta />
      </div>
      <InstaFeed />
    </div>
  );
}
