import {Flex} from '@acrool/react-grid';
import styled from 'styled-components';

import {Skeleton} from '@acrool/react-skeleton';
import {generatorArray} from '@acrool/js-utils/array';

const LotteryCard2Skeleton = () => {
    return <LotteryCard2SkeletonRoot>

        <Skeleton h={20} w="85%" className="mx-auto mb-2"/>

        <Flex className="align-items-center">
            {/*  左邊區塊  */}
            <Flex column className="row-gap-2">
                {generatorArray(3)
                    .map((key) => {
                        return <Flex className="gap-2" key={key}>
                            <Skeleton w={50} aspect={1}/>

                            <Flex className="flex-column gap-1 my-auto">
                                <Skeleton w={100} r={5}/>
                                <Flex className="flex-row gap-1 mx-auto">
                                    {generatorArray(4)
                                        .map((key) => {
                                            return <div key={key}>
                                                <Skeleton h={25} r={3}/>
                                            </div>;
                                        })}
                                </Flex>
                            </Flex>

                            <Skeleton w={50} r/>
                        </Flex>;
                    })}
            </Flex>

            {/*  右邊區塊  /*/}
            <CustomTable className="py-3">
                <tr>
                    <CustomTd/>
                </tr>
                <tr>
                    <CustomTd2/>
                </tr>

                <FloatSkeleton h={50} w={90} className="my-auto"/>

            </CustomTable>
        </Flex>

    </LotteryCard2SkeletonRoot>;
};

export default LotteryCard2Skeleton;





const FloatSkeleton = styled(Skeleton)`
  position: absolute;
  background-color: #fff;
  right: 0;
  top: 62px;
`;

const CustomTable = styled.table`
  width: 120px;
  border-left: none;
  border-collapse: separate;
  position: relative;
  padding-right: 42px;
`;

const CustomTd = styled.td`
  border: 1px dashed rgba(133, 133, 133, 0.2);
  border-radius: 0 8px 0 0;
  border-left: none;
  height: 60px;
`;

const CustomTd2 = styled(CustomTd)`
  border-radius: 0 0 8px 0;
  border-top: none;
`;

const LotteryCard2SkeletonRoot = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid rgba(133, 133, 133, 0.2);
  padding: 15px;
`;