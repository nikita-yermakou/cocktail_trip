import { forwardRef } from 'react';
import { RecentlyViewedProps } from './recentlyViewed.interface';
import { motion } from 'framer-motion';
import { RVItemContainer, RVItemImg, RVItemName } from './recentlyViewed.styles';

const RVItem = forwardRef((props: RecentlyViewedProps, ref: any) => {

    return(
        <RVItemContainer
            ref={ref}
        >
            <RVItemImg src={props.img}/>
            <RVItemName>{props.name}</RVItemName>
        </RVItemContainer>
    )
})

export const MRVItem = motion(RVItem);