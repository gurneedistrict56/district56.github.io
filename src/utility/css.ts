import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig as any);

export const tailwindValueForColor = (
  color: string,
  value: string | number = 500
) =>
  (fullConfig.theme.colors as any)?.[color]?.[value];

export const joinClasses = (
  ...classes: (string | boolean | undefined)[]
): string =>
  classes
    .filter(s => typeof s === 'string' && s.length > 0)
    .join(' ');
