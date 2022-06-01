// export const convertRange = (value: number, xMin: number, xMax: number, yMin: number, yMax: number) => {
//   const percent = (value - yMin) / (yMax - yMin);
//   const output = percent * (xMax - xMin) + xMin;
//   return output;
// }


export const lerp = (start: number, end: number, amt: number) => {
  return (1 - amt) * start + amt * end
}