import React, { useState, useEffect } from "react";
import logoDoSite from '../../../assets/logo1.png';
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled]         = useState(false);
  const [drawerOpen, setDrawerOpen]     = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerSub, setDrawerSub]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Início',   href: '#inicio'  },
    { label: 'Sobre',    href: '#sobre'   },
    { label: 'Contato',  href: '#contato' },
    { label: 'Serviços', href: '#servicos'},
  ];

  const setores = [
    { label: 'Fiscal',         href: '#fiscal'       },
    { label: 'Contábil',       href: '#contabil'     },
    { label: 'RH',             href: '#rh'           },
    { label: 'Legalização',    href: '#legalizacao'  },
    { label: 'Vendas',         href: '#vendas'       },
    {label: 'Certificação Digital', href: '#certificacao'},
    {label: 'Registro de Marcas', href: '#registro-marcas'},
    { label: 'BPO Financeiro', href: '#bpo'          },
  ];

  const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="7"/>
      <line x1="16.5" y1="16.5" x2="22" y2="22"/>
    </svg>
  );

  return (
    <div className={styles.navbarContainer}>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>

          {/* BOTÃO HAMBÚRGUER (Apenas Mobile - Esquerda) */}
          <button
            className={`${styles.hamburger} ${drawerOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => { setDrawerOpen(p => !p); setSearchOpen(false); }}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>

          {/* LOGO (Esquerda no Desktop, Centralizada no Mobile) */}
          <a href="#" className={styles.logo}>
            <img src={logoDoSite} alt="RR Contabilidade" />
          </a>

          {/* MENUS DE NAVEGAÇÃO DESKTOP */}
          <nav className={styles.desktopNav}>
            <ul className={styles.nav}>
              {navLinks.map(l => (
                <li key={l.label} className={styles.navItem}>
                  <a href={l.href} className={styles.navLink}>{l.label}</a>
                </li>
              ))}

              {/* Dropdown Setores Estabilizado */}
              <li
                className={`${styles.navItem} ${dropdownOpen ? styles.navItemOpen : ''}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button 
                  type="button" 
                  className={`${styles.navLink} ${styles.dropdownToggle}`}
                  onClick={() => setDropdownOpen(p => !p)}
                >
                  Setores <span className={styles.arrow} />
                </button>
                <div className={styles.dropdownMenu}>
                  {setores.map(s => (
                    <a key={s.label} href={s.href} onClick={() => setDropdownOpen(false)}>{s.label}</a>
                  ))}
                  <div className={styles.dropdownDivider} />
                  <a href="#especialista" className={styles.specialist} onClick={() => setDropdownOpen(false)}>
                    Fale com um Especialista
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          {/* BUSCA DESKTOP (Alinhada à direita) */}
          <div className={styles.desktopSearch}>
            <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Buscar Serviço..."
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchBtn}>Buscar</button>
            </form>
          </div>

          {/* LUPA DE BUSCA MOBILE (Apenas Mobile - Direita) */}
          <button 
            className={styles.mobileSearchToggle}
            onClick={() => setSearchOpen(p => !p)}
            aria-label="Buscar"
          >
            <SearchIcon />
          </button>

        </div>
        <div className={styles.goldLine} />
      </header>

      {/* INPUT EXPANSÍVEL MOBILE (Aparece logo abaixo do Header) */}
      {searchOpen && (
        <div className={styles.mobileSearchContainer}>
          <form className="d-flex gap-2 w-100" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="search" 
              placeholder="Digite sua pesquisa..." 
              className={styles.searchInput} 
              style={{ width: '100%' }}
              autoFocus 
            />
            <button type="submit" className={styles.searchBtn}>Buscar</button>
          </form>
        </div>
      )}

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`${styles.drawerOverlay} ${drawerOpen ? styles.drawerOverlayOpen : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* MENU LATERAL MOBILE (Abre pela Esquerda) */}
      <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>

        {/* BOTÃO FECHAR */}
        <button
          className={styles.drawerClose}
          onClick={() => setDrawerOpen(false)}
          aria-label="Fechar menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {navLinks.map(l => (
          <a key={l.label} href={l.href} className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>
            {l.label}
          </a>
        ))}

        <div
          className={`${styles.drawerSectionTitle} ${drawerSub ? styles.drawerSectionTitleOpen : ''}`}
          onClick={() => setDrawerSub(p => !p)}
        >
          Setores <span className={styles.arrow} />
        </div>
        <div className={`${styles.drawerSub} ${drawerSub ? styles.drawerSubOpen : ''}`}>
          {setores.map(s => (
            <a key={s.label} href={s.href} onClick={() => setDrawerOpen(false)}>{s.label}</a>
          ))}
          <a href="#especialista" className={styles.specialist} onClick={() => setDrawerOpen(false)}>
            Fale com um Especialista
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Header;