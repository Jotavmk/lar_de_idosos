// Navegação móvel
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sistema de notificações
function showNotification(message, type) {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'info' ? '#2196F3' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Fechar notificação
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Animação de entrada das seções
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observar todas as seções principais
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Header transparente no scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(248, 251, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(44, 90, 160, 0.1)';
    } else {
        header.style.background = 'rgba(248, 251, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(44, 90, 160, 0.1)';
    }
});

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Lazy loading para imagens (quando adicionadas)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Efeito de hover nos cards
document.querySelectorAll('.gallery-item, .team-member, .event-card, .transparency-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Links de transparência agora funcionam normalmente (redirecionam para páginas específicas)
// A funcionalidade de notificação foi removida pois os links agora são funcionais

// Função para mostrar informações de contato expandidas
function showContactInfo(type) {
    const info = {
        phone: {
            title: 'Telefones',
            content: 'Principal: (11) 9999-9999\nWhatsApp: (11) 8888-8888\nEmergência: (11) 7777-7777'
        },
        address: {
            title: 'Endereço Completo',
            content: 'Rua das Flores, 123\nBairro Centro - Cidade/UF\nCEP: 00000-000\nReferência: Próximo à Praça Central'
        },
        hours: {
            title: 'Horários Detalhados',
            content: 'Visitas: Segunda a Sexta 8h-18h\nSábado: 8h-12h\nDomingo: Visitas especiais\nEmergências: 24h'
        }
    };
    
    if (info[type]) {
        showNotification(`${info[type].title}:\n${info[type].content}`, 'info');
    }
}

// Adicionar eventos aos ícones de contato
document.querySelectorAll('.contact-item i').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const types = ['address', 'phone', 'email', 'hours'];
        if (types[index]) {
            showContactInfo(types[index]);
        }
    });
    icon.style.cursor = 'pointer';
    icon.title = 'Clique para mais informações';
});

// Carrossel
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Verificar se o carrossel existe
    if (slides.length === 0) {
        console.log('Carrossel não encontrado');
        return;
    }

    function showSlide(index) {
        // Remover classe active de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Adicionar classe active ao slide atual
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners para os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-play do carrossel
    let carouselInterval = setInterval(nextSlide, 4000);
    console.log('Carrossel iniciado - mudança a cada 4 segundos');

    // Pausar auto-play quando o mouse está sobre o carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
            console.log('Carrossel pausado');
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 4000);
            console.log('Carrossel retomado');
        });
    }
});

