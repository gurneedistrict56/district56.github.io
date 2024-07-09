import { FC } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import Badge from '../components/Badge';
import { logoColorForCompetencyHex, LOGO_COLOR_NEUTRAL_HEX } from '../logo';
import Logo from '../logo/Logo';
import {
  bgForThemeColorHex,
  bgForThemeColorHighlight,
  colorForCompetency,
  isColorLight,
  metaColorForPath,
  STANDARD_TEXT_COLOR,
  STANDARD_TEXT_COLOR_DARK,
  STANDARD_TEXT_COLOR_DARK_HEX,
  STANDARD_TEXT_COLOR_HEX,
  ThemeColor,
} from '../theme';
import { joinClasses } from '../utility/css';
import { COMPETENCIES, Competency } from './competency';
import { PAGE_PADDING_HORIZONTAL } from './config';
import { pathForCompetency } from './path';

const ColorsContent: FC = () => {
  const renderContainer = (
    children: JSX.Element,
    color: ThemeColor = 'neutral',
    key?: string,
  ) =>
    <div
      key={key}
      className={joinClasses(
        'border',
        'shadow-lg rounded-lg overflow-hidden',
      )}
    >
      <div className={joinClasses(
        bgForThemeColorHighlight(color),
        'h-1.5 w-full',
      )} />
      <div className={joinClasses(
        'p-4 lg:p-6',
        'space-y-3',
      )}>
        {children}
      </div>
    </div>;

  const renderColorLabel = (label: string, hexCode: string) =>
    <div className="flex" title="Click to Copy">
      <span
        className={joinClasses(
          'inline-flex items-center gap-[0.15rem]',
          'rounded-full',
          'pl-1.5 pr-2 py-0.5',
          'text-stone-800',
          'font-mono text-[0.7rem] font-semibold',
          'bg-stone-200',
          'pointer:hover:bg-stone-300',
          'pointer:active:bg-stone-400',
          'cursor-pointer select-none',
        )}
        onClick={() => navigator.clipboard.writeText(hexCode)}
      >
        <BiUpArrowAlt size={13} />
        <span>{label}:</span>
        <span>{hexCode}</span>
      </span>
    </div>;

  const renderColor = (
    colorClass?: string,
    colorValue?: string,
  ) =>
    <div
      className={joinClasses(
        'h-6 rounded-md',
        colorClass,
      )}
      {...colorValue && { style: { background: colorValue }}}
    />;

  const renderNeutralBlock = () =>
    <>
      <Logo monochrome />
      {renderColorLabel('Logo Symbol', LOGO_COLOR_NEUTRAL_HEX)}
      {renderColorLabel('Logo Text', STANDARD_TEXT_COLOR_HEX)}
      <div
        className={joinClasses(
          STANDARD_TEXT_COLOR_DARK,
          'font-brandon font-bold uppercase',
          'leading-none',
        )}
      >
        Headline Text
      </div>
      {renderColorLabel('Headline Text', STANDARD_TEXT_COLOR_DARK_HEX)}
      <div
        className={joinClasses(
          STANDARD_TEXT_COLOR,
          'leading-none',
          'text-sm',
        )}
      >
        Body Text
      </div>
      {renderColorLabel('Body Text', STANDARD_TEXT_COLOR_HEX)}
    </>;

  const renderCompetencyBlock = (competency: Competency) => {
    const color = colorForCompetency(competency);
    const colorMeta = metaColorForPath(pathForCompetency(competency));
    return renderContainer(
      <>
        <Logo
          competencyHighlight={competency}
          competencyLink={competency}
        />
        {renderColorLabel(
          'Logo Highlight',
          logoColorForCompetencyHex(competency),
        )}
        <Badge
          color={color}
          invert={isColorLight(color)}
        >
          Badge
        </Badge>
        {renderColorLabel('Core', bgForThemeColorHex(color))}
        {renderColor(undefined, colorMeta)}
        {renderColorLabel('Dark', colorMeta)}
      </>,
      color,
      `${competency}`,
    );
  };

  return(
    <div
      className={joinClasses(
        PAGE_PADDING_HORIZONTAL,
        'py-6',
        'grid gap-4 lg:gap-6',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
      )}
    >
      <div className="col-span-full">
        {renderContainer(renderNeutralBlock())}
      </div>
      {COMPETENCIES.map(renderCompetencyBlock)}
    </div>
  );
};

export default ColorsContent;
