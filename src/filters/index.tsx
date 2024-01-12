import type { Filter } from "../types";
import {darkenFilter} from './darken';
import {brightenFilter} from './brighten';
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
const filters: Filter[] = [
  darkenFilter,
  brightenFilter,
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
];

export default filters;
