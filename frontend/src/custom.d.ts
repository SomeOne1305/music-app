declare module '@fortawesome/react-fontawesome' {
  import { ComponentType, SVGProps } from 'react';
  import { IconProp,Transform } from '@fortawesome/fontawesome-svg-core';

  export interface FontAwesomeIconProps {
    icon: IconProp;
    mask?: IconProp;
    className?: string;
    color?: string;
    size?: string | number;
    spin?: boolean;
    pulse?: boolean;
    inverse?: boolean;
    transform?: Transform | Transform[];
    fixedWidth?: boolean;
    listItem?: boolean;
    flip?: 'horizontal' | 'vertical' | 'both';
    rotation?: 90 | 180 | 270;
    pull?: 'left' | 'right';
    border?: boolean;
    style?: React.CSSProperties;
  }

  const FontAwesomeIcon: ComponentType<FontAwesomeIconProps>;

  export default FontAwesomeIcon;
}