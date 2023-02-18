import { INPUT_RANGE_BLUE, INPUT_RANGE_GREEN, INPUT_RANGE_RED, } from "./services/domService.js";
import { reactOnRangeInputs } from "./services/rangeInputsService.js";
const r = INPUT_RANGE_RED;
const g = INPUT_RANGE_GREEN;
const b = INPUT_RANGE_BLUE;
INPUT_RANGE_RED.addEventListener("input", () => {
    reactOnRangeInputs(r.value, g.value, b.value);
});
INPUT_RANGE_GREEN.addEventListener("input", () => {
    reactOnRangeInputs(r.value, g.value, b.value);
});
INPUT_RANGE_BLUE.addEventListener("input", () => {
    reactOnRangeInputs(r.value, g.value, b.value);
});
