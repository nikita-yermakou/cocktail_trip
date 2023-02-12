import React from 'react';

interface DeviceSizeIF {
    [key: string]: string
}

const screenSize: DeviceSizeIF = {
    mobileS: '360px',
    mobileL: '540px',
    tablet: '768px',
    laptop: '1024px',
    desctop: '1280px'
}

export const device: DeviceSizeIF = {
    mobileS: `(min-width: ${screenSize.mobileS})`,
    mobileL: `(min-width: ${screenSize.mobileL})`,
    tablet: `(min-width: ${screenSize.tablet})`,
    laptop: `(min-width: ${screenSize.laptop})`,
    desctop: `(min-width: ${screenSize.desctop})`
}


