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

## Sample language file:

en-IN.json
`
    {
    "HELLO": "Hello World."
    }

`

hi-IN.json
`
    {
    "HELLO": "नमस्कार."
    }

`

## Usage:

In component template:
`
    <h1>{{ $lang('HELLO') }}</h1>
`

In component script:
`
    this.$lang('HELLO');
`