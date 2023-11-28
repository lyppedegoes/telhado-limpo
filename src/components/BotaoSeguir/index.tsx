import styles from './BotaoInsta.module.scss';

export default function BotaoInsta() {
  return (
    <a
      className={styles.ancora}
      href="https://www.instagram.com/telhado.limpo/"
      target="_blank"
      rel="noreferrer"
    >
      {' '}
      <div className={styles.button__seguir}>
        <h3>Seguir</h3>
      </div>
    </a>
  );
}
