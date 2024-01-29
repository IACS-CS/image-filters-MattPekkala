import type { Filter } from "../types";
import { afternoonLightingFilter } from "./afternoonLighting";
import { colorShiftFilter } from "./colorShift";
import { pixelateFilter } from "./pixelate";
import {invertFilter} from "./invert";
import {sepiaFilter} from './sepia';
import {darkenFilter} from './darken';
import {brightenFilter} from './brighten';
const filters: Filter[] = [
  afternoonLightingFilter,
  colorShiftFilter,
  pixelateFilter,
  invertFilter,
  sepiaFilter,
  darkenFilter,
  brightenFilter,
];

export default filters;
