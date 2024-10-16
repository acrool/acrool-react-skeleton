import {Flex, fr, Grid} from '@acrool/react-grid';
import styled from 'styled-components';

import {SkeletonPosition as Skeleton} from '@acrool/react-skeleton';
import {generatorArray} from '@acrool/js-utils/array';

const LotteryDrawCardSkeletonPosition = () => {
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
                    return <Flex column className="gap-2" key={key}>
                        <Skeleton h={110}/>
                        <Skeleton round w={46} className="mx-auto"/>
                        <Skeleton text="#2412394" className="mx-auto"/>
                    </Flex>;
                })}
        </Grid>
    </LotteryDrawCardSkeletonRoot>;
};

export default LotteryDrawCardSkeletonPosition;




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
