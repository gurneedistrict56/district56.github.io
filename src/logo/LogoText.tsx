import { FC } from 'react';
import { logoClassesForSize } from '.';
import { Competency } from '../app/competency';
import { PAGE_ANIMATION_DURATION_TAILWIND } from '../app/config';
import { STANDARD_TEXT_COLOR } from '../theme';
import { joinClasses } from '../utility/css';

interface Props {
  competency?: Competency
  invert?: boolean
  shadow?: boolean
  size?: 'small' | 'large'
}

const LogoText: FC<Props> = ({ competency, invert, shadow, size }) => {
  const getText = () => {
    switch (competency) {
    case Competency.ACADEMIC_CHAMPION:
      return <>Academic<br />Champion</>;
    case Competency.CRITICAL_AND_CREATIVE_THINKER:
      return <>Critical<br />and Creative<br />Thinker</>;
    case Competency.EFFECTIVE_COMMUNICATOR:
      return <>Effective<br />Communicator</>;
    case Competency.DETERMINED_LEARNER:
      return <>Determined<br />Learner</>;
    case Competency.THOUGHTFUL_PROBLEM_SOLVER:
      return <>Thoughtful<br />Problem Solver</>;
    case Competency.ENGAGED_COLLABORATOR:
      return <>Engaged<br />Collaborator</>;
    case Competency.CONTRIBUTING_CITIZEN:
      return <>Contributing<br />Citizen</>;
    default:
      return <>Portrait<br />of a<br />Graduate</>;
    }
  };

  const { textSize, textWeight } = logoClassesForSize(size);

  return(
    <div className={joinClasses(
      'font-brandon',
      'uppercase',
      shadow && 'text-shadow',
      textWeight,
      'transition-all',
      PAGE_ANIMATION_DURATION_TAILWIND,
      'tracking-widest leading-[1.2]',
      textSize,
      invert ? 'text-white' : STANDARD_TEXT_COLOR,
    )}>
      {getText()}
    </div>
  );
};

export default LogoText;
