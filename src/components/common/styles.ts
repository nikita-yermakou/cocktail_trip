interface ColorIF {
    [key: string]: string
}

export interface ThemeIF {

    [key: string]: string | {
        [key: string]: string
    }
}

interface FontSizeIF {
    [key: string]: string
}

interface FontFamilyIF {
    [key: string]: string
}

interface ImgIF {
    [key: string]: string
}

export const LightTheme: ThemeIF = {
    name: 'light',
    color: {
        bg: '#acbaa0',
        cardsBg: '#dedbbc',
        titleText: '#ba2d7f',
        text: '#1C1C1C',
        underline: '#1C1C1C',
        error: '#d47a1c',
        activeButton: '#ba2d7f',
        button: '#94a685',
        switcher: '#9449cc'
    }
}

export const DarkTheme: ThemeIF = {
    name: 'dark',
    color: {
        bg: '#03112b',
        cardsBg: '#071b3e',
        titleText: '#64ffdb',
        text: '#cdd7f6',
        underline: '#3e8272',
        error: '#f062b5',
        activeButton: '#f062b5',
        button: '#002355',
        switcher: '#f062b5'
    }
}

export const fontSize: FontSizeIF = {
    fontS: '0.8rem',
    fontM: '1.2rem',
    fontL: '1.5rem',
    fontXL: '2rem'
}

export const fontFamily: FontFamilyIF = {
    JosefinReg: 'JosefinSansRegular',
    JosefinRegIt: 'JosefinSansRegularItalic',
    JosefinBold: 'JosefinSansBold',
    JosefinBoldIt: 'JosefinSansBoldItalic',
    JosefinLight: 'JosefinSansLight',
    JosefinLightIt: 'JosefinSansLightItalic',
    UnbReg: 'UnboundedRegular',
    UnbBold: 'UnboundedBold',
    UnbLight: 'UnboundedLight',
    UnbBlack: 'UnboundedBlack',
    CaveatBold: 'CaveatVariable'
}

export const Img: ImgIF = {
    IconHeader: require('./img/logo.png')
}

export const color: ColorIF = {
    deepPink: '#e25498',
    darkPink: '#d9588d',
    pink2: '#e47bb2',
    pink: '#d564b0',
    purple: '#631c56',
    purple2: '#9e609a',
    bgDark: '#775395',//bgDark
    headerBgDark: '#3c345c',//headerBgDark
    darkPurple2: '#5c4a76',
    headerBgLight: '#b8939f',//headerBgLight
    textDark: '#f7e2ee',//textDark
    bgLight: '#f1c3d3',//bgLight
    gray: '#b8aec8',
    textLight: '#232324',//textLight
    transparent: 'rgba(0, 0, 0, 0)'
}