// Modal das Instalações
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('facilitiesModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage1 = document.getElementById('modalImage1');
    const modalImage2 = document.getElementById('modalImage2');
    const modalImage3 = document.getElementById('modalImage3');

    // Verificar se os elementos do modal existem
    if (!modal || !closeModal || !modalTitle || !modalDescription || !modalImage1 || !modalImage2 || !modalImage3) {
        console.error('Elementos do modal não encontrados');
        return;
    }

    // Dados das instalações com imagens e descrições específicas
    const facilitiesData = {
        bedroom: {
            title: 'Quartos Confortáveis',
            description: 'Nossos quartos oferecem o máximo de conforto e privacidade. Disponíveis em opções individuais e duplas, todos equipados com mobiliário ergonômico, iluminação adequada e sistema de climatização. Cada quarto possui banheiro privativo e área de descanso personalizada. Os quartos são limpos diariamente e possuem sistema de segurança 24h.',
            images: [
                { src: 'images/bedroom.jpg', alt: 'Quarto individual com mobiliário confortável e decoração acolhedora' },
                { src: 'images/bedroom.jpg', alt: 'Quarto duplo com espaço amplo e área de convivência' },
                { src: 'images/bedroom.jpg', alt: 'Detalhes do mobiliário ergonômico e sistema de climatização' }
            ]
        },
        dining: {
            title: 'Refeitório',
            description: 'Nosso refeitório oferece refeições balanceadas e nutritivas, preparadas com carinho por nossa equipe de nutricionistas e cozinheiros. O ambiente é acolhedor e propício para socialização durante as refeições. O cardápio é variado e adaptado às necessidades nutricionais de cada residente, com opções para dietas especiais.',
            images: [
                { src: 'images/dining-room.jpg', alt: 'Refeitório principal com mesas organizadas e ambiente acolhedor' },
                { src: 'images/dining-room.jpg', alt: 'Área de preparação das refeições com equipamentos modernos' },
                { src: 'images/dining-room.jpg', alt: 'Detalhes da decoração e ambiente propício para socialização' }
            ]
        },
        garden: {
            title: 'Jardim',
            description: 'Nossa área verde é um espaço de relaxamento e atividades ao ar livre. Com plantas ornamentais, bancos confortáveis e caminhos acessíveis, proporciona momentos de paz e conexão com a natureza. O jardim é utilizado para atividades terapêuticas, exercícios leves e momentos de contemplação. Possuímos também uma horta comunitária onde os residentes podem participar do cultivo de ervas e vegetais.',
            images: [
                { src: 'images/garden.jpg', alt: 'Jardim principal com área de descanso e plantas ornamentais' },
                { src: 'images/garden.jpg', alt: 'Caminhos acessíveis e bancos confortáveis para relaxamento' },
                { src: 'images/garden.jpg', alt: 'Área de atividades ao ar livre e horta comunitária' }
            ]
        },
        activities: {
            title: 'Sala de Atividades',
            description: 'Espaço dedicado para exercícios, jogos e atividades recreativas. Equipada com materiais adequados para diferentes tipos de atividades, promovendo o bem-estar físico e mental dos residentes. Oferecemos aulas de alongamento, jogos de memória, artesanato, música e outras atividades que estimulam a cognição e a socialização. A sala é adaptada para diferentes níveis de mobilidade e possui equipamentos de segurança.',
            images: [
                { src: 'images/activities-room.jpg', alt: 'Sala de atividades com equipamentos para exercícios e alongamentos' },
                { src: 'images/activities-room.jpg', alt: 'Área de jogos e recreação com mesas e materiais educativos' },
                { src: 'images/activities-room.jpg', alt: 'Espaço para exercícios e alongamentos com equipamentos adaptados' }
            ]
        }
    };

    // Função para abrir o modal
    function openModal(facilityType) {
        console.log('Tentando abrir modal para:', facilityType);
        const data = facilitiesData[facilityType];
        if (data) {
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            
            modalImage1.src = data.images[0].src;
            modalImage1.alt = data.images[0].alt;
            modalImage2.src = data.images[1].src;
            modalImage2.alt = data.images[1].alt;
            modalImage3.src = data.images[2].src;
            modalImage3.alt = data.images[2].alt;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            console.log('Modal aberto com sucesso');
        } else {
            console.error('Dados não encontrados para:', facilityType);
        }
    }

    // Função para fechar o modal
    function closeModalFunction() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Modal fechado');
    }

    // Event listeners para os cards das instalações
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('Encontrados', galleryItems.length, 'itens da galeria');
    
    galleryItems.forEach(item => {
        const modalType = item.getAttribute('data-modal');
        const viewMoreBtn = item.querySelector('.view-more-btn');
        
        console.log('Item:', modalType, 'Botão encontrado:', !!viewMoreBtn);
        
        if (viewMoreBtn && modalType) {
            viewMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Botão clicado para:', modalType);
                openModal(modalType);
            });
        }
    });

    // Event listeners para fechar o modal
    closeModal.addEventListener('click', closeModalFunction);

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunction();
        }
    });

    console.log('Modal das instalações inicializado com sucesso');
});

// Adicionar estilos CSS dinâmicos para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
    
    .info {
        background: #2196F3 !important;
    }
`;
document.head.appendChild(style);

console.log('Site do Lar de Idosos carregado com sucesso!'); 