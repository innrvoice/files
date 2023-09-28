export interface ICustomSwitcherProps {
  options: CustomSwitcherOption[];
  value: string;
  containerWidth: number;
  variant?: CustomSwitcherVariant;
  switchSize?: number;
  dragEnabled?: boolean;
  disabled?: boolean;
  scaleWhileDrag?: boolean | number;
  cssOverrides?: CSSOverrides;
  callback(currentValue: string): unknown;
}

  
  