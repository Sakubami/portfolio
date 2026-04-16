
import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar glass-card">
    <div class="container nav-content">
      <a href="#" class="logo gradient-text">Portfolio.</a>
      <div class="nav-links">
        <a href="#" id="about-link">Weitere Infos</a>
        <a href="#projects">Projekte</a>
      </div>
    </div>
  </nav>

  <main>
    <section class="hero container">
      <div class="hero-content">
        <h1 class="hero-title">
          Hey, ich bin <span class="gradient-text">Louis</span>
          <br>
        </h1>
        <p class="hero-subtitle">
          Hobby IT-Anwendungsentwickler. Ich entwerfe leidenschaftlich gerne Backend Systeme und bin aktuell auf der Suche nach einem Ausbildungsplatz.
        </p>
        <div class="hero-cta">
          <a href="#" id="hero-about-link" class="btn btn-primary">Mehr Infos</a>
        </div>
      </div>
    </section>

    <section id="skills" class="section container">
      <h2 class="section-title">Ich kann umgehen mit:</h2>
      <div class="skills-grid">
        <!-- Skills will be injected here -->
      </div>
    </section>

    <section id="projects" class="section container">
      <h2 class="section-title">Meine Projekte</h2>
      <div class="projects-grid">
        <!-- Projects will be injected here -->
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <a href="https://github.com/Sakubami" target="_blank" class="btn btn-outline">Weitere Projekte auf GitHub ansehen</a>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Louis. Alle Rechte vorbehalten.</p>
    </div>
  </footer>

  <div id="about-modal" class="modal">
    <div class="modal-content glass-card">
      <span class="close-btn">&times;</span>
      <h2 class="section-title" style="margin-bottom: 1.5rem;">Storytime!</h2>
      <p style="color: var(--text-secondary); text-align: left; font-size: 1.1rem; line-height: 1.8;">
        Ich bin Louis, 20 Jahre alt, und programmiere – mit Unterbrechungen – seit ca. 5 Jahren. Angefangen habe ich damals mit einem Minecraft-Plugin für einen RPG-Server, wo ich einem Kumpel geholfen habe, kleinere Sachen zu schreiben, um ein bisschen zu lernen. Über die Zeit habe ich immer mehr Gefallen daran gefunden, Systeme zu entwerfen und Hintergrundprozesse zum Laufen zu bringen. Aktuell arbeite ich an einem kleinen Indie-Game namens „Tarnished Soil“, welches sich gerade noch ganz am Anfang befindet. Meine bisher größte Errungenschaft ist es, einen funktionierenden Networking-Code auf die Beine gestellt zu haben, den ich selbst geplant und entworfen habe. Falls es noch nicht geschehen ist, schau gerne in meine Projekte! PS: Mein Code ist zu 110 % selbst ausgedacht und handgeschrieben.</p>
      <div style="margin-top: 2rem;">
        <a href="#projects" class="btn btn-primary" id="modal-project-btn">Zu meinen Projekten</a>
      </div>
    </div>
  </div>
`


// Styles for the new content (to be moved to style.css in next step if needed, but keeping it simple for now)
// Data
const skills = [
  'Java', 'JavaScript', 'TypeScript', 'HikariCP', 'MariaDB', 'React', 'Git', 'UI/UX Design'
];

const projects = [
  {
    title: 'Tarnished Soil',
    description: 'Ein 2d Open-World Souls-like Spiel in Entwicklung.',
    tags: ['Game Dev', 'Java', 'LibGDX'],
    link: 'https://github.com/Sakubami/Tarnished-Soil'
  },
  {
    title: 'GRDJN-smarthome',
    description: 'Eine intelligente Haussteuerung für mehr Komfort und Effizienz.',
    tags: ['IoT', 'TypeScript', 'React-Native'],
    link: 'https://github.com/Sakubami/GRDJN-smarthome'
  },
  {
    title: 'InfiniV2',
    description: 'Ein Minecraft-Plugin mit Systemen für Runescape-like RPG inhalte.',
    tags: ['Game Dev', 'Java', 'Minecraft'],
    link: 'https://github.com/TerraNova-Devs/InfiniV2'
  }
];

// Inject Skills
const skillsContainer = document.querySelector('.skills-grid');
skillsContainer.innerHTML = skills.map(skill => `
  <a href="https://www.google.com/search?q=${encodeURIComponent(skill)}" target="_blank" rel="noopener noreferrer" class="skill-tag" style="text-decoration: none; cursor: pointer; display: inline-block;" data-tooltip="Finde mehr über ${skill} heraus!">${skill}</a>
`).join('');

// Inject Projects
const projectsContainer = document.querySelector('.projects-grid');
projectsContainer.innerHTML = projects.map(project => `
  <article class="glass-card project-card">
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<a href="https://www.google.com/search?q=${encodeURIComponent(tag)}" target="_blank" rel="noopener noreferrer" class="tag" style="text-decoration: none; cursor: pointer; transition: all 0.2s;" data-tooltip="Finde mehr über ${tag} heraus!">${tag}</a>`).join('')}
      </div>
      <a href="${project.link}" class="btn btn-outline btn-sm" style="margin-top: auto; align-self: flex-start;">Projekt ansehen →</a>
    </div>
  </article>
`).join('');

// Modal Logic
const aboutLink = document.querySelector('#about-link');
const aboutModal = document.querySelector('#about-modal');
const closeBtn = document.querySelector('.close-btn');
const modalProjectBtn = document.querySelector('#modal-project-btn');

aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutModal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

const heroAboutLink = document.querySelector('#hero-about-link');
if (heroAboutLink) {
  heroAboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
}

closeBtn.addEventListener('click', () => {
  aboutModal.classList.remove('show');
  document.body.style.overflow = '';
});

if (modalProjectBtn) {
  modalProjectBtn.addEventListener('click', () => {
    aboutModal.classList.remove('show');
    document.body.style.overflow = '';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.classList.remove('show');
    document.body.style.overflow = '';
  }
});

