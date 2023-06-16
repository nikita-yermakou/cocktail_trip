export interface BtnProps {
    to: string,
    text: string
}

export interface LogoBtnProps {
    to: string,
    img: string,
    title: string
}

export interface BurgerMenuBtnProps {
    check: boolean,
    onClick(): void
}