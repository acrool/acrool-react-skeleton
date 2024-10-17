
import {useArgs} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Skeleton} from '@acrool/react-skeleton';
import SkeletonBgPosition from './SkeletonBgPosition';

const meta = {
    title: 'Primary/SkeletonBgPosition',
    component: SkeletonBgPosition,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Skeleton animation use background-position (old)'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        w: 200,
        h: 200
    },
} satisfies Meta<typeof SkeletonBgPosition>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
