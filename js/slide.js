// Datos para las diferentes vistas de la apertura
const apertureAngles = {
    'vicerrector': {
        image: './assets/img/AperturaVicerrector.jpg'
    },
    'organizador': {
        image: './assets/img/AperturaSamuel.jpg'
    },
    'himno': {
        image: './assets/img/SamuelHimno.jpg',
    }
};

const musicaAngles = {
    'm1': {
        image: './assets/img/IAParaNiños01.jpg'
    },
    'm2': {
        image: './assets/img/IAParaNiños02.jpg'
    },
    'm3': {
        image: './assets/img/IAParaNiños03.jpg',
    },
    'm4': {
        image: './assets/img/IAParaNiños04.jpg',
    },
    'm5': {
        image: './assets/img/IAParaNiños05.jpg',
    }
};

const culturalAngles = {
    'c1': {
        image: './assets/img/GrupoFolcloricoInstrumentos.jpg'
    },
    'c2': {
        image: './assets/img/GrupoFolcloricoDanza.jpg'
    },
    'c3': {
        image: './assets/img/GrupoFolcloricoDanzaInvitados.jpg',
    }
};

const galeriaAngles = {
    'g1': {
        image: './assets/img/GaleríaEventosPracticante.jpg'
    }
};

// Mapeo de galerías a sus elementos HTML
const galleryElements = {
    'apertura': {
        mainImage: 'mainImageApertura'
    },
    'musica': {
        mainImage: 'mainImageMusica'
    },
    'cultural': {
        mainImage: 'mainImageCultural'
    },
    'galeria': {
        mainImage: 'mainImageGaleria'
    }
};
// Mapeo de galerías a sus datos
const galleryData = {
    'apertura': apertureAngles,
    'musica': musicaAngles,
    'cultural': culturalAngles,
    'galeria': galeriaAngles
};

function changeAngle(galleryType, angle, element) {
    // Actualizar botones activos
    const buttons = element.parentElement.querySelectorAll('.angle-option');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // Obtener elementos HTML
    const mainImageId = galleryElements[galleryType].mainImage;
    
    const mainImage = document.getElementById(mainImageId);
    
    // Obtener datos de la imagen
    const imageData = galleryData[galleryType][angle];
    
    // Aplicar cambios
    mainImage.style.backgroundImage = `url('${imageData.image}')`;
    
    // Efecto visual de transición
    mainImage.style.opacity = '0.7';
    setTimeout(() => {
        mainImage.style.opacity = '1';
    }, 150);
}

// Inicializar galerías con la primera imagen
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar galería 'apertura'
    const aperturaInitial = apertureAngles.stage;
    const mainImageApertura = document.getElementById('mainImageApertura');
    mainImageApertura.style.backgroundImage = `url('${aperturaInitial.image}')`;

    // Inicializar galería 'musica'
    const musicaInitial = musicaAngles.instruments;
    const mainImageMusica = document.getElementById('mainImageMusica');
    mainImageMusica.style.backgroundImage = `url('${musicaInitial.image}')`;
    
    // Inicializar galería 'cultural'
    const culturalInitial = culturalAngles.instruments;
    const mainImageCultural = document.getElementById('mainImageCultural');
    mainImageCultural.style.backgroundImage = `url('${culturalInitial.image}')`;

    // Inicializar galería 'galeria'
    const galeriaInitial = galeriaAngles.instruments;
    const mainImageGaleria = document.getElementById('mainImageGaleria');
    mainImageGaleria.style.backgroundImage = `url('${galeriaInitial.image}')`;
});
