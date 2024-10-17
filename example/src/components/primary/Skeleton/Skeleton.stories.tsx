import type {Meta, StoryObj} from '@storybook/react';

import {Skeleton} from '@acrool/react-skeleton';

const meta = {
    title: 'Primary/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Skeleton animation use transform'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        w: 200,
        h: 200
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {},
};
