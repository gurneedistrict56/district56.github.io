import { FC } from 'react';
import { joinClasses } from '../utility/css';
import { STANDARD_TEXT_COLOR } from '../theme';
import { PAGE_PADDING_HORIZONTAL } from '../app/config';

interface Props {
  className?: string
}

const Footer: FC<Props> = ({ className }) => {
  return(
    <footer className={joinClasses(
      className,
      PAGE_PADDING_HORIZONTAL,
    )}>
      <p className={joinClasses(
        'text-sm',
        STANDARD_TEXT_COLOR,
      )}>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Copyright Gurnee School District 56
      </p>
    </footer>
  );
};

export default Footer;
