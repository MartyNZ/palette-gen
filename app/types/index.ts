export interface SwatchValue {
  hex: string;
  stop: number;
  h: number;
  hScale: number;
  s: number;
  sScale: number;
  l: number;
}

export type Mode = `hex` | `p-3` | `oklch` | `hsl`;

export type ColorMode = "linear" | "perceived";

export interface PaletteConfig {
  id: string;
  name: string;
  value: string;
  valueStop: number;
  swatches: SwatchValue[];
  colorMode: ColorMode;
  h: number;
  s: number;
  lMin: number;
  lMax: number;
  mode: Mode;
}

export type Version = "3" | "4";
