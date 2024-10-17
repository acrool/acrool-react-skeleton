import {TSizeValue} from './types';
import CSS from 'csstype';
import {getSizeValue} from './utils';
import {clsx} from 'clsx';
import styles from './skeleton-bg-position.module.scss';



interface IProps {
    className?: string
    style?: CSS.Properties
    w?: TSizeValue
    h?: TSizeValue
    text?: string
    round?: boolean
    aspect?: string|number
    pause?: boolean
}


/**
 * 骨架屏產生器
 * @param className
 * @param w
 * @param h
 * @param shape
 */
const SkeletonBgPosition = ({
    className,
    w,
    h,
    aspect,
    round,
    text,
    pause
}: IProps) => {

    return <div
        className={clsx(styles.positionRoot, className)}
        style={{
            width: text ? 'auto' : w ? getSizeValue(w): undefined,
            height: text ? 'auto' : h ? getSizeValue(h): undefined,
            aspectRatio: aspect,
        }}
        data-aspect={aspect ? '': undefined}
        data-round={round ? '': undefined}
        data-pause={pause ? '': undefined}
    >
        {text ?? '⬛'}
    </div>;
};

export default SkeletonBgPosition;
