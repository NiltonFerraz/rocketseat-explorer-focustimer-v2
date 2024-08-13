// Elementos do DOM
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const stopButton = document.getElementById("stopButton");
const musicButton1 = document.getElementById("musicButton1");
const musicButton2 = document.getElementById("musicButton2");
const musicButton3 = document.getElementById("musicButton3");
const musicButton4 = document.getElementById("musicButton4");

// Elementos de áudio
// const clickSound = new Audio("./assets/click-sound.wav");
const forestAudio = new Audio("./assets/Floresta.wav");
// const rainAudio = new Audio("./assets/rain-sound.wav");
// const coffeeShopAudio = new Audio("./assets/cofee-shop.wav");
// const fireplaceAudio = new Audio("./assets/fireplace.wav");
// const kitchenTimerAudio = new Audio("./assets/kitchen-timer.mp3");

// Event listeners para botões
startButton.addEventListener("click", () => {
    startTimer();
    playClickSound();
  });
  
  resetButton.addEventListener("click", () => {
    resetTimer();
    playClickSound();
  });
  
  plusButton.addEventListener("click", () => {
    incrementTime();
    playClickSound();
  });
  
  minusButton.addEventListener("click", () => {
    decrementTime();
    playClickSound();
  });
  
  stopButton.addEventListener("click", () => {
    stopTimer();
    playClickSound();
  });
  
  musicButton1.addEventListener("click", () => {
    toggleMusic("music1");
    playClickSound();
  });
  
  musicButton2.addEventListener("click", () => {
    toggleMusic("music2");
    playClickSound();
  });
  
  musicButton3.addEventListener("click", () => {
    toggleMusic("music3");
    playClickSound();
  });
  
  musicButton4.addEventListener("click", () => {
    toggleMusic("music4");
    playClickSound();
  });
  
  // Função para reproduzir som de clique
  function playClickSound() {
    clickSound.play();
  }
  
  // Função para incrementar o tempo em 5 minutos
  function incrementTime() {
    if (state.minutes < 25) {
      state.minutes += 5;
      updateDisplay();
    }
  }
  
  // Função para decrementar o tempo em 5 minutos
  function decrementTime() {
    if (state.minutes > 5) {
      state.minutes -= 5;
      updateDisplay();
    }
  }
  
  // Função para reproduzir ou pausar música
  function toggleMusic(musicName) {
    const musicButton = document.getElementById(
      `musicButton${musicName.charAt(musicName.length - 1)}`
    );
    const allMusicButtons = document.querySelectorAll("#musicControls button");
  
    const music = getMusicByName(musicName);
  
    // Pausa todas as outras músicas antes de iniciar a nova
    pauseAllMusic(music);
  
    if (music.paused) {
      music.play();
      music.loop = true;
      // Muda a cor de fundo e do ícone enquanto a música está tocando
      musicButton.style.backgroundColor = "#02799D";
      musicButton.style.color = "#ffffff";
      // Reverte as cores dos outros botões
      allMusicButtons.forEach((button) => {
        if (button !== musicButton) {
          button.style.backgroundColor = "";
          button.style.color = "";
        }
      });
    } else {
      music.pause();
      music.currentTime = 0; // Reinicia a música para o início
      // Retorna a cor original do botão quando a música é pausada
      musicButton.style.backgroundColor = "";
      musicButton.style.color = "";
    }
  }
  
  // Função para pausar todas as músicas, exceto a especificada
  function pauseAllMusic(exceptMusic) {
    const allMusic = [
      forestAudio,
      rainAudio,
      coffeeShopAudio,
      fireplaceAudio,
      // Adicione mais músicas, se necessário
    ];
  
    allMusic.forEach((otherMusic) => {
      if (otherMusic !== exceptMusic) {
        otherMusic.pause();
        otherMusic.currentTime = 0;
      }
    });
  }
  
  // Função para obter o elemento de áudio com base no nome
  function getMusicByName(musicName) {
    switch (musicName) {
      case "music1":
        return forestAudio;
      case "music2":
        return rainAudio;
      case "music3":
        return coffeeShopAudio;
      case "music4":
        return fireplaceAudio;
        // Adicione mais músicas, se necessário
        break;
      default:
        return null;
    }
  }
  
  // Inicializando a exibição
  updateDisplay();