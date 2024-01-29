import type { Filter } from "../types";

export const brightenFilter : Filter = {
  name: "Brighten",
  apply: (pixels, width, height) => {
    /* Modify pixels... */
    for (let i = 0; i < pixels.length; i++) {
      pixels[i] = pixels[i] + 50;
    }
    return pixels;
  },
};