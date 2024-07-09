import { FC } from 'react';
import { getCompetencyForPath, isPathHomePage } from '../app/path';
import {
  bgGradientForThemeColorDark,
  colorForPath,
  isColorLight,
} from '../theme';
import { joinClasses } from '../utility/css';
import { useRouter } from 'next/router';
import Logo from '../logo/Logo';
import D56Logo from './D56Logo';
import CompetencyNavigator from './CompetencyNavigator';
import {
  PAGE_ANIMATION_DURATION_TAILWIND,
  PAGE_PADDING_HORIZONTAL,
} from '../app/config';
import { TRANSLATE_DROPDOWN_ID } from '../utility/useGoogleTranslate';

const Header: FC = () => {
  const { asPath } = useRouter();

  const color = colorForPath(asPath);

  const competency = getCompetencyForPath(asPath);

  const isHomePage = isPathHomePage(asPath, competency);

  const renderTranslateDropdown = () =>
    <div className={joinClasses(
      'text-right',
      'pt-4 pb-5',
    )}>
      <div id={TRANSLATE_DROPDOWN_ID} />
    </div>;

  return(
    <header>
      <div className="relative">
        <div
          className={joinClasses(
            'absolute',
            'top-0 bottom-0 left-0 right-0',
            'bg-d56-school-hero bg-cover bg-no-repeat bg-top',
          )}
          role="img"
          aria-label="Gurnee School District 56 building with sign in front"
        />
        <div
          className={joinClasses(
            'relative',
            'w-full h-full',
            PAGE_PADDING_HORIZONTAL,
            'pt-4 xs:pt-6 sm:pt-12',
            bgGradientForThemeColorDark(color),
          )}
        >
          <div className={joinClasses(
            'grid gap-4 2xs:grid-cols-[1fr_auto]',
            'mb-2 sm:mb-6',
            isHomePage && '2xs:mb-8 md:mb-12 lg:mb-16',
          )}>
            <div className={joinClasses(
              'order-2 2xs:order-1',
              `transition-all ${PAGE_ANIMATION_DURATION_TAILWIND}`,
              'min-h-0',
            )}>
              <Logo
                competencyRotation={competency}
                size={isHomePage ? 'large' : 'small'}
                invert
                textShadow={isColorLight(color)}
              />
            </div>
            <div className={joinClasses(
              'order-1 xs:order-2',
            )}>
              <D56Logo />
            </div>
          </div>
          {isHomePage &&
            <div className={joinClasses(
              'md:max-w-[90%] 2xl:max-w-[70%]',
              'text-white',
              'font-brandon',
              'text-2xl md:text-4xl lg:text-5xl',
            )}>
              <p className="font-[400]">
                What competencies should a District 56 graduate possess when
                leaving for high school? We asked educators, parents,
                students, and community members and this is what they said:
              </p>
            </div>}
          {renderTranslateDropdown()}
        </div>
      </div>
      {competency &&
          <CompetencyNavigator competency={competency} />}
    </header>
  );
};

export default Header;
