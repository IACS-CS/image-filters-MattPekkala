import type { Filter } from "../types";

export const sepiaFilter: Filter = {
  name: "Sepia",
  apply: (pixels, width, height) => {
    /* Modify pixels... */
    for (let redIndex = 0; redIndex < pixels.length; redIndex+=4) {
      let greenIndex = redIndex + 1;
      let blueIndex = redIndex + 2;
      let avgValue = (pixels[redIndex] + pixels[blueIndex] + pixels[greenIndex])/3
      pixels[redIndex] = avgValue + 15;
      pixels[greenIndex] = avgValue - 5;
      pixels[blueIndex] = avgValue - 60;
    }
    return pixels;
  },
};