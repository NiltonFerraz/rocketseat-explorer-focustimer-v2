import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
// import { ImageSoundController } from './imageSoundController.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

// const musicContainer = document.documentElement.classList.toggle('.flex2');
// const imagem = document.documentElement.classList.toggle('.forest');
// const som = sounds.bgFloresta;
// export function toggleMusicForest() {

//     // Adiciona um evento de clique à imagem
//     imagem.addEventListener('click', () => {
//         if (musicContainer.classList.contains('music-on')) {
//             som.pause(); // Pausa o áudio se já estiver tocando
//             som.currentTime = 0; // Reinicia o áudio
//             musicContainer.classList.remove('music-on'); // Remove a classe music-on
//         } else {
//             som.play(); // Toca o áudio
//             musicContainer.classList.add('music-on'); // Adiciona a classe music-on
//         }
//     });

//     // Adiciona um evento de finalização do áudio para remover a classe music-on quando o áudio termina
//     som.addEventListener('ended', () => {
//         musicContainer.classList.remove('music-on');
//     });
// }



// export function toggleMusicForest() {
//     // state.isMute = document.documentElement.classList.toggle('music-on')

//     // if (state.isMute) {
//         // sounds.bgFloresta.play()
//         //     return
//         // }
//         // sounds.bgFloresta.pause()
//         // html.classList.add('toggleMusicFloresta')
//         // html.classList.remove("toggleMusicChuva")
//         state.isMute = document.documentElement.classList.toggle("music-on")

//         if(state.isMute){
//             sounds.bgChuva.pause()
//             // sounds.flameAudio.pause()
//             // sounds.coffeeAudio.pause()
//             sounds.bgFloresta.play()
//         // sounds.treeAudio.play()
//         return
//       }
//       sounds.bgFloresta.pause()
// }

export function toggleMusicChuva() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
        sounds.bgChuva.play()
        return
    }
    sounds.bgChuva.pause()
}


export function togglePlus() {
    timer.updateDisplay(Number(el.minutes.textContent) + 5)
}

export function toggleMinus() {
    timer.updateDisplay(Number(el.minutes.textContent) - 5)
}



// export function toggleMusicForest() {
//     const controller = new ImageSoundController('#musicContainer');

//     controller.addSound('.forest', '#forestSound');

// }