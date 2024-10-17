
import {TSizeValue} from './types';


export const getSizeValue = (value: TSizeValue) => {
    if(typeof value === 'number'){
        return `${value}px`;
    }
    return String(value);
};
