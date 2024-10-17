import type {Meta, StoryObj} from '@storybook/react';
import {Col, Flex, Row} from '@acrool/react-grid';

import previewImg from './preview.webp';
import LotteryDrawCardSkeleton from './LotteryDrawCardSkeleton';

const meta = {
    title: 'Examples/LotteryDrawCard',
    component: LotteryDrawCardSkeleton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Custom skeleton lottery draw card'
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
        return <Row>
            <Col col>
                <img src={previewImg} width="auto" height="261px"/>
            </Col>
            <Col col>
                <LotteryDrawCardSkeleton/>
            </Col>

        </Row>;
    },
};
