import { FC, useEffect, useRef, useState } from 'react';
import {
  getOffsetForCompetency,
  logoClassesForSize,
  LOGO_COLOR_NEUTRAL_HEX,
} from '.';
import { Competency } from '../app/competency';
import { PAGE_ANIMATION_DURATION_TAILWIND } from '../app/config';
import { SITE_NAME } from '../app/content';
import { colorForCompetency, STANDARD_TEXT_COLOR } from '../theme';
import { joinClasses } from '../utility/css';
import {
  debugRotation,
  findNearestOffset, 
  getOffsetAndLoopsFromRotation,
} from '../utility/rotation';
import LogoSvg from './LogoSvg';

interface Props {
  competencyRotation?: Competency
  competencyHighlight?: Competency
  size?: 'small' | 'large'
  monochrome?: boolean
  debug?: boolean
}

const LogoSymbol: FC<Props> = ({
  competencyRotation,
  competencyHighlight,
  size,
  monochrome,
  debug,
}) => {
  const [rotation, setRotation] =
    useState(getOffsetForCompetency(competencyRotation));
  const previousCompetency = useRef(competencyRotation);

  useEffect(() => {
    setRotation(previousRotation => {
      const {
        offset: previousOffset,
        loops: previousLoops,
      } = getOffsetAndLoopsFromRotation(previousRotation);

      const {
        nearestOffset,
        isDirectionPositive,
      } = findNearestOffset(
        previousOffset,
        getOffsetForCompetency(competencyRotation)
      );
      
      if (debug) {
        console.log({
          offsetForPath: getOffsetForCompetency(competencyRotation),
          offsetTranslated: nearestOffset,
          previousOffset,
          previousLoops,
        });
      }

      if (nearestOffset === previousOffset) {
        return previousRotation;
      } else {
        if (Math.abs(nearestOffset - previousOffset) > 180) {
          const newLoops = previousLoops + (isDirectionPositive ? 1 : -1);
          return nearestOffset + newLoops * 360;
        } else {
          return nearestOffset + previousLoops * 360;
        }
      }
    });

    previousCompetency.current = competencyRotation;
  }, [competencyRotation, debug]);

  const colorOverrideForCompetency = (competency?: Competency) =>
    (competencyHighlight && competencyHighlight !== competency) || monochrome
      ? LOGO_COLOR_NEUTRAL_HEX
      : undefined;

  const { symbolWidth, symbolHeight } = logoClassesForSize(size);

  const description = 'Multi-colored squares in ring';
  const highlightedColor = competencyHighlight
    ? colorForCompetency(competencyHighlight)
    : undefined;

  return(
    <>
      <LogoSvg
        title={`${SITE_NAME} Symbol`}
        description={highlightedColor
          ? `${description} with ${highlightedColor} square highlighted`
          : description}
        className={joinClasses(
          'transition-all',
          PAGE_ANIMATION_DURATION_TAILWIND,
          symbolWidth,
          symbolHeight,
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
        color0={colorOverrideForCompetency(
          Competency.ACADEMIC_CHAMPION)}
        color1={colorOverrideForCompetency(
          Competency.CRITICAL_AND_CREATIVE_THINKER)}
        color2={colorOverrideForCompetency(
          Competency.EFFECTIVE_COMMUNICATOR)}
        color3={colorOverrideForCompetency(
          Competency.DETERMINED_LEARNER)}
        color4={colorOverrideForCompetency(
          Competency.THOUGHTFUL_PROBLEM_SOLVER)}
        color5={colorOverrideForCompetency(
          Competency.ENGAGED_COLLABORATOR)}
        color6={colorOverrideForCompetency(
          Competency.CONTRIBUTING_CITIZEN)}
      />
      {debug &&
        <p className={joinClasses(
          'text-sm',
          STANDARD_TEXT_COLOR,
        )}>
          {debugRotation(rotation)}
        </p>}
    </>
  );
};

export default LogoSymbol;
