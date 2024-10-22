import type {Meta, StoryObj} from '@storybook/react';
import {Col, Row} from '@acrool/react-grid';

import previewImg from './preview.webp';
import YoutubeCardSkeleton from './YoutubeCardSkeleton';

const meta = {
    title: 'Examples/YoutubeCard',
    component: YoutubeCardSkeleton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Custom skeleton youtube card'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof YoutubeCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <Row>
            <Col col>
                <img src={previewImg} width="auto" height="280px" alt={''}/>
            </Col>
            <Col col>
                <YoutubeCardSkeleton/>
            </Col>
        </Row>;
    },
};
