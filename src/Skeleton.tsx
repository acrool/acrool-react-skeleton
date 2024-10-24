import {TRadiusValue, TSizeValue} from './types';
import CSS from 'csstype';
import {getRadiusValue, getSizeValue} from './utils';
import {clsx} from 'clsx';
import styles from './skeleton.module.scss';



interface IProps {
    className?: string
    style?: CSS.Properties
    w?: TSizeValue
    h?: TSizeValue
    r?: TRadiusValue
    text?: string
    aspect?: string|number
    pause?: boolean
}


/**
 * 骨架屏產生器
 * @param className
 * @param w
 * @param h
 * @param r
 * @param shape
 */
const Skeleton = ({
    className,
    w,
    h,
    r,
    aspect,
    text,
    pause
}: IProps) => {

    return <div
        className={clsx(styles.root, className)}
        style={{
            width: text ? 'auto' : w ? getSizeValue(w): undefined,
            height: text ? 'auto' : h ? getSizeValue(h): undefined,
            '--skeleton-radius': typeof r !== 'undefined' ? getRadiusValue(r) : undefined,
            aspectRatio: aspect,
        } as CSS.Properties}
        data-circle={r === true ? '':undefined}
        data-pause={pause ? '': undefined}
    >
        {text ?? '⬛'}
    </div>;
};

export default Skeleton;
