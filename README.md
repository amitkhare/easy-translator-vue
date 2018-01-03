# easy-translator-vue
A simple vuejs plugin for multi language translation.

## Install
### with npm
    $ npm install easy-translator-vue --save
### with yarn
    $ yarn add easy-translator-vue
    
## import to vue:

    import Vue from 'vue'
    import Lang from "easy-translator-vue";


## config like so:

##### Import language modules:

    import en from "path/to/locales/en.js";
    import hi from "path/to/locales/hi.js";

##### Attach as Vue plugin

    Vue.use(Lang, {
        locale: "hi",
        fallbackLocale: "en",
        locales: { en, hi },
    });

## Sample language modules:

en.js

    export default {
        "HELLO": "Hello World.",
        "WELCOME" : "Hello %s, Welcome to %s page"
    }



hi.js

    export default {
        "HELLO": "नमस्कार.",
        "WELCOME" : "हेल्लो %s, %s पेज में आपका स्वागत है"
    }



## Usage:

In component template:

    <h1>{{ $lang('HELLO') }}</h1>
    <h2>{{ $lang('WELCOME', ["Amit", "Forum"]) }}</h2>


In component script:

    this.$lang('HELLO');
    this.$lang('WELCOME', ["अमित", "फोरम"])

## output:
### en

    <h1>Hello World</h1>
    <h2>Hello Amit, Welcome to Forum page.</h2>

### hi

    <h1>नमस्कार</h1>
    <h2>हेल्लो अमित, फोरम पेज में आपका स्वागत है</h2>

