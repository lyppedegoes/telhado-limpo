'use client';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import styles from './carousel.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Buttoncarousel from '../buttons/ButtonCarousel';
import { items } from './../../data/items.json';

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <Buttoncarousel />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}