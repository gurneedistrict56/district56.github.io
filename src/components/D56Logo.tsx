import Link from 'next/link';
import { FC } from 'react';
import { joinClasses } from '../utility/css';

const D56Logo: FC = () => {
  return(
    <Link href="https://www.d56.org">
      <a target="_blank">
        <img
          src='images/district-56-logo.png'
          alt="District 56 Logo: Gurnee, Wadsworth, Waukegan, Beach Park"
          className={joinClasses(
            'w-[48px] h-[48px]',
            'xs:w-[64px] xs:h-[64px]',
          )}
        />
      </a>
    </Link>
  );
};

export default D56Logo;
