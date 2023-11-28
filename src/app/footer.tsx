import Image from 'next/image';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h5>developed by</h5>
      <Image
        className={styles.logo}
        src="../svgs/logo-lyppe.svg"
        alt="texto alternativo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
