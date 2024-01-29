import type { Filter } from "../types";


type AfternoonLightingOptions = {
  darknessLevel : number;
  solarGlowLevel : number;
};
export const afternoonLightingFilter: Filter<AfternoonLightingOptions> = {
  name: "Afternoon Lighting",
  apply: (pixels, width, height, options) => {
    const darknessLevel = Number(options.darknessLevel);
    for (let i = 0; i < pixels.length; i++) {
      if (i % 4 !== 3) {
        pixels[i] = pixels[i] - darknessLevel;
      }
    }
    const solarGlowLevel = Number(options.solarGlowLevel);
    for (let redIndex = 0; redIndex < pixels.length; redIndex+=4) {
      let greenIndex = redIndex + 1;
      let blueIndex = redIndex + 2;
      
      let redValue = pixels[redIndex];
      let greenValue = pixels[greenIndex];
      let blueValue = pixels[blueIndex];
      if (redValue + greenValue + blueValue > 300) {
        pixels[redIndex] = redValue + solarGlowLevel
        pixels[greenIndex] = greenValue + solarGlowLevel/4
        pixels[blueIndex] = blueValue - solarGlowLevel
        }
    }
    return pixels;
  },
  options: [
    {
      name: "darknessLevel",
      type: "number",
      default: 0,
      min: 0,
      max: 255,
    },
    {
      name: "solarGlowLevel",
      type: "number",
      default: 0,
      min: 0,
      max: 50,
    },
  ],
};