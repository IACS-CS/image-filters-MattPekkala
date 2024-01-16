import type { Filter } from "../types";
import { invertFilter } from "./invert";
import {sepiaFilter} from './sepia';
import {darkenFilter} from './darken';
import {brightenFilter} from './brighten';
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
const filters: Filter[] = [
  invertFilter,
  sepiaFilter,
  darkenFilter,
  brightenFilter,
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
];

export default filters;
