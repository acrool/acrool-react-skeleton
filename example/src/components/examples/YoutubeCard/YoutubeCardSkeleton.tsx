import {Flex} from '@acrool/react-grid';
import styled from 'styled-components';

import {Skeleton} from '@acrool/react-skeleton';

const YoutubeCardSkeleton = () => {
    return <YoutubeCardSkeletonRoot>
        <Flex className="flex-column gap-2">

            <Skeleton w={330} h={180}/>

            <Flex className="gap-1">
                <Skeleton r w={32} h={32} className="flex-auto"/>
                <Flex className="flex-column gap-1 w-100">
                    <Skeleton w="90%"/>
                    <Skeleton w="60%"/>
                </Flex>
            </Flex>

        </Flex>

    </YoutubeCardSkeletonRoot>;
};

export default YoutubeCardSkeleton;




const YoutubeCardSkeletonRoot = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid rgba(133, 133, 133, .2);
    padding: 10px;
    font-size: 18px;
`;
