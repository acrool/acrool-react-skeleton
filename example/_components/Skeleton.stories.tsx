import {useArgs} from '@storybook/preview-api';
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Flex} from '@acrool/react-grid';

import {Skeleton} from '@acrool/react-skeleton';
import {LotteryDrawCardSkeleton, LotteryDrawCardSkeletonPosition} from '../src/components/LotteryDrawCard';

const meta = {
    title: 'Components/Skeleton',
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
        return <Flex column>
            <LotteryDrawCardSkeleton/>
            <LotteryDrawCardSkeletonPosition/>
        </Flex>;
    },
};
