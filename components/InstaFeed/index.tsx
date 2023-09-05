import { useEffect, useState } from 'react';

import styles from './InstaFeed.module.scss';

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface IFeedItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  permalink: string;
  thumbnail_url: string;
}

export default function InstaFeed() {
  const [feedList, setFeedList] = useState<IFeedItem[]>([]);

  async function getInstaFeed() {
    try {
      const token = process.env.NEXT_PUBLIC_INSTA_TOKEN;
      const fields = 'media_url,media_type,permalink';
      const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

      const { data } = await axios.get(url);
      setFeedList(data.data);
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <section className={styles.container}>
      {feedList.slice(0, 6).map((item) => (
        <a
          key={item.id}
          href={item.permalink}
          target="_blank"
          className={styles.item}
          rel="noreferrer"
        >
          {item.media_type === 'IMAGE' ? (
            <img className={styles.img} src={item.media_url} />
          ) : (
            <video className={styles.video} controls poster={item.thumbnail_url}>
              <source src={item.media_url}></source>
            </video>
          )}
        </a>
      ))}
    </section>
  );
}
