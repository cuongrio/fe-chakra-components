import { ThemeOverride, useColorModeValue, theme as defaultTheme } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

export const linkColors = {
  light: 'steal.400',
  dark: 'steal.500',
  lhover: 'steal.200',
  dhover: 'steal.700',
  visitedLight: 'steal.300',
  visitedDark: 'steal.600'
};

export function useLinkColor() {
  return useColorModeValue(linkColors.dark, linkColors.light);
}

export function useHoverLinkColor() {
  return useColorModeValue(linkColors.dhover, linkColors.lhover);
}

export function useVisitedLinkColor() {
  return useColorModeValue(linkColors.visitedLight, linkColors.visitedDark);
}

export function getTagBackgroundDark(accentKey: ColorKeys, theme: ThemeOverride) {
  return accentKey && transparentize((theme.colors as any)[accentKey][200], 0.1)(theme);
}

export function getPresetBackground(accentKey: ColorKeys, theme: ThemeOverride) {
  const opacity = useColorModeValue(0.3, 0.4);
  return accentKey && transparentize((theme.colors as any)[accentKey][100], opacity)(theme);
}

export const colors = {
  ...defaultTheme.colors,
  gray: {
    ...defaultTheme.colors.gray,
    1000: '#121721'
  },
  defaultAccent: {
    // teal
    50: '#E6FFFA',
    100: '#E6FFFA',
    200: '#E6FFFA',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044'
  },
  accent: {
    // See src/components/Accent.tsx for CSS variable definition
    50: 'var(--colors-accent-50)',
    100: 'var(--colors-accent-100)',
    200: 'var(--colors-accent-200)',
    300: 'var(--colors-accent-300)',
    400: 'var(--colors-accent-400)',
    500: 'var(--colors-accent-500)',
    600: 'var(--colors-accent-600)',
    700: 'var(--colors-accent-700)',
    800: 'var(--colors-accent-800)',
    900: 'var(--colors-accent-900)'
  }
};

export type ColorKeys = keyof typeof colors;

export const accentKeys: ColorKeys[] = [
  'defaultAccent',
  'green',
  'cyan',
  'orange',
  'blue',
  'pink',
  'teal',
  'purple',
  'red'
];
