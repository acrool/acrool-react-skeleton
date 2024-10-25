import type {Meta, StoryObj} from '@storybook/react';
import {Col, Row} from '@acrool/react-grid';

import previewImg from './preview.webp';
import TableSkeleton from './TableSkeleton';

const meta = {
    title: 'Examples/Table',
    component: TableSkeleton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Custom skeleton table card'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof TableSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <Row>
            <Col col>
                <img src={previewImg} width="auto" height="350px" alt={''}/>
            </Col>
            <Col col>
                <TableSkeleton/>
            </Col>
        </Row>;
    },
};
