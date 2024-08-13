import state from './state.js'
import { controlsTimer } from "./elements.js";
import * as actions from './actions.js';
import * as el from './elements.js'
import { updateDisplay } from "./timer.js";

export function registerControls() {
    controlsTimer.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    } )

    //expressão regular
    el.minutes.onkeypress = (event) => /\d/.test(event.key)
    //blur é o contrário de focus, quer dizer tirar o foco
    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}