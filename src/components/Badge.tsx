import { FC, ReactNode } from 'react';
import { bgForThemeColor, ThemeColor } from '../theme';
import { joinClasses } from '../utility/css';

interface Props {
  className?: string
  invert?: boolean
  color: ThemeColor
  children: ReactNode
}

const Badge: FC<Props> = ({ className, color, invert, children }) => {
  return(
    <h2 className={joinClasses(
      className,
      'inline-block',
      invert ? 'text-black' : 'text-white',
      bgForThemeColor(color),
      'rounded-full',
      'leading-none',
      'px-3 py-2',
      'uppercase',
      'text-[0.8rem] font-[600]',
      'select-none',
    )}>
      {children}
    </h2>
  );
};

export default Badge;
