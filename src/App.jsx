import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contacto brevemente.');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="landing-page">
      {/* 1. TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <span>📞 +55 (47) 3084-5500</span>
            <span>✉️ contato@rrcontabilidade.com.br</span>
          </div>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVIGATION */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo-area">
            {/* O texto substitui temporariamente a imagem enquanto adiciona o arquivo */}
            <div className="logo-placeholder">
              <span className="logo-r">R</span>
              <span className="logo-wings">⚜️</span>
              <span className="logo-r">R</span>
              <p className="logo-sub">CONTABILIDADE</p>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#inicio" className="active">Início</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato" className="btn-consultoria">Agendar Consultoria</a>
          </nav>
        </div>
      </header>

      {/* 3. HERO SECTION (Banner Principal baseado na Inspiração) */}
      <section id="inicio" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            FOCO CONTÁBIL & <br />
            <span className="highlight">ESTRATÉGIA CORPORATIVA</span>
          </h1>
          <p className="hero-subtitle">
            Oferecemos soluções contábeis, fiscais e de gestão personalizadas com o mais alto padrão de profissionalismo e competência para impulsionar o seu negócio.
          </p>
          <div className="hero-buttons">
            <a href="#servicos" className="btn-primary">Conhecer Serviços</a>
            <a href="#contato" className="btn-secondary">Fale Connosco</a>
          </div>
        </div>
      </section>

      {/* 4. CARDS DE DESTAQUE (Sobreposição elegante) */}
      <section className="overlap-cards-section">
        <div className="cards-container">
          <div className="overlap-card">
            <div className="card-icon">🤝</div>
            <h3>Confiança</h3>
            <p>Estruturamos as nossas parcerias na transparência absoluta, garantindo segurança jurídica e patrimonial.</p>
          </div>
          <div className="overlap-card highlighted-card">
            <div className="card-icon">🏆</div>
            <h3>Credibilidade</h3>
            <p>Uma qualidade conquistada através da excelência diária e cumprimento exato de todas as obrigações.</p>
          </div>
          <div className="overlap-card">
            <div className="card-icon">⚖️</div>
            <h3>Ética</h3>
            <p>Atuação pautada rigorosamente nas normas vigentes e no sigilo profissional total dos seus dados.</p>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO BOAS-VINDAS / QUEM SOMOS */}
      <section id="sobre" className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-text">
            <span className="section-badge">Bem-vindo à RR Contabilidade</span>
            <h2>Mais de 10 anos transformando números em inteligência de negócios</h2>
            <p>Apoiamos micro, médias e grandes empresas com uma assessoria focada na redução legal de impostos, organização do fluxo de caixa e blindagem fiscal de patrimónios.</p>
            <p>A nossa equipa conta com profissionais altamente qualificados prontos para apresentar soluções rápidas diante das constantes mudanças na legislação brasileira.</p>
            <a href="#contato" className="btn-text-link">Saiba Mais sobre a nossa metodologia →</a>
          </div>
          <div className="welcome-image-placeholder">
            {/* Área para foto corporativa da equipe */}
            <div className="img-overlay-box">
              <h3>Inovação Contábil</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE SERVIÇOS (Baseada na grid de 6 cards das suas fotos) */}
      <section id="servicos" className="services-section">
        <div className="services-header">
          <h2>Os Nossos Serviços</h2>
          <p>Conheça o nosso portfólio completo de soluções corporativas e estratégicas</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="s-icon">📊</div>
            <h3>Assessoria Fiscal</h3>
            <p>Apuração de tributos de forma otimizada e planeamento inteligente para enquadramento na menor alíquota legal.</p>
          </div>
          <div className="service-card">
            <div className="s-icon">🏢</div>
            <h3>Contabilidade Gerencial</h3>
            <p>Balanços, demonstrativos de resultados e relatórios estratégicos para apoiar grandes tomadas de decisão.</p>
          </div>
          <div className="service-card">
            <div className="s-icon">👥</div>
            <h3>Recursos Humanos</h3>
            <p>Gestão completa da folha de pagamentos, admissões, demissões e conformidade total com as normas laborais.</p>
          </div>
          <div className="service-card">
            <div className="s-icon">📝</div>
            <h3>Legalização de Empresas</h3>
            <p>Abertura de empresas, alterações contratuais e emissão expedita de alvarás e licenças governamentais.</p>
          </div>
          <div className="service-card">
            <div className="s-icon">📈</div>
            <h3>Consultoria Tributária</h3>
            <p>Auditoria profunda dos últimos anos fiscais para recuperar impostos pagos indevidamente de forma legal.</p>
          </div>
          <div className="service-card">
            <div className="s-icon">💰</div>
            <h3>Planeamento Financeiro</h3>
            <p>Análise estruturada de custos, precificação inteligente de produtos e projeções de fluxo de caixa futuras.</p>
          </div>
        </div>
      </section>

      {/* 7. FORMULÁRIO DE CONTACTO / AGENDAMENTO */}
      <section id="contato" className="contact-section">
        <div className="contact-container">
          <div className="contact-info-panel">
            <h2>Agende uma Consultoria Gratuita</h2>
            <p>Fale diretamente com um especialista e descubra onde a sua empresa está a perder dinheiro.</p>
            <div className="info-item">
              <strong>Telefone:</strong> (47) 3084-5500
            </div>
            <div className="info-item">
              <strong>Endereço:</strong> Av. Central Corporativa, 1200 - Centro
            </div>
            <div className="info-item">
              <strong>Atendimento:</strong> Seg a Sex, das 08h às 18h
            </div>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Seu Nome *</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={formData.nome} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Seu E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Como podemos ajudar a sua empresa? *</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  rows="4"
                  value={formData.mensagem} 
                  onChange={handleInputChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="main-footer">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RR Contabilidade. Todos os direitos reservados. CRC: SC-009492/O-0.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;