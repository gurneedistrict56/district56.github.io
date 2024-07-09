import { FC } from 'react';
import {
  STANDARD_TEXT_COLOR,
  STANDARD_BG_GRADIENT_LIGHT,
  colorForCompetency,
  isColorLight,
} from '../theme';
import Badge from '../components/Badge';
import { joinClasses } from '../utility/css';
import { Competency, COMPETENCY_CONTENT } from './competency';
import AnimatedItems from '../components/AnimatedItems';
import { PAGE_ANIMATION_DURATION, PAGE_PADDING_HORIZONTAL } from './config';

interface Props {
  competency: Competency
}

const CompetencyContent: FC<Props> = ({ competency }) => {
  const color = colorForCompetency(competency);

  const { qualities } = COMPETENCY_CONTENT[competency];

  const renderQualities = (label:string, list: string[]) => ({
    key: label,
    content:  <>
      <Badge
        className="mb-2"
        color={color}
        invert={isColorLight(color)}
      >
        {label}
      </Badge>
      <ul className={joinClasses(
        STANDARD_TEXT_COLOR,
        'list-disc',
        'ml-5',
      )}>
        {list.map((quality, index) =>
          <li
            key={index}
            className={joinClasses(
              'pl-1',
            )}
          >
            {quality}
          </li>)}
      </ul>
    </>,
  });

  return(
    <>
      <div className={joinClasses(
        'h-6 mb-2',
        STANDARD_BG_GRADIENT_LIGHT,
      )} />
      <div className={joinClasses(
        PAGE_PADDING_HORIZONTAL,
        'bg-stone-50',
        'space-y-8',
      )}>
        <AnimatedItems
          key={competency}
          className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6"
          itemDuration={PAGE_ANIMATION_DURATION}
          items={qualities.map(({ label, items }) =>
            renderQualities(label, items))}
        />
      </div>
    </>
  );
};

export default CompetencyContent;
