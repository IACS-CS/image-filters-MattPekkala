import type { Filter } from "../types";

export const darkenFilter: Filter = {
  name: "Darken",
  apply: (pixels, width, height) => {
    /* Modify pixels... */
    for (let i = 0; i < pixels.length; i++) {
      if (i % 4 !== 3) {
        pixels[i] = pixels[i] - 50;
      }
    }
    return pixels;
  },
};
