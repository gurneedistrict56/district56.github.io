import { tailwindValueForColor } from '../utility/css';
import { getCompetencyForPath } from '../app/path';
import { Competency } from '../app/competency';

export type ThemeColor =
  'neutral' |
  'blue' |
  'green' |
  'yellow' |
  'orange' |
  'magenta' |
  'teal' |
  'pink';

export const STANDARD_TEXT_COLOR =
  'text-stone-500';
export const STANDARD_TEXT_COLOR_DARK =
  'text-stone-600';
export const STANDARD_BG_GRADIENT_LIGHT =
  'bg-gradient-to-b from-stone-200 to-stone-50';

export const STANDARD_TEXT_COLOR_HEX =
  tailwindValueForColor('stone', 500);
export const STANDARD_TEXT_COLOR_DARK_HEX =
  tailwindValueForColor('stone', 600);

export const textForThemeColor = (color: ThemeColor): string => {
  switch (color) {
  case 'blue':
    return 'text-sky-600';
  case 'green':
    return 'text-green-600';
  case 'yellow':
    return 'text-yellow-700';
  case 'orange':
    return 'text-orange-600';
  case 'magenta':
    return 'text-fuchsia-600';
  case 'teal':
    return 'text-teal-600';
  case 'pink':
    return 'text-pink-600';
  default:
    return STANDARD_TEXT_COLOR;
  }
};

export const bgForThemeColor = (color: ThemeColor): string => {
  switch (color) {
  case 'neutral':
    return 'bg-stone-600';
  case 'blue':
    return 'bg-sky-600';
  case 'green':
    return 'bg-green-600';
  case 'yellow':
    return 'bg-yellow-300';
  case 'orange':
    return 'bg-orange-600';
  case 'magenta':
    return 'bg-fuchsia-600';
  case 'teal':
    return 'bg-teal-600';
  case 'pink':
    return 'bg-pink-600';  
  }
};

export const bgForThemeColorHex = (color: ThemeColor): string => {
  switch (color) {
  case 'neutral':
    return tailwindValueForColor('stone', 600);
  case 'blue':
    return tailwindValueForColor('sky', 600);
  case 'green':
    return tailwindValueForColor('green', 600);
  case 'yellow':
    return tailwindValueForColor('yellow', 300);
  case 'orange':
    return tailwindValueForColor('orange', 600);
  case 'magenta':
    return tailwindValueForColor('fuchsia', 600);
  case 'teal':
    return tailwindValueForColor('teal', 600);
  case 'pink':
    return tailwindValueForColor('pink', 600);
  }
};

export const bgForThemeColorHighlight = (color: ThemeColor): string => {
  switch (color) {
  case 'neutral':
    return 'bg-stone-highlight';
  case 'blue':
    return 'bg-sky-highlight';
  case 'green':
    return 'bg-green-highlight';
  case 'yellow':
    return 'bg-yellow-highlight';
  case 'orange':
    return 'bg-orange-highlight';
  case 'magenta':
    return 'bg-fuchsia-highlight';
  case 'teal':
    return 'bg-teal-highlight';
  case 'pink':
    return 'bg-pink-highlight';  
  }
};

export const bgGradientForThemeColorDark = (color: ThemeColor): string => {
  switch (color) {
  case 'neutral':
    return 'bg-gradient-to-b from-stone-900 to-stone-700/80';
  case 'blue':
    return 'bg-gradient-to-b from-sky-800 to-sky-600/75';
  case 'green':
    return 'bg-gradient-to-b from-green-900 to-green-600/75';
  case 'yellow':
    return 'bg-gradient-to-b from-yellow-700 to-yellow-400/75';
  case 'orange':
    return 'bg-gradient-to-b from-orange-800 to-orange-600/75';
  case 'magenta':
    return 'bg-gradient-to-b from-fuchsia-800 to-fuchsia-600/75';
  case 'teal':
    return 'bg-gradient-to-b from-teal-800 to-teal-600/75';
  case 'pink':
    return 'bg-gradient-to-b from-pink-800 to-pink-600/75';
  }
};

export const isColorLight = (color?: ThemeColor): boolean => {
  switch(color) {
  case 'yellow':
    return true;
  default:
    return false;  
  }
};

export const colorForCompetency = (competency?: Competency): ThemeColor => {
  switch (competency) {
  case Competency.ACADEMIC_CHAMPION: return 'blue';
  case Competency.CRITICAL_AND_CREATIVE_THINKER: return 'green';
  case Competency.EFFECTIVE_COMMUNICATOR: return 'yellow';
  case Competency.DETERMINED_LEARNER: return 'orange';
  case Competency.THOUGHTFUL_PROBLEM_SOLVER: return 'magenta';
  case Competency.ENGAGED_COLLABORATOR: return 'teal';
  case Competency.CONTRIBUTING_CITIZEN: return 'pink';
  default: return 'neutral';
  }
};

export const colorForPath = (path: string): ThemeColor =>
  colorForCompetency(getCompetencyForPath(path));

export const metaColorForPath = (path: string): string => {
  switch (colorForPath(path)) {
  case 'neutral':
    return tailwindValueForColor('stone', 900);
  case 'blue':
    return tailwindValueForColor('sky', 800);
  case 'green':
    return tailwindValueForColor('green', 900);
  case 'yellow':
    return tailwindValueForColor('yellow', 700);
  case 'orange':
    return tailwindValueForColor('orange', 800);
  case 'magenta':
    return tailwindValueForColor('fuchsia', 800);
  case 'teal':
    return tailwindValueForColor('teal', 800);
  case 'pink':
    return tailwindValueForColor('pink', 800);
  }
};
