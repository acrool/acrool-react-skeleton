import type {Meta, StoryObj} from '@storybook/react';
import {Col, Flex, Row} from '@acrool/react-grid';

import previewImg from './preview.webp';
import LotteryCard2Skeleton from './LotteryCard2Skeleton';

const meta = {
    title: 'Examples/LotteryCard2',
    component: LotteryCard2Skeleton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Custom skeleton lottery card 2'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LotteryCard2Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;




export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <Flex className="gap-4 align-items-center">
            <img src={previewImg} width="auto" height="261px" alt={''}/>
            <LotteryCard2Skeleton/>
        </Flex>;
    },
};
