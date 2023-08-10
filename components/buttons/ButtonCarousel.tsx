import Image from 'next/image';

import styles from './buttons.module.scss';

export default function Buttoncarousel() {
  return (
    <a href="https://wa.me/5541984776712" target="blank" className={styles.ButtonCarousel}>
      <Image src="icons/icon-whats.svg" alt={''} width={30} height={30} priority />
      <h2>FALE CONOSCO</h2>
    </a>
  );
}
