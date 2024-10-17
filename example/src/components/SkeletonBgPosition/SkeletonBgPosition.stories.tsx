
import {useArgs} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Skeleton} from '@acrool/react-skeleton';
import SkeletonBgPosition from './SkeletonBgPosition';

const meta = {
    title: 'Old/SkeletonBgPosition',
    component: SkeletonBgPosition,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof SkeletonBgPosition>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <SkeletonBgPosition/>;
    },
};
