import { CSSProperties } from 'react';

export type CSSOverrides = {
  cursorDefault?: CSSProperties['cursor'];
  cursorGrab?: CSSProperties['cursor'];
  cursorGrabbing?: CSSProperties['cursor'];
  cursorDisabled?: CSSProperties['cursor'];
  switch?: CSSProperties;
  division?: CSSProperties;
  divisionLine?: CSSProperties;
  label?: CSSProperties;
};
