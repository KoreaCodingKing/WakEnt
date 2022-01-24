export const RGBtoHSL = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  (r /= 255), (g /= 255), (b /= 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    case b:
      h = (r - g) / d + 4;
      break;
    }

    h /= 6;
  }

  return [h, s, l];
};

function hue2rgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

export const HSLtoRGB = (
  h: number,
  s: number,
  l: number
): [number, number, number] => {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
};

export const HexParse = (str: string): number[] => {
  if (str[0] === '#') {
    const matched = str.substring(1, str.length).match(/.{1,2}/g);

    if (matched) {
      return matched.map((v) => parseInt(v, 16));
    }

    return [0, 0, 0];
  }

  return str
    .replace(')', '')
    .split('(')[1]
    .split(',')
    .map((v) => Number(v.trim()));
};

const padding = (str: string) => {
  return str.length < 2 ? `0${str}` : str;
};

export const RGBtoHex = (...args: number[]): string =>
  '#' + args.map((v) => padding((~~v).toString(16))).join('');

export const lighten = (hex: string, amount: number): string => {
  let rgb = HexParse(hex);
  const hsl = RGBtoHSL(rgb[0], rgb[1], rgb[2]);

  hsl[2] = Math.min(0.95, hsl[2] + amount);

  rgb = HSLtoRGB(hsl[0], hsl[1], hsl[2]);

  return RGBtoHex(...rgb);
};

export const darken = (hex: string, amount: number): string => {
  let rgb = HexParse(hex);
  const hsl = RGBtoHSL(rgb[0], rgb[1], rgb[2]);

  hsl[2] = Math.max(0.13, hsl[2] - amount);

  rgb = HSLtoRGB(hsl[0], hsl[1], hsl[2]);

  return RGBtoHex(...rgb);
};
