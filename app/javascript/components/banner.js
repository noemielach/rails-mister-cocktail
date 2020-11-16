import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Cocktails.","Lockdown.","Locktails."],
    typeSpeed: 200,
    loop: false
  });
}

export { loadDynamicBannerText };
