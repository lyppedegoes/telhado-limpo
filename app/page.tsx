import Image from 'next/image';

import BootstrapCarousel from './../components/carousel/carousel';
import Accordion from '@/components/accordion/Accordion';
import ButtonWhatsApp from '@/components/buttons/ButtonWatsapp';

import styles from './page.module.scss';

import 'normalize.css';

export default function Home() {
  return (
    <main>
      <BootstrapCarousel />
      <div className={styles.porque}>
        <h2>POR QUE CONTRATAR NOSSO SISTEMA DE LIMPEZA?</h2>
        <ul>
          <li>Alta Durabilidade</li>
          <li>Não utilizamos água</li>
          <li>Limpeza Sustentável</li>
          <li>Processo finalizado com as chuvas</li>
        </ul>
      </div>
      <div className={styles.atendente}>
        <Image
          src="/images/atendente.png"
          alt="Agenda uma visita agora mesmo"
          width={259}
          height={300}
          priority
        />
        <div className={styles.agende}>
          <p>AGENDE UMA VISITA AGORA MESMO!</p>
          <ButtonWhatsApp />
        </div>
      </div>
      <div className={styles.limpeza}>
        <div className={styles.item}>
          <Image
            src="icons/icon-limpeza.svg"
            alt="Limpeza Rápida"
            width={80}
            height={80}
            priority
          />
          <h2>LIMPEZA RÁPIDA</h2>
        </div>
        <div className={styles.item}>
          <Image src="icons/icon-limpeza.svg" alt="Sem sujeira" width={80} height={80} priority />
          <h2>SEM SUJEIRA</h2>
        </div>
        <div className={styles.item}>
          <Image
            src="icons/icon-limpeza.svg"
            alt="Elimmina os fungos"
            width={80}
            height={80}
            priority
          />
          <h2>ELIMINA OS FUNGOS EXISTENTES</h2>
        </div>
      </div>
      <Accordion />
      <div className={styles.atendente}>
        <Image src="svgs/qrcode.svg" alt="Limpeza Rápida" width={150} height={150} priority />
        <div className={styles.agende}>
          <p>ENTRE EM CONTATO AGORA MESMO E SOLICITE UM ORÇAMENTO</p>
          <ButtonWhatsApp />
        </div>
      </div>
    </main>
  );
}
