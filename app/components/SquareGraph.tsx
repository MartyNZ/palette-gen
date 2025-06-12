import React from "react";

import { DEFAULT_PALETTE_CONFIG } from "~/lib/constants";
import type { Mode, PaletteConfig } from "~/types";

import Dot from "./Dot";

const labels = {
  h: "Hue",
  s: "Saturation",
};

type SquareGraphProps = {
  palettes: PaletteConfig[];
  graph: "h" | "s";
  mode: Mode;
};

export default function SquareGraph(props: SquareGraphProps) {
  const { palettes, graph = `h`, mode } = props;

  return (
    <section className="grid grid-cols-1 gap-2">
      <div className="relative rounded-sm bg-gray-50 border border-gray-200 flex justify-between h-40 w-full">
        {palettes.map((palette) => (
          <React.Fragment key={palette.value}>
            {palette.swatches
              .filter((swatch) => ![0, 1000].includes(swatch.stop))
              .map((swatch) => {
                const scaleValue = swatch[`${graph}Scale`];
                const limitedScale =
                  scaleValue > 0
                    ? Math.min(scaleValue, 50)
                    : Math.max(scaleValue, -50);

                return (
                  <Dot
                    key={swatch.stop}
                    top={`calc(50% - ${limitedScale}%)`}
                    swatch={swatch}
                    highlight={graph}
                    palette={palette}
                    mode={mode}
                  />
                );
              })}
          </React.Fragment>
        ))}
        <div
          className="absolute inset-0 border-t border-gray-200"
          style={{ top: "50%", height: "50%" }}
        />
        <div className="absolute p-2 bottom-0 left-0 font-bold text-xs text-gray-400">
          -
        </div>
        <div className="absolute p-2 bottom-0 left-0 right-0 text-center font-bold text-xs text-gray-400">
          Lightness
        </div>

        <div className="absolute flex justify-center items-center h-full w-6 font-bold text-xs text-gray-400">
          <span className="transform -rotate-90">{labels[graph]}</span>
        </div>

        <div className="absolute p-2 top-0 left-0 font-bold text-xs text-gray-400">
          +
        </div>
        <div className="border-transparent h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-gray-200 border-dashed h-full border-l" />
        <div className="border-transparent h-full border-l" />
      </div>
      <div className="text-lg font-medium text-center">
        <h2>{labels[graph]} Shift</h2>
      </div>
    </section>
  );
}
