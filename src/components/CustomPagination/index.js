import { Pagination } from '@mui/material';
import React from 'react';

const CustomPagination = ({ pagination, setPagination, total }) => {
    return (
        <div className='mt-20'>
            <Pagination
                count={Math.ceil(total / pagination.limit)}
                variant="outlined"
                shape="rounded"
                page={pagination.current}
                onChange={(e, page) =>{
                    setPagination({
                        offset: (page-1)*pagination.limit,
                        limit: 3,
                        current: page,
                    })
                }}
            />
        </div>
    );
};


export default CustomPagination;