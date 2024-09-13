# Acrool React Skeleton

<a href="https://acrool-react-skeleton.pages.dev/" title="Acrool React Skeleton - Fast custom skeleton for Reactjs">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-skeleton/main/example/public/og.webp" alt="Acrool React Skeleton Logo"/>
</a>

<p align="center">
    Fast custom skeleton for Reactjs
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-skeleton.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-skeleton)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-skeleton?style=for-the-badge)](https://github.com/acrool/@acrool/react-skeleton/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-skeleton?style=for-the-badge)](https://github.com/acrool/react-skeleton/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-skeleton.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-skeleton)
[![npm](https://img.shields.io/npm/dt/@acrool/react-skeleton.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-skeleton)

</div>

## Features

- Support width, height, aspect
- Support round
- Support text mock width

## Install

```bash
yarn add @acrool/react-skeleton
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-skeleton/dist/index.css";
```

then in your page
```tsx
import {Flex, fr, Grid} from '@acrool/react-grid';
import styled from 'styled-components';

import {Skeleton} from '@acrool/react-skeleton';
import {generatorArray} from '@acrool/js-utils/array';

const LotteryDrawCardSkeleton = () => {
    return <LotteryDrawCardSkeletonRoot>
        <Flex className="justify-content-between gap-4">
            <Skeleton text="Next draw : 2024/09/01 13:02:53"/>
            <Skeleton text="Last bet In: 0 Day 00:00:00"/>
        </Flex>

        <Title>
            <Skeleton text="GUESS THE LAST DIGIT OF THE FIRST PRIZE"/>
        </Title>

        <Grid col={fr(3)} className="gx-2">
            {generatorArray(3)
                .map((key) => {
                    return <Flex col="column" className="gap-2" key={key}>
                        <Skeleton h={110}/>
                        <Skeleton round w={46} className="mx-auto"/>
                        <Skeleton text="#2412394" className="mx-auto"/>
                    </Flex>;
                })}
        </Grid>
    </LotteryDrawCardSkeletonRoot>;
};

export default LotteryDrawCardSkeleton;


const Title = styled.div`
    font-size: 15px;
    padding: 10px;
`;

const LotteryDrawCardSkeletonRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(133, 133, 133, .2);
  padding: 10px;
  font-size: 12px;
`;

```




## Options

if need use `null` value, options type

```json
{
    "compilerOptions": {
        "strictNullChecks": false
    }
}
```

There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-skeleton/main/play-in-example-button.svg)](https://acrool-react-skeleton.pages.dev)


## License

MIT © [imagine10255](https://github.com/imagine10255)
