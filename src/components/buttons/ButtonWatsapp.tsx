import Image from 'next/image';

import styles from './buttons.module.scss';

export default function ButtonWhatsApp() {
  return (
    <a href="https://wa.me/5541984776712" target="blank" className={styles.ButtonWhatsApp}>
      <Image src="icons/icon-whats.svg" alt={''} width={30} height={30} priority />
      <h2>41 9 8477 6712</h2>
    </a>
  );
}
