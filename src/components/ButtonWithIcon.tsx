import cx from 'classnames';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import mixpanel from 'mixpanel-browser';
import { trackButtonClick } from '../utils/tracking';

type ButtonWithIconProps = {
  text: string;
  href: string;
  iconName: string;
  className?: string;
  shouldAnimate?: boolean;
  isInternal?: boolean;
};

export function ButtonWithIcon({
  text,
  href,
  iconName,
  className,
  shouldAnimate = false,
  isInternal = false,
}: ButtonWithIconProps) {
  const classNames = cx(
    'mb-3.5 text-white border-0 py-2 px-6 hover:brightness-75 rounded flex items-center justify-center cursor',
    className,
    {
      'motion-safe:animate-periodicSlideRight': shouldAnimate,
    }
  );

  const inner = (
    <Fragment>
      <ion-icon class="mr-2" name={iconName}></ion-icon>
      {text}
    </Fragment>
  );

  const trackClick = () => trackButtonClick({ text, href });

  if (isInternal) {
    return (
      <Link
        to={href}
        onClick={trackClick}
        target="_blank"
        className={classNames}
      >
        {inner}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        onClick={trackClick}
        target="_blank"
        className={classNames}
      >
        {inner}
      </a>
    );
  }
}
