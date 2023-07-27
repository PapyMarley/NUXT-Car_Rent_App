import {theme} from 'ant-design-vue'

const {defaultAlgorithm, defaultSeed} = theme

// exporting the theme to provide it to our entire website in `app.vue`
export const customTheme = {
    "colorPrimary": "#722ED1",
    "colorSuccess": "#722ED1",
    "colorWarning": "#c70000",
    "colorError": "#F5222D",
    "colorInfo": "#F5222D",
    "colorText": "#000",
    "colorTextSecondary": "#722ED1",
    "colorBorder": "#000000",
    "colorBgBase": "#ff811e",
    "colorBorderSecondary": "#722ED1",
    "colorBgContainer": "#efdbff",
    "colorBgElevated": "#efdbff",
    "colorBgLayout": "#ff811e",
}

// This will recompute colors and their variants based on our custom values
const mapToken = defaultAlgorithm({
    ...defaultSeed,
    ...customTheme
})

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            theme: mapToken // making our theme accessible in all our components to style individual elements
        }
    }
})