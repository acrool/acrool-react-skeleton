import {Flex, fr, Grid} from '@acrool/react-grid';
import styled from 'styled-components';

import {Skeleton} from '@acrool/react-skeleton';
import {generatorArray} from '@acrool/js-utils/array';


const TableSkeleton = () => {
    return<TableSkeletonRoot className="gap-1">
        <Grid col={fr(4)} className="px-1 gap-2">
            <div></div>
            <Skeleton w="60%"/>
            <Skeleton w="60%"/>
            <Skeleton w="60%"/>
        </Grid>

        {generatorArray(5)
            .map((key) => (
                <CustomFlex className="p-1 gap-2" key={key}>
                    {generatorArray(4)
                        .map((key) => (
                            <Skeleton key={key} w={60}/>
                        ))}
                </CustomFlex>
            ))}

    </TableSkeletonRoot>;
};

export default TableSkeleton;



const CustomFlex = styled(Flex)`
    border: 1px solid rgba(133, 133, 133, .2);
    border-radius: 5px;
    
    &:nth-child(even) {
        background-color: rgba(0,0,0,.04);
    }
`;

const TableSkeletonRoot = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(133, 133, 133, .2);
    padding: 10px;
`;
