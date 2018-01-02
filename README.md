# easy-translator-js
A simple vuejs plugin for multi language traslation.

## attach to vue:

`
    import Vue from 'vue'
    import Lang from "easy-translator-js";
`

## config like so:

`
    Vue.use(Lang, {  
    locale : "hi-IN",
    localePath(path) {
        return path = "./path/to/locales/";
    }
    });

`