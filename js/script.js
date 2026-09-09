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

            projects: [

                {
                    title: "Gerador de Ondas Binaurais",

                    desc: "Aplicação web desenvolvida para gerar ondas binaurais com diferentes focos ao usuário, permitindo o download da mídia gerada.",

                    tech: '<i class="fab fa-python"></i> Python · <i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript'
                },

                {
                    title: "Site Tatiane Lash Designer",

                    desc: "Site institucional e landing page responsiva desenvolvida para uma Lash Designer, com apresentação de serviços, galeria, agendamento e integração com WhatsApp.",

                    tech: '<i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript'
                },

                {
                    title: "Protocolo Recuperação do Cabelo",

                    desc: "Sistema completo de recuperação capilar com foco em fortalecimento, hidratação e reversão de danos, incluindo rotina de aplicação, cronograma capilar e monitoramento da evolução.",

                    tech: '<i class="fab fa-html5"></i> HTML'
                },

                {
                    title: "Guia Prático de Compras Paraguai 2026",

                    desc: "Landing page comercial desenvolvida para apresentar um guia digital sobre compras no Paraguai, com foco em conversão, responsividade e experiência do usuário.",

                    tech: '<i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript'
                }

            ],

            btn_acessar: "Acessar Projeto"
        },


        en: {

            title: "My Projects",

            projects: [

                {
                    title: "Binaural Waves Generator",

                    desc: "Web application developed to generate binaural waves with different focuses for the user, allowing download of the generated media.",

                    tech: '<i class="fab fa-python"></i> Python · <i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript'
                },

                {
                    title: "Tatiane Lash Designer Website",

                    desc: "Institutional website and responsive landing page developed for a Lash Designer, featuring services, gallery, scheduling and WhatsApp integration.",

                    tech: '<i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript'
                },

                {
                    title: "Hair Recovery Protocol",

                    desc: "Complete hair recovery system focused on strengthening, hydration and damage reversal, including application routine, hair care schedule and progress monitoring.",

                    tech: '<i class="fab fa-html5"></i> HTML'
                },

                {
                    title: "Practical Paraguay Shopping Guide 2026",

                    desc: "Commercial landing page developed to present a digital guide about shopping in Paraguay, focused on conversion, responsiveness and user experience.",

                    tech: '<i class="fab fa-html5"></i> HTML · <i class="fab fa-css3-alt"></i> CSS · <i class="fab fa-js"></i> JavaScript'
                }

            ],

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


// ===== DETECTA QUAL PÁGINA ESTÁ SENDO EXIBIDA =====

function getPage() {

    const path = window.location.pathname;

    if (path.includes('projetos')) return 'projetos';

    if (path.includes('contato')) return 'contato';

    return 'index';
}


let lang = 'pt';


// ===== APLICA TRADUÇÃO =====

function applyTranslation() {

    const page = getPage();

    const data = translations[page][lang];


    // Botão de tradução

    const translateBtn = document.getElementById('translate');

    if (translateBtn) {

        translateBtn.innerText =
            lang === 'pt' ? 'English' : 'Português';

    }


    // ===== PÁGINA INDEX =====

    if (page === 'index') {

        const titleEl = document.getElementById('title');

        const descEl = document.getElementById('desc');

        const sobreResumo =
            document.querySelector('.sobre-card .resumo');

        const sobreDetalhe =
            document.querySelector('.sobre-card .detalhes');

        const btnProjetos =
            document.querySelector('.botoes .btn:not(.destaque)');

        const btnHire =
            document.querySelector('.botoes .btn.destaque');

        const skillsTitle =
            document.querySelector('section:nth-of-type(2) h2');


        if (titleEl && data.title) {

            if (window.typed) {

                window.typed.destroy();

            }

            titleEl.innerText = '';

            if (typeof Typed !== 'undefined') {

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

            } else {

                titleEl.innerText = data.title;

            }
        }


        if (descEl)
            descEl.innerText = data.desc;


        if (sobreResumo)
            sobreResumo.innerText = data.sobre_resumo;


        if (sobreDetalhe)
            sobreDetalhe.innerText = data.sobre_detalhe;


        if (btnProjetos)
            btnProjetos.innerText = data.btn_projetos;


        if (btnHire)
            btnHire.innerText = data.btn_hire;


        if (skillsTitle)
            skillsTitle.innerText = data.skills_title;
    }


    // ===== PÁGINA PROJETOS =====

    if (page === 'projetos') {

        const title =
            document.getElementById('page-title');


        if (title)
            title.innerText = data.title;


        const projects =
            document.querySelectorAll('.projeto');


        projects.forEach((project, index) => {

            if (!data.projects[index])
                return;


            const projectData =
                data.projects[index];


            const projectTitle =
                project.querySelector('.project-title');


            const projectDesc =
                project.querySelector('.project-desc');


            const projectTech =
                project.querySelector('.project-tech');


            const btnAcessar =
                project.querySelector('.btn-acessar');


            if (projectTitle)
                projectTitle.innerText =
                    projectData.title;


            if (projectDesc)
                projectDesc.innerText =
                    projectData.desc;


            if (projectTech)
                projectTech.innerHTML =
                    projectData.tech;


            if (btnAcessar)
                btnAcessar.innerText =
                    data.btn_acessar;

        });
    }


    // ===== PÁGINA CONTATO =====

    if (page === 'contato') {

        const title =
            document.getElementById('page-title');

        const sub =
            document.getElementById('page-sub');

        const btns =
            document.querySelectorAll('.contatos .btn');


        if (title)
            title.innerText = data.title;


        if (sub)
            sub.innerText = data.sub;


        if (btns.length >= 3) {

            btns[0].innerHTML =
                `<i class="fab fa-whatsapp"></i> ${data.btn_whatsapp}`;

            btns[1].innerHTML =
                `<i class="fab fa-github"></i> ${data.btn_github}`;

            btns[2].innerHTML =
                `<i class="fab fa-instagram"></i> ${data.btn_instagram}`;
        }
    }
}


// ===== BOTÃO DE TRADUÇÃO =====

document.addEventListener('DOMContentLoaded', function () {

    const translateBtn =
        document.getElementById('translate');


    if (translateBtn) {

        translateBtn.addEventListener('click', function () {

            lang =
                lang === 'pt' ? 'en' : 'pt';

            applyTranslation();

        });

    }


    // ===== AOS =====

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

document.addEventListener('mousemove', function (e) {

    const glow =
        document.getElementById('glow');


    if (glow) {

        glow.style.left =
            e.clientX + 'px';

        glow.style.top =
            e.clientY + 'px';

    }

});


// ===== SOBRE MIM EXPANSÍVEL =====

document.addEventListener('DOMContentLoaded', function () {

    const sobreCard =
        document.querySelector('.sobre-card');


    if (sobreCard) {

        sobreCard.addEventListener('click', function () {

            this.classList.toggle('expandido');


            const detalhes =
                this.querySelector('.detalhes');


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