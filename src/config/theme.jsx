import { extendTheme } from '@chakra-ui/react'



const theme = extendTheme({
    fonts: {
        heading: `'JosefinSansRegular', sans-serif`,
        text: `'RubikRegular, sans-serif'`
    },
    colors: {
        brand: {
            primary: '#23b5d3',
            primaryContainer: '#a2e1ee',
            onPrimaryContainer: '#142027',
            neutral: '#2e4756',
            bg: '#eff1f3',
            subtleShadow: '#d6dbe0'
        }
    },
    components: {
        Link: {
            variants: {
                'primary': {
                    fontFamily: 'JosefinSansRegular',
                    fontSize: {
                        base: 'md',
                        md: 'xl'
                    },
                    color: 'brand.neutral',
                    '&:hover': {
                        textDecoration: 'none',
                        color: 'brand.primary',
                        textShadow: '0px 2px 8px #d6dbe0'
                    }
                }
            }
        },
        Heading: {
            variants: {
                'primary': {
                    color: 'brand.neutral'
                }
            }
        },
        IconButton: {
            variants: {
                'primary': {
                    color: 'brand.neutral'
                }
            }
        },
        Button: {
            variants: {
                'primary': {
                    background: 'brand.neutral',
                    color: 'brand.bg',
                    '&:hover': {
                        color: 'brand.bg',
                        background: 'brand.primary',
                        boxShadow: 'sm'
                    }
                }
            }
        }
    }
})

export default theme