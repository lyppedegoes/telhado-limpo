'use client';
import React, { useState } from 'react';

import 'normalize.css';

import styles from './accordion.module.scss';

import dataCollection from './dataCollection.json';

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index: React.SetStateAction<number>) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.limiter}>
          <div>
            <span className={styles.accordion__title}>Dúvidas Frequentes</span>
            <h1 className={styles.accordion__subtitle}>TIRE SUAS DÚVIDAS</h1>
          </div>
          <div className={styles.accordion__faq}>
            {dataCollection.map((item, index) => (
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className={styles.accordion__faq_heading}>
                  <h3 className={accordion === index ? styles.active : ''}>{item.question}</h3>
                  <div>
                    {accordion === index ? (
                      <span className={styles.verticle}>-</span>
                    ) : (
                      <span className={styles.horizental}>+</span>
                    )}
                  </div>
                </div>
                <div>
                  <p className={accordion === index ? styles.active : styles.inactive}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
