// ===== TRADUÇÃO (site inteiro) =====
const translations = {
    index: {
        pt: {
            title: "Desenvolvedor Full Stack Júnior",
            desc: "Desenvolvo aplicações web, automações e soluções inteligentes utilizando Python, JavaScript, HTML e CSS.",
            sobre_resumo: "Sou Desenvolvedor Full Stack Júnior com aproximadamente 1 ano de experiência prática em desenvolvimento de aplicações web, automação de processos e estudos em Inteligência Artificial.",
            sobre_detalhe: "Atualmente estou em busca de oportunidades de trabalho e projetos freelancers onde eu possa contribuir com soluções modernas e continuar evoluindo profissionalmente.",
            btn_projetos: "Ver Projetos",
            btn_hire: "Hire Me",
            skills_title: "Habilidades"
        },
        en: {
            title: "Junior Full Stack Developer",
            desc: "I develop web applications, automations and intelligent solutions using Python, JavaScript, HTML and CSS.",
            sobre_resumo: "I am a Junior Full Stack Developer with approximately 1 year of practical experience in web development, process automation, and studies in Artificial Intelligence.",
            sobre_detalhe: "I am currently looking for job opportunities and freelance projects where I can contribute with modern solutions and continue to evolve professionally.",
            btn_projetos: "View Projects",
            btn_hire: "Hire Me",
            skills_title: "Skills"
        }
    },
    projetos: {
        pt: {
            title: "Meus Projetos",
            proj_title: "Gerador de Ondas Binaurais",
            proj_desc: "Aplicação web desenvolvida para gerar ondas binaurais com diferentes focos ao usuário, permitindo o download da mídia gerada.",
            proj_tech: '<i class="fab fa-python"></i> Python · <i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript',
            btn_acessar: "Acessar Projeto"
        },
        en: {
            title: "My Projects",
            proj_title: "Binaural Waves Generator",
            proj_desc: "Web application developed to generate binaural waves with different focuses for the user, allowing download of the generated media.",
            proj_tech: '<i class="fab fa-python"></i> Python · <i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript',
            btn_acessar: "Access Project"
        }
    },
    contato: {
        pt: {
            title: "Vamos Trabalhar Juntos",
            sub: "Estou disponível para oportunidades de trabalho e projetos freelancers.",
            btn_whatsapp: "WhatsApp",
            btn_github: "GitHub",
            btn_instagram: "Instagram"
        },
        en: {
            title: "Let's Work Together",
            sub: "I am available for job opportunities and freelance projects.",
            btn_whatsapp: "WhatsApp",
            btn_github: "GitHub",
            btn_instagram: "Instagram"
        }
    }
};

// Detecta qual página está sendo exibida
function getPage() {
    const path = window.location.pathname;
    if (path.includes('projetos')) return 'projetos';
    if (path.includes('contato')) return 'contato';
    return 'index';
}

let lang = 'pt'; // idioma atual

function applyTranslation() {
    const page = getPage();
    const data = translations[page][lang];

    // Elementos comuns
    const translateBtn = document.getElementById('translate');
    if (translateBtn) {
        translateBtn.innerText = lang === 'pt' ? 'English' : 'Português';
    }

    // Página index
    if (page === 'index') {
        const titleEl = document.getElementById('title');
        const descEl = document.getElementById('desc');
        const sobreResumo = document.querySelector('.sobre-card .resumo');
        const sobreDetalhe = document.querySelector('.sobre-card .detalhes');
        const btnProjetos = document.querySelector('.botoes .btn:not(.destaque)');
        const btnHire = document.querySelector('.botoes .btn.destaque');
        const skillsTitle = document.querySelector('section:nth-of-type(2) h2');

        if (titleEl && data.title) {
            if (window.typed) {
                window.typed.destroy();
            }
            titleEl.innerText = '';
            window.typed = new Typed('#title', {
                strings: [data.title],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 3000,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true
            });
        }
        if (descEl) descEl.innerText = data.desc;
        if (sobreResumo) sobreResumo.innerText = data.sobre_resumo;
        if (sobreDetalhe) sobreDetalhe.innerText = data.sobre_detalhe;
        if (btnProjetos) btnProjetos.innerText = data.btn_projetos;
        if (btnHire) btnHire.innerText = data.btn_hire;
        if (skillsTitle) skillsTitle.innerText = data.skills_title;
    }

    // Página projetos
    if (page === 'projetos') {
        const title = document.getElementById('page-title');
        const projTitle = document.getElementById('proj-title');
        const projDesc = document.getElementById('proj-desc');
        const projTech = document.getElementById('proj-tech');
        const btnAcessar = document.getElementById('btn-acessar');

        if (title) title.innerText = data.title;
        if (projTitle) {
            // Mantém o ícone fixo e troca só o texto
            const icon = projTitle.querySelector('i');
            projTitle.innerHTML = '';
            if (icon) projTitle.appendChild(icon);
            projTitle.appendChild(document.createTextNode(' ' + data.proj_title));
        }
        if (projDesc) projDesc.innerText = data.proj_desc;
        if (projTech) projTech.innerHTML = data.proj_tech;
        if (btnAcessar) btnAcessar.innerText = data.btn_acessar;
    }

    // Página contato
    if (page === 'contato') {
        const title = document.getElementById('page-title');
        const sub = document.getElementById('page-sub');
        const btns = document.querySelectorAll('.contatos .btn');

        if (title) title.innerText = data.title;
        if (sub) sub.innerText = data.sub;
        if (btns.length >= 3) {
            btns[0].innerHTML = `<i class="fab fa-whatsapp"></i> ${data.btn_whatsapp}`;
            btns[1].innerHTML = `<i class="fab fa-github"></i> ${data.btn_github}`;
            btns[2].innerHTML = `<i class="fab fa-instagram"></i> ${data.btn_instagram}`;
        }
    }
}

// Botão de tradução
document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate');
    if (translateBtn) {
        translateBtn.addEventListener('click', function() {
            lang = lang === 'pt' ? 'en' : 'pt';
            applyTranslation();
        });
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true
        });
    }

    applyTranslation();
});

// ===== BRILHO SEGUINDO O MOUSE =====
document.addEventListener('mousemove', function(e) {
    const glow = document.getElementById('glow');
    if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }
});

// ===== SOBRE MIM EXPANSÍVEL =====
document.addEventListener('DOMContentLoaded', function() {
    const sobreCard = document.querySelector('.sobre-card');
    if (sobreCard) {
        sobreCard.addEventListener('click', function() {
            this.classList.toggle('expandido');
            const detalhes = this.querySelector('.detalhes');
            if (detalhes) {
                if (this.classList.contains('expandido')) {
                    detalhes.style.display = 'block';
                } else {
                    detalhes.style.display = 'none';
                }
            }
        });
    }
});