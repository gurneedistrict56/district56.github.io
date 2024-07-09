import { getIndexForCompetency } from '../app/competency';
import { Competency } from '../app/competency';
import { tailwindValueForColor } from '../utility/css';

// Home is halfway between the first + second competencies
const HOME_INDEX = 0.5;

export const getOffsetForCompetency = (competency?: Competency) => {
  const index = getIndexForCompetency(competency) ?? HOME_INDEX;
  const increment = 360 / 7;
  const baseline = increment / 2;
  return baseline - index * increment;
};

export const logoClassesForSize = (size?: 'small' | 'large') => ({
  symbolWidth: size === 'large'
    ? 'w-[64px] sm:w-[128px] lg:w-[192px]'
    : 'w-[64px]',
  symbolHeight: size === 'large'
    ? 'h-[64px] sm:h-[128px] lg:h-[192px]'
    : 'h-[64px]',
  textWeight: size === 'large'
    ? 'font-bold lg:font-black'
    : 'font-bold',
  textSize: size === 'large'
    ? 'text-[14px] sm:text-[28px] lg:text-[42px]'
    : 'text-[14px]',
});

export const LOGO_COLOR_ACADEMIC_CHAMPION_HEX =
  tailwindValueForColor('sky', 'highlight');
export const LOGO_COLOR_CRITICAL_AND_CREATIVE_THINKER_HEX =
  tailwindValueForColor('green', 'highlight');
export const LOGO_COLOR_EFFECTIVE_COMMUNICATOR_HEX =
  tailwindValueForColor('yellow', 'highlight');
export const LOGO_COLOR_DETERMINED_LEARNER_HEX =
  tailwindValueForColor('orange', 'highlight');
export const LOGO_COLOR_THOUGHTFUL_PROBLEM_SOLVER_HEX =
  tailwindValueForColor('fuchsia', 'highlight');
export const LOGO_COLOR_ENGAGED_COLLABORATOR_HEX =
  tailwindValueForColor('teal', 'highlight');
export const LOGO_COLOR_CONTRIBUTING_CITIZEN_HEX =
  tailwindValueForColor('pink', 'highlight');
export const LOGO_COLOR_NEUTRAL_HEX =
  tailwindValueForColor('stone', 'highlight');

export const logoColorForCompetencyHex = (competency?: Competency) => {
  switch (competency) {
  case Competency.ACADEMIC_CHAMPION:
    return LOGO_COLOR_ACADEMIC_CHAMPION_HEX;
  case Competency.CRITICAL_AND_CREATIVE_THINKER:
    return LOGO_COLOR_CRITICAL_AND_CREATIVE_THINKER_HEX;
  case Competency.EFFECTIVE_COMMUNICATOR:
    return LOGO_COLOR_EFFECTIVE_COMMUNICATOR_HEX;
  case Competency.DETERMINED_LEARNER:
    return LOGO_COLOR_DETERMINED_LEARNER_HEX;
  case Competency.THOUGHTFUL_PROBLEM_SOLVER:
    return LOGO_COLOR_THOUGHTFUL_PROBLEM_SOLVER_HEX;
  case Competency.ENGAGED_COLLABORATOR:
    return LOGO_COLOR_ENGAGED_COLLABORATOR_HEX;
  case Competency.CONTRIBUTING_CITIZEN:
    return LOGO_COLOR_CONTRIBUTING_CITIZEN_HEX;
  default:
    return LOGO_COLOR_NEUTRAL_HEX;
  }
};
