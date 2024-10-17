import type {Meta, StoryObj} from '@storybook/react';
import {Flex} from '@acrool/react-grid';

import LotteryDrawCardSkeleton from './LotteryDrawCardSkeleton';

const meta = {
    title: 'Examples/LotteryDrawCardSkeleton',
    component: LotteryDrawCardSkeleton,
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
} satisfies Meta<typeof LotteryDrawCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <Flex column>
            <LotteryDrawCardSkeleton/>
        </Flex>;
    },
};
