import { FC } from 'react';
import { COMPETENCIES } from './competency';
import Logo from '../logo/Logo';
import { joinClasses } from '../utility/css';
import AnimatedItems from '../components/AnimatedItems';
import { STANDARD_TEXT_COLOR_DARK } from '../theme';
import { PAGE_PADDING_HORIZONTAL } from './config';

const HomeContent: FC = () => {
  return(
    <div className={joinClasses(
      PAGE_PADDING_HORIZONTAL,
      'pt-6 space-y-10',
    )}>
      <div className={joinClasses(
        'flex space-x-2',
        'font-brandon',
        'text-2xl font-bold',
        STANDARD_TEXT_COLOR_DARK,
      )}>
        <h1>Competencies for Success:</h1>
      </div>
      <AnimatedItems
        className={joinClasses(
          'grid gap-6',
          'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
        )}
        items={COMPETENCIES.map(competency => ({
          key: competency,
          tag: 'h2',
          content: <Logo
            competencyLink={competency}
            competencyHighlight={competency}
          />,
        }))}
      />
    </div>
  );
};

export default HomeContent;
