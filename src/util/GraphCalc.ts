export const floorTo10 = (v: number) => Math.floor(v / 10) * 10;
export const ceilTo10  = (v: number) => Math.ceil(v / 10) * 10;
export const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
