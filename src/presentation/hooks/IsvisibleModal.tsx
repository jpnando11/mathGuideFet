/* eslint-disable prettier/prettier */
import { useState } from 'react';

export const IsvisibleModal = () => {
    const [visible, setvisible] = useState(false);

    const putVisible = (isVisible:boolean)=>{
        setvisible(isVisible);
        console.log(visible);
    };

    return {
        putVisible,
        visible,
    };
};


