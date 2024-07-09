import Link from 'next/link';
import { FC } from 'react';
import { Competency } from '../app/competency';
import { pathForCompetency } from '../app/path';
import { joinClasses } from '../utility/css';
import LogoSymbol from './LogoSymbol';
import LogoText from './LogoText';

interface Props {
  competencyLink?: Competency
  competencyRotation?: Competency
  competencyHighlight?: Competency
  invert?: boolean
  textShadow?: boolean
  size?: 'small' | 'large'
  monochrome?: boolean
  debug?: boolean
}

const Logo: FC<Props> = ({
  competencyLink,
  competencyRotation,
  competencyHighlight,
  invert,
  textShadow,
  size,
  monochrome,
  debug,
}) => {
  return(
    <Link href={pathForCompetency(competencyLink)}>
      <a className={joinClasses(
        'inline-flex',
        'space-x-3',
        'select-none',
        'active:opacity-80',
      )}>
        <div>
          <LogoSymbol {...{
            competencyRotation,
            competencyHighlight,
            size,
            monochrome,
            debug,
          }} />
        </div>
        <div className={joinClasses(
          'flex justify-center items-center pt-1',
        )}>
          <LogoText {...{
            competency: competencyHighlight,
            invert,
            shadow: textShadow,
            size,
          }}/>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
