import * as styles from './timer.scss';
import {draw} from '../clock/red-circle';
import {getSeconds} from '../time-data';

const timeText = document.createElement('span');
timeText.className = styles.time;

function twoDigits(seconds: number) {
  return `0${Math.floor(seconds)}`.slice(-2);
}

function setTimeText() {
  const sec = getSeconds();
  timeText.textContent = `${twoDigits(sec / 60)}:${twoDigits(sec % 60)}`;
  draw();
}

export const getTimeText = () => timeText;
export {setTimeText};
