# easy-translator-vue
A simple vuejs plugin for multi language translation.

## Install
### with npm
    $ npm install easy-translator-vue --save
### with yarn
    $ yarn add easy-translator-vue
    
## attach to vue:


    import Vue from 'vue'
    import Lang from "easy-translator-vue";


## config like so:

    import en from "path/to/locales/en.js";
    import hi from "path/to/locales/hi.js";

    Vue.use(Lang, {
        locale: "hi",
        fallbackLocale: "en",
        locales: { en, hi },
    });

    

## Sample language modules:

en.js

    export default {
        "HELLO": "Hello World."
    }



hi.js

    export default {
        "HELLO": "नमस्कार."
    }



## Usage:

In component template:

    <h1>{{ $lang('HELLO') }}</h1>


In component script:

    this.$lang('HELLO');
