import './toggle-mode.js'
import * as FocusTimer from './FocusTimer/index.js'
import { ImageSoundController } from './FocusTimer/imageSoundController.js';


FocusTimer.start(25, 0)


// Cria uma nova instância do controlador
const controller = new ImageSoundController('#musicContainer');

// Adiciona sons para cada imagem
controller.addSound('.forest', '#forestSound');
controller.addSound('.rain', '#rainSound');
controller.addSound('.coffeeshop', '#coffeeshopSound');
controller.addSound('.fireplace', '#fireplaceSound');