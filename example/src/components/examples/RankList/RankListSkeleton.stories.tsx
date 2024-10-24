import type {Meta, StoryObj} from '@storybook/react';
import {Flex} from '@acrool/react-grid';

import previewImg from './preview.webp';
import RankListSkeleton from './RankListSkeleton';

const meta = {
    title: 'Examples/RankList',
    component: RankListSkeleton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Custom skeleton rankList'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof RankListSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
    render: function Render(args) {
        return <Flex className="column-gap-3">
            <img src={previewImg} width="auto" height="260px" alt={''}/>
            <RankListSkeleton/>
        </Flex>;
    },
};
