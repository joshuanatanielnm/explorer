export function handleNullValue(value?: any): string {
  if (value === null || value === 0 || value === "") {
    return "-";
  }
  return value.toString();
}
