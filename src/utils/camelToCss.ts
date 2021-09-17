const CAPITALIZED_LETTER = /[A-Z]/g;

export function convertCamelToCSS(camelCaseProp: string): string {
  const asCSSformatted = camelCaseProp.replace(
    CAPITALIZED_LETTER,
    (matched) => `-${matched.toLowerCase()}`,
  );

  return asCSSformatted;
}
