import {
  $,
  ATTR_ID,
  EVENT_TYPE_RESIZE,
  TAG_NAME_ARTICLE,
  TAG_NAME_HEADER,
} from 'noliter';
import * as styles from './index.scss';
import Clock from './clock/Clock';
import Favicon, { updateFavicon } from './clock/Favicon';
import { draw, resize } from './clock/RedCircle';

const root = document.createElement('style');

root.innerHTML = `
  :root {
    --primary: #FF9500;
    --secondary: #545456;
    --background: #F2F2F7;
    --on-background: #FFF;
  }
`;

// TODO 별도 UI로 만들기
(window as any).toggleColor = (() => {
  let toggled = false;
  return () => {
    if (toggled) {
      document.head.removeChild(root);
    } else {
      document.head.appendChild(root);
    }
    toggled = !toggled;
  };
})();

document.head.appendChild(Favicon.dom);
document.body.appendChild(
  $(TAG_NAME_ARTICLE)
    .attrs(ATTR_ID, styles.app)
    .append(
      $(TAG_NAME_HEADER)
        .attrs(ATTR_ID, styles.header)
        .append('Time Timer'),
      Clock,
    )
    .dom
);

function init() {
  resize();
  draw();
  updateFavicon();
  // setTimeText();
}

window.addEventListener(EVENT_TYPE_RESIZE, init);

init();
