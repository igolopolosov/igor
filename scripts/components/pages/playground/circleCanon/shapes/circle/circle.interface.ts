export interface ICircleParams extends Record<string, string | number | undefined> {
  cx: number;
  cy: number;
  r: number;
  fill?: string;
}
