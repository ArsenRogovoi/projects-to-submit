import {
  INPUT_BADGE_BLUE,
  INPUT_BADGE_GREEN,
  INPUT_BADGE_RED,
  RESULT_COLORED_RECT,
  RESULT_HEX_CODE_BLUE,
  RESULT_HEX_CODE_GREEN,
  RESULT_HEX_CODE_RED,
  RESULT_RGB_CODE_BLUE,
  RESULT_RGB_CODE_GREEN,
  RESULT_RGB_CODE_RED,
} from "./domService.js";

export const reactOnRangeInputs = (r: string, g: string, b: string) => {
  INPUT_BADGE_RED.innerText = r;
  INPUT_BADGE_GREEN.innerText = g;
  INPUT_BADGE_BLUE.innerText = b;
  RESULT_RGB_CODE_RED.innerText = r;
  RESULT_RGB_CODE_GREEN.innerText = g;
  RESULT_RGB_CODE_BLUE.innerText = b;
  RESULT_HEX_CODE_RED.innerText =
    +r < 16 ? `0${(+r).toString(16)}` : (+r).toString(16);
  RESULT_HEX_CODE_GREEN.innerText =
    +g < 16 ? `0${(+g).toString(16)}` : (+g).toString(16);
  RESULT_HEX_CODE_BLUE.innerText =
    +b < 16 ? `0${(+b).toString(16)}` : (+b).toString(16);
  RESULT_COLORED_RECT.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
