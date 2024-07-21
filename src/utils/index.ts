export function getEstimatedCost(charges: number, distance: number) {
  return (charges * distance * 0.0005).toFixed(2);
}
