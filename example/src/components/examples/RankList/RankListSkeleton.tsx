import {Flex} from '@acrool/react-grid';
import styled from 'styled-components';

import {Skeleton} from '@acrool/react-skeleton';
import {generatorArray} from '@acrool/js-utils/array';



/**
 * 等級清單骨架屏
 * @constructor
 */
const RankListSkeleton = () => {
    return <RankListSkeletonRoot>
        <CustomFlex className="align-items-center">
            <Skeleton w={100} h={100} r={0} className="flex-auto"/>
            <Flex className="gap-2 px-2">
                {generatorArray(4)
                    .map((key) => (
                        <Skeleton key={key} w={70} h={70}/>
                    ))}
            </Flex>
        </CustomFlex>

        <Flex className="py-2">
            <div className="px-2" style={{width: '100px'}}>
                <Skeleton w="100%" h={35}/>
            </div>
            <Flex className="gap-2 px-2">
                {generatorArray(4)
                    .map((key) => (
                        <Skeleton key={key} w={70} h={35}/>
                    ))}
            </Flex>
        </Flex>

        <CustomFlex className="align-items-center">
            <Skeleton w={100} h={100} r={0} className="flex-auto"/>
            <Flex className="gap-2 px-2">
                {generatorArray(4)
                    .map((key) => (
                        <Skeleton key={key} w={70} h={70}/>
                    ))}
            </Flex>
        </CustomFlex>
    </RankListSkeletonRoot>;
};

export default RankListSkeleton;





const CustomFlex = styled(Flex)`
  background-color: rgba(0, 0, 0, .04);
`;

const RankListSkeletonRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(133, 133, 133, .2);
`;
