import { CSSProperties, FC } from 'react';
import {
  LOGO_COLOR_ACADEMIC_CHAMPION_HEX,
  LOGO_COLOR_CONTRIBUTING_CITIZEN_HEX,
  LOGO_COLOR_CRITICAL_AND_CREATIVE_THINKER_HEX,
  LOGO_COLOR_DETERMINED_LEARNER_HEX,
  LOGO_COLOR_EFFECTIVE_COMMUNICATOR_HEX,
  LOGO_COLOR_ENGAGED_COLLABORATOR_HEX,
  LOGO_COLOR_THOUGHTFUL_PROBLEM_SOLVER_HEX,
} from '.';

interface Props {
  title: string
  description: string
  className?: string
  style?: CSSProperties
  width?: number
  height?: number
  color0?: string
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  color5?: string
  color6?: string
}

const LogoSvg: FC<Props> = ({
  title,
  description,
  className,
  style,
  width,
  height,
  color0 = LOGO_COLOR_ACADEMIC_CHAMPION_HEX,
  color1 = LOGO_COLOR_CRITICAL_AND_CREATIVE_THINKER_HEX,
  color2 = LOGO_COLOR_EFFECTIVE_COMMUNICATOR_HEX,
  color3 = LOGO_COLOR_DETERMINED_LEARNER_HEX,
  color4 = LOGO_COLOR_THOUGHTFUL_PROBLEM_SOLVER_HEX,
  color5 = LOGO_COLOR_ENGAGED_COLLABORATOR_HEX,
  color6 = LOGO_COLOR_CONTRIBUTING_CITIZEN_HEX,
}) => {
  const classForShape = (fill: string): CSSProperties => ({
    fill,
    mixBlendMode: 'multiply',
  });

  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 356.22 347.29"
      {...{
        className,
        style,
        width,
        height,
      }}
    >
      <title>{title}</title>
      <desc>{description}</desc>
      <g style={{ isolation: 'isolate' }}>
        <rect
          x="73.54"
          y="18.13"
          width="108.29"
          height="108.3"
          transform="translate(-18.72 62.57) rotate(-25.72)"
          style={classForShape(color0)}
        />
        <rect
          x="174.36"
          y="18.13"
          width="108.29"
          height="108.3"
          transform="translate(64.25 246.81) rotate(-64.29)"
          style={classForShape(color1)}
        />
        <polygon
          // eslint-disable-next-line max-len
          points="332.11 86.25 356.22 191.84 250.64 215.94 226.54 110.36 332.11 86.25"
          style={classForShape(color2)}
        />
        <polygon
          // eslint-disable-next-line max-len
          points="345.04 240.82 277.52 325.48 192.86 257.97 260.36 173.29 345.04 240.82"
          style={classForShape(color3)}
        />
        <polygon
          // eslint-disable-next-line max-len
          points="232.27 347.29 123.97 347.29 123.97 239 232.26 238.99 232.27 347.29"
          style={classForShape(color4)}
        />
        <polygon
          points="78.7 325.5 11.18 240.83 95.85 173.31 163.37 257.97 78.7 325.5"
          style={classForShape(color5)}
        />
        <rect
          x="10.69"
          y="96.96"
          width="108.3"
          height="108.3"
          transform="translate(-96.91 180.72) rotate(-77.15)"
          style={classForShape(color6)}
        />
      </g>
    </svg>
  );
};

export default LogoSvg;
