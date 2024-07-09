import { FC } from 'react';
import { Competency } from '../app/competency';
import {
  getNextPathForCompetency,
  getPreviousPathForCompetency,
} from '../app/path';
import {
  colorForCompetency,
  STANDARD_TEXT_COLOR,
  STANDARD_TEXT_COLOR_DARK,
} from '../theme';
import { joinClasses } from '../utility/css';
import ArrowLink from './ArrowLink';
import AnimatedItems from './AnimatedItems';
import { PAGE_PADDING_HORIZONTAL } from '../app/config';

interface Props {
  competency: Competency
}

const CompetencyNavigator: FC<Props> = ({ competency }) => {
  const color = colorForCompetency(competency);

  return(
    <div className={joinClasses(
      PAGE_PADDING_HORIZONTAL,
      'py-6 sm:py-10',
    )}>
      <AnimatedItems
        className={joinClasses(
          'grid gap-4 items-start',
          'grid-cols-1',
          'xs:grid-cols-[1fr_auto]',
          'md:grid-cols-[49.8%_1fr_auto]',
          '2xl:grid-cols-[32.8%_1fr_auto]',
        )}
        direction="horizontal"
        items={[{
          key: `${competency} title`,
          className: joinClasses(
            'order-1',
            'font-brandon',
            'text-xl xs:text-2xl md:text-3xl',
            'leading-[1.15] xs:leading-[1.15] md:leading-[1.15]',
            'tracking-wider xs:tracking-widest',
            STANDARD_TEXT_COLOR_DARK,
            'font-black',
            'uppercase',
          ),
          tag: 'h1',
          content: competency,
        }, {
          key: `${competency} intro`,
          className: joinClasses(
            'order-3 md:order-2',
            'xs:col-span-2 md:col-span-1',
            'max-w-lg md:max-w-none',
            STANDARD_TEXT_COLOR,
          ),
          content: <>
            Gurnee District 56 wants all students to develop
            the competency of being {competency}s
          </>,
        }, {
          key: 'arrows',
          className: joinClasses(
            'hidden xs:flex',
            'order-2 md:order-3',
            'space-x-2',
          ),
          content: <>
            <ArrowLink
              href={getPreviousPathForCompetency(competency)}
              color={color}
              direction="left"
            />
            <ArrowLink
              href={getNextPathForCompetency(competency)}
              color={color}
              direction="right"
            />
          </>,
        }]}
      />
    </div>
  );
};

export default CompetencyNavigator;
