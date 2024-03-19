export function formatDecimalToPercentage(decimal: string): string {
  const percentage = Number(decimal) * 100;
  return `${percentage.toFixed(2)}%`;
}
