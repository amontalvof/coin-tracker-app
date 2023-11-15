import type { Theme } from '@react-navigation/native';

export const colors = {
    blue: '#0A84FF',
    black: '#0d0d0d',
    darkGray: '#1a1a1a',
    lightGray: '#808080',
    white: '#FFFFFF',
    red: '#FF0000',
};

export const theme: Theme = {
    dark: true,
    colors: {
        primary: colors.blue,
        background: colors.black,
        card: colors.darkGray,
        text: colors.white,
        border: colors.lightGray,
        notification: colors.blue,
    },
};
