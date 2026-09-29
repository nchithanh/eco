/** Inline boot scripts — injected via `BootScripts` + `useServerInsertedHTML` (outside React tree). */

export const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem("kuct-theme");var ok=["violet","slate"];if(t&&ok.indexOf(t)>=0)document.documentElement.setAttribute("data-theme",t);else document.documentElement.setAttribute("data-theme","violet");}catch(e){document.documentElement.setAttribute("data-theme","violet");}})();`;

export const LOCALE_BOOT_SCRIPT = `(function(){var d=document.documentElement;var ok=["vi","en","ja"];var locale="vi";try{var stored=localStorage.getItem("kuct-locale");if(stored&&ok.indexOf(stored)>=0)locale=stored;}catch(e){}d.lang=locale;d.setAttribute("data-locale",locale);if(locale!=="vi"){d.setAttribute("data-locale-pending","");var s=document.createElement("style");s.id="kuct-locale-boot";s.textContent="html[data-locale-pending],html[data-locale-pending] body{visibility:hidden!important}";document.head.appendChild(s);}})();`;
