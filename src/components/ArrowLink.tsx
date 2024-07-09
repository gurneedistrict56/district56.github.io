import { FC } from 'react';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { joinClasses } from '../utility/css';
import {
  bgForThemeColor,
  isColorLight,
  ThemeColor,
} from '../theme';

interface Props {
  href: string
  color: ThemeColor
  direction?: 'left' | 'right'
  size?: number
}

const ArrowLink: FC<Props> = ({
  href,
  color,
  direction = 'left',
  size = 22,
}) => {
  return(
    <Link {...{ href }}>
      <a className={joinClasses(
        isColorLight(color) ? 'text-black' : 'text-white',
        'active:opacity-75',
        bgForThemeColor(color),
        'rounded-md w-8 h-8 flex items-center justify-center',        
      )}>
        {direction === 'left'
          ? <BsArrowLeft {...{ size }} />
          : <BsArrowRight {...{ size }} />}
      </a>
    </Link>
  );
};

export default ArrowLink;
