
export type TSizeUnit = 'px' | '%' | 'em' | 'fr' | 'rem';
export type TSizeValue = true | false | 'auto' | number | `${number}${TSizeUnit}`;
export type TRadiusValue = TSizeValue;
