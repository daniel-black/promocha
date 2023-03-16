const MILLISECONDS_IN_A_MONTH = 1000 * 60 * 60 * 24 * 30;

export function dateToSimpleString(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getDateXMonthsOut(x: number) {
  const today = new Date().getTime();
  return new Date(today + (x * MILLISECONDS_IN_A_MONTH));
}