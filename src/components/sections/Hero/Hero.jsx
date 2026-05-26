import React from 'react';
import Card from '../../ui/Card/Card';
import { diferenciais } from './Hero.data';
import styles from './Hero.module.css';

function Hero() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.container}>

          {/* TEXTO + CTA */}
          <div className={styles.heroTextContent}>
            <span className={styles.subtitle}>A R&R É REFERÊNCIA NO MERCADO</span>
            <h1 className={styles.title}>
              Consultoria Financeira <br />
              e Contábil para a{' '}
              <span className={styles.glowText}>Sua Barbearia</span>
            </h1>
            <p className={styles.description}>
              Cuidamos de toda a burocracia fiscal, trabalhista e corporativa da sua empresa
              com inteligência estratégica. Foque no crescimento do seu negócio enquanto nós
              garantimos a sua total tranquilidade.
            </p>
            <a href="#contato" className={styles.ctaButton}>
              Falar com um Especialista
            </a>
          </div>

          {/* CARDS */}
          <div className={styles.cardsGrid}>
            {diferenciais.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Hero;