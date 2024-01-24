import { colors } from "react-select/dist/declarations/src/theme";
import type { Filter } from "../types"; 
import { optionCSS } from "react-select/dist/declarations/src/components/Option";

type PixelateOptions = {
  pixelSize: number;
}

export const pixelateFilter: Filter<PixelateOptions> = {
  name: "Pixelate",
  apply: (pixels, width, height, options) => {
    const pixelSize = Number(options.pixelSize);
    for (let left = 0; left < width; left += pixelSize) {
      for (let top = 0; top < height; top += pixelSize) {
        let avgR = 0;
        let avgG = 0;
        let avgB = 0;

        for (let row = top; row < top + pixelSize; row++) {
          for (let col = left; col < left + pixelSize; col++) {
            const redIndex = row * 4 * width + col * 4;
            const greenIndex = redIndex + 1;
            const blueIndex = redIndex + 2;
            const alphaIndex = redIndex + 3;
            avgR += pixels[redIndex];
            avgG += pixels[greenIndex];
            avgB += pixels[blueIndex];
          }
        }
        avgR = avgR / (pixelSize * pixelSize);
        avgG = avgG / (pixelSize * pixelSize);
        avgB = avgB / (pixelSize * pixelSize);

        for (let row = top; row < top + pixelSize; row++) {
          for (let col = left; col < left + pixelSize; col++) {
            const redIndex = row * 4 * width + col * 4;
            const greenIndex = redIndex + 1;
            const blueIndex = redIndex + 2;
            const alphaIndex = redIndex + 3;
            pixels[redIndex] = avgR;
            pixels[greenIndex] = avgG;
            pixels[blueIndex] = avgB;
          }
        }
      }
    }
    return pixels;
  },
  options : [
    {
      name : 'pixelSize',
      type : 'number',
      default: 20,
      min : 0,
    },  
  ]
};
