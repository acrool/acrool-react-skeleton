
import {useArgs} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Skeleton} from '@acrool/react-skeleton';
import {LotteryDrawCardSkeletonPosition} from '../src/components/LotteryDrawCard';

const meta = {
    title: 'Components/SkeletonPosition',
    component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <LotteryDrawCardSkeletonPosition/>;
    },
};
