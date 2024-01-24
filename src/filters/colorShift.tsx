import type { Filter } from "../types";
import { hexToRGBA } from "../utils";

export const colorShiftFilter: Filter = {
  name: "Color Shift",
  apply: (pixels, width, height, options) => {
    for (let redIndex = 0; redIndex < pixels.length; redIndex += 4) {
      let greenIndex = redIndex + 1;
      let blueIndex = redIndex + 2;
      let redValue = pixels[redIndex];
      let greenValue = pixels[greenIndex];
      let blueValue = pixels[blueIndex];
      pixels[redIndex] =  greenValue;
      pixels[greenIndex] = blueValue;
      pixels[blueIndex] = redValue;
    }
    return pixels;
  },
};