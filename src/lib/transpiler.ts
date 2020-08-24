const EXPRESSION_REGEX = /(?<whitespace>\s*)(?<operator>[a-z+-]*)(?<times>\d*)/i;

export const tap = (value: any) => {
  console.log(value);
  return value;
};

export const transpileOperator = (script: string) =>
  script
    .replace(/avanca/g, '>')
    .replace(/volta/g, '<')
    .replace(/repete/g, '[')
    .replace(/fim/g, ']')
    .replace(/imprime/g, '.');

const extract = (expression: string) => {
  const match = expression.match(EXPRESSION_REGEX);
  if (!match || !match.groups) throw new Error(`Expression ${expression} is not valid`);
  const { whitespace, operator, times } = match.groups;

  const parsedTimes = parseInt(times || '1', 10);

  return {
    whitespace,
    operator,
    times: parsedTimes,
  };
};

export const transpile = (script: string) =>
  script
    .split(';')
    .map(extract)
    .map(({ whitespace, operator, times }) => ({
      whitespace,
      operator: transpileOperator(operator),
      times,
    }))
    .map(({ whitespace, operator, times }) => ({
      whitespace,
      operator: operator.repeat(times),
    }))
    .map(({ whitespace, operator }) => `${whitespace}${operator}`)
    .map((s) => s.replace(/;/g, ''))
    .join('');
