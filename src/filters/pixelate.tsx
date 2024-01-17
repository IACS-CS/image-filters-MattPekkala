import { colors } from "react-select/dist/declarations/src/theme";
import type { Filter } from "../types"; /* Import our Filter type */

export const pixelateFilter: Filter = {
  /* The name of our filter */
  name: "Pixelate",
  /* The function that actually does the work */
  apply: (pixels, width, height) => {
    const pixelSize = 100;
    for (let left = 0; left < width; left += pixelSize) {
      for (let top = 0; top < height; top += pixelSize) {
        // Our work to modify the image will go here!
        // Loop through a rectangle and calculate
        // the average R, G and B value...
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
        // Step 1:
        // Loop through it again and set all pixels
        // to the average...

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
};
