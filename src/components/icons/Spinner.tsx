import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate360 = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const StyledSpinner = styled('svg')`
  animation: ${rotate360} 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

const StyledSpin = styled('div')`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: currentColor;
  width: 36px;
  height: 36px;
  animation: ${rotate360} 1s linear infinite;
  margin-bottom: 10px;
`;

const StyledText = styled('span')`
  text-align: center;
  text-transform: capitalize;
  width: 36px;
`;

interface SpinnerProps {
  showLegend?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  showLegend = false,
}: SpinnerProps) => {
  return (
    <React.Fragment>
      <StyledSpin />
      {showLegend && <StyledText>Loading</StyledText>}
    </React.Fragment>
  );
};
