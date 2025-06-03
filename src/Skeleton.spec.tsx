import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import React from 'react';

import Skeleton from './Skeleton';

describe('Skeleton', () => {
    it('應該正確渲染預設內容', () => {
        render(<Skeleton />);
        expect(screen.getByText('⬛')).toBeInTheDocument();
    });

    it('應該渲染自訂文字', () => {
        render(<Skeleton text="載入中..." />);
        expect(screen.getByText('載入中...')).toBeInTheDocument();
    });

    it('應該套用寬高與圓角', () => {
        const {container} = render(<Skeleton w={100} h={50} r={8} />);
        const div = container.firstChild as HTMLElement;
        expect(div).toHaveStyle({width: '100px', height: '50px'});
        expect(div.getAttribute('style')).toEqual(expect.stringContaining('--skeleton-radius: 8px'));
    });

    it('pause 屬性應該正確設置 data-pause', () => {
        const {container} = render(<Skeleton pause />);
        const div = container.firstChild as HTMLElement;
        expect(div).toHaveAttribute('data-pause', '');
    });

    it('r 為 true 時應該設置 data-circle', () => {
        const {container} = render(<Skeleton r />);
        const div = container.firstChild as HTMLElement;
        expect(div).toHaveAttribute('data-circle', '');
    });
});
