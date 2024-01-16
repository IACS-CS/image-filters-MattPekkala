import type { Filter } from "../types";

export const invertFilter: Filter = {
  name: "Invert Colors",
  apply: (pixels, width, height) => {
    /* Modify pixels... */
    for (let redIndex = 0; redIndex < pixels.length; redIndex += 4) {
      let greenIndex = redIndex + 1;
      let blueIndex = redIndex + 2;
      pixels[redIndex] = 255 - pixels[redIndex];
      pixels[greenIndex] = 255 - pixels[greenIndex];
      pixels[blueIndex] = 255 - pixels[blueIndex];
    }
    return pixels;
  },
};
