import path from "path";
import sprintf from "sprintf-js";

const Lang = {
  options: {
    locales: null,
    locale: "en",
    fallbackLocale: "en",
    rootLocale: "en"
  },

  setOptions(options) {
    if (options.locales) this.options.locales = options.locales;
    if (options.locale) this.options.rootLocale = options.locale;
    if (options.fallbackLocale)
      this.options.fallbackLocale = options.fallbackLocale;
  },

  lang(key) {
    let str = this.formatString(key);
    if (this.options.locales[this.options.locale][key]) {
      str = this.options.locales[this.options.locale][key];
    } else if (this.options.locales[this.options.fallbackLocale][key]) {
      str = this.options.locales[this.options.fallbackLocale][key];
    }
    return str;
  },

  langWithReplace(key, replacements = [], translateReplacements = true) {
    const mainstring = this.lang(key);

    if (replacements && translateReplacements) {
      replacements = replacements.map(x => {
        return this.lang(x.toUpperCase());
      });
    }

    return vsprintf(mainstring, replacements);
  },

  translate(key, replacements = null, translateReplacements = true) {
    key = key.toUpperCase();
    return this.langWithReplace(key, replacements, translateReplacements);
  },
  formatString(key) {
    var key = key.toLowerCase();
    key = key.replace("_", " ");
    key = key.replace("-", " ");
    key = key.charAt(0).toUpperCase() + key.slice(1);
    return key;
  },

  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    this.setOptions(options);

    Vue.prototype.$lang = (
      key,
      replacements = null,
      translateReplacements = true,
      setLang = false
    ) => {
      if (setLang) {
        this.options.locale = setLang;
      } else {
        this.options.locale = this.options.rootLocale;
      }

      return this.translate(key, replacements, translateReplacements);
    };

    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      // Anything added to a mixin will be injected into all components.
      // In this case, the mounted() method runs when the component is added to the DOM.
      mounted() {}
    });
  }
};

export default Lang;

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(MyPlugin);
}
