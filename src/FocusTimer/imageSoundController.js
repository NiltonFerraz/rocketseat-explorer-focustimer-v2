export class ImageSoundController {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.soundElements = [];
    }

    addSound(imageSelector, audioSelector) {
        const image = document.querySelector(imageSelector);
        const audio = document.querySelector(audioSelector);

        // Vincula o método ao escopo da instância
        const toggleSound = () => {
            if (this.container.classList.contains('music-on')) {
                this.pauseSound(audio);
            } else {
                this.playSound(audio);
            }
        };

        // Adiciona o evento de clique à imagem
        image.addEventListener('click', toggleSound);

        // Adiciona o evento de finalização do áudio para remover a classe music-on quando o áudio termina
        audio.addEventListener('ended', () => {
            this.container.classList.remove('music-on');
        });

        // Armazena o par imagem-árquivo de áudio
        this.soundElements.push({ image, audio, toggleSound });
    }

    playSound(audio) {
        this.stopAllSounds(); // Para outros sons antes de iniciar o novo
        audio.play();
        this.container.classList.add('music-on');
    }

    pauseSound(audio) {
        audio.pause();
        audio.currentTime = 0;
        this.container.classList.remove('music-on');
    }

    stopAllSounds() {
        // Pausa todos os sons ativos
        this.soundElements.forEach(({ audio }) => {
            this.pauseSound(audio);
        });
    }
}

// Cria uma nova instância do controlador
// const controller = new ImageSoundController('#musicContainer');

// Adiciona sons para cada imagem

// controller.addSound('.rain', '#rainSound');

