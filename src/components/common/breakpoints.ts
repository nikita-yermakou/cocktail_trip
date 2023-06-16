interface DeviceSizeIF {
    [key: string]: string
}

const screenSize: DeviceSizeIF = {
    mobileS: '360px',
    mobileL: '540px',
    tabletS: '768px',
    tabletL: '900px',
    laptop: '1024px',
    desctop: '1280px'
}

export const device: DeviceSizeIF = {
    mobileS: `(max-width: ${screenSize.mobileS})`,
    mobileL: `(max-width: ${screenSize.mobileL})`,
    tabletS: `(max-width: ${screenSize.tabletS})`,
    tabletL: `(max-width: ${screenSize.tabletL})`,
    laptop: `(max-width: ${screenSize.laptop})`,
    desctop: `(max-width: ${screenSize.desctop})`
}


