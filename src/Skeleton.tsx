import {TSizeValue} from './types';
import CSS from 'csstype';
import {getSizeValue} from './utils';
import {clsx} from 'clsx';
import styles from './skeleton.module.scss';



interface IProps {
    className?: string
    style?: CSS.Properties
    w?: TSizeValue
    h?: TSizeValue
    text?: string
    round?: boolean
    aspect?: string|number
}


/**
 * 骨架屏產生器
 * @param className
 * @param w
 * @param h
 * @param shape
 */
const Skeleton = ({
    className,
    w,
    h,
    aspect,
    round,
    text,
}: IProps) => {

    return <div
        className={clsx(styles.root, className)}
        style={{
            width: text ? 'auto' : w ? getSizeValue(w): undefined,
            height: text ? 'auto' : h ? getSizeValue(h): undefined,
            aspectRatio: aspect,
        }}
        data-aspect={aspect ? '': undefined}
        data-round={round ? '': undefined}
    >
        {text ?? '⬛'}
    </div>;
};

export default Skeleton;
