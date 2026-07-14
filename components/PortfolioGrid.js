'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import styles from './PortfolioGrid.module.css';

export default function PortfolioGrid({ items, categories }) {
  const [active, setActive] = useState('all');
  const [modalItem, setModalItem] = useState(null);

  const filtered = active === 'all' ? items : items.filter((i) => i.category === active);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter portfolio by category">
        <button
          className={`${styles.filterBtn} ${active === 'all' ? styles.filterActive : ''}`}
          onClick={() => setActive('all')}
          role="tab"
          aria-selected={active === 'all'}
        >
          All Work
        </button>
        {categories.map((c) => (
          <button
            key={c.key}
            className={`${styles.filterBtn} ${active === c.key ? styles.filterActive : ''}`}
            onClick={() => setActive(c.key)}
            role="tab"
            aria-selected={active === c.key}
          >
            {c.emoji ? `${c.emoji} ` : ''}{c.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <button
            key={item.id}
            className={styles.card}
            onClick={() => setModalItem(item)}
            aria-label={`Preview ${item.title}`}
          >
            <Image src={item.image} alt={item.title} width={400} height={260} loading="lazy" className={styles.img} />
            <div className={styles.overlay}>
              <span>{item.categoryLabel}</span>
              <strong>{item.title}</strong>
            </div>
          </button>
        ))}
      </div>

      {modalItem && (
        <div className={styles.modalBackdrop} onClick={() => setModalItem(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={modalItem.title}>
            <button className={styles.closeBtn} onClick={() => setModalItem(null)} aria-label="Close preview">
              &times;
            </button>
            <Image src={modalItem.image} alt={modalItem.title} width={800} height={520} className={styles.modalImg} />
            <div className={styles.modalBody}>
              <span className={styles.modalTag}>{modalItem.categoryLabel}</span>
              <h3>{modalItem.title}</h3>
              <p>{modalItem.description}</p>
              <a href="/contact" className="btn btn-primary btn-sm">
                Start a Similar Project <Icon name="arrow" size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
