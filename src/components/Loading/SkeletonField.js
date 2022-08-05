import React from 'react'
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';

function SkeletonField() {
    return (

        <Box>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </Box>
    )
}

export default SkeletonField
