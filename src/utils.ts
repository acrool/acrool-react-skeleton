import {TSizeValue} from './types';


export const getSizeValue = (value: TSizeValue) => {
    if(value === true){
        return '100%';
    }
    if(value === false){
        return 'auto';
    }
    if(typeof value === 'number'){
        return `${value}px`;
    }
    return String(value);
};



export const getRadiusValue = (value: TSizeValue) => {
    if(value === true){
        return;
    }
    if(value === false){
        return 'auto';
    }
    if(typeof value === 'number'){
        return `${value}px`;
    }
    return String(value);
};