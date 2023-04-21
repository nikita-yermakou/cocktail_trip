import React from 'react';

export const elementAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { 
            delay: custom * 0.005
        }
    })
}