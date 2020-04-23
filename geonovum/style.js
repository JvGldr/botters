<<<<<<< HEAD
/*jshint strict: true, browser:true, jquery: true*/
/*globals define*/
// Module w3c/style
// Inserts a link to the appropriate W3C style for the specification's maturity level.
// CONFIGURATION
//  - specStatus: the short code for the specification's maturity level or type (required)

import { createResourceHint, linkCSS, toKeyValuePairs } from "../core/utils";
import { pub, sub } from "../core/pubsubhub";
=======
// @ts-check
// Module geonovum/style
// Inserts a link to the appropriate Geonovum style for the specification's maturity level.
// CONFIGURATION
//  - specStatus: the short code for the specification's maturity level or type (required)

import { createResourceHint, linkCSS, toKeyValuePairs } from "../core/utils.js";
import { pub, sub } from "../core/pubsubhub.js";
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
export const name = "geonovum/style";
function attachFixupScript(doc, version) {
  const script = doc.createElement("script");
  script.addEventListener(
    "load",
<<<<<<< HEAD
    function() {
      if (window.location.hash) {
        window.location = window.location;
=======
    () => {
      if (window.location.hash) {
        window.location.href = window.location.hash;
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
      }
    },
    { once: true }
  );
  script.src = `https://www.w3.org/scripts/TR/${version}/fixup.js`;
  doc.body.appendChild(script);
}

<<<<<<< HEAD
// Make a best effort to attach meta viewport at the top of the head.
// Other plugins might subsequently push it down, but at least we start
// at the right place. When ReSpec exports the HTML, it again moves the
// meta viewport to the top of the head - so to make sure it's the first
// thing the browser sees. See js/ui/save-html.js.
=======
/**
 * Make a best effort to attach meta viewport at the top of the head.
 * Other plugins might subsequently push it down, but at least we start
 * at the right place. When ReSpec exports the HTML, it again moves the
 * meta viewport to the top of the head - so to make sure it's the first
 * thing the browser sees. See js/ui/save-html.js.
 */
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
function createMetaViewport() {
  const meta = document.createElement("meta");
  meta.name = "viewport";
  const contentProps = {
    width: "device-width",
    "initial-scale": "1",
    "shrink-to-fit": "no",
  };
<<<<<<< HEAD
  meta.content = toKeyValuePairs(contentProps).replace(/\"/g, "");
=======
  meta.content = toKeyValuePairs(contentProps).replace(/"/g, "");
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
  return meta;
}

function createStyle(css_name) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
<<<<<<< HEAD
  link.href = "https://tools.geostandaarden.nl/respec/style/{0}.css".replace(
    "{0}",
    css_name
  );
  link.classList.add("removeOnSave");
  return link;
}

// add favicon
const favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.type = "image/x-icon";
favicon.href =
"https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico";

// function createBaseStyle() {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = "https://www.w3.org/StyleSheets/TR/2016/base.css";
//   link.classList.add("removeOnSave");
//   return link;
// }

// function selectStyleVersion(styleVersion) {
//   let version = "";
//   switch (styleVersion) {
//     case null:
//     case true:
//       version = "2016";
//       break;
//     default:
//       if (styleVersion && !isNaN(styleVersion)) {
//         version = styleVersion.toString().trim();
//       }
//   }
//   return version;
// }

function createResourceHints() {
  const resourceHints = [
    {
      hint: "preconnect", // for W3C styles and scripts.
=======
  link.href = `https://tools.geostandaarden.nl/respec/style/${css_name}.css`;
  return link;
}

function createResourceHints() {
  const resourceHints = [
    {
      hint: "preconnect", // for W3C fixup.js
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
      href: "https://www.w3.org",
    },
    {
      hint: "preload", // all specs need it, and we attach it on end-all.
      href: "https://www.w3.org/scripts/TR/2016/fixup.js",
      as: "script",
    },
    {
<<<<<<< HEAD
      hint: "preload", // all specs include on base.css.
      href: "https://www.w3.org/StyleSheets/TR/2016/base.css",
      as: "style",
    },
    {
      hint: "preload", // all specs show the logo.
      href: "https://www.w3.org/StyleSheets/TR/2016/logos/W3C",
=======
      hint: "preconnect", // for Geonovum styles and scripts.
      href: "https://tools.geostandaarden.nl/",
    },
    {
      hint: "preload", // all Geonovum specs import base.css.
      href: "https://tools.geostandaarden.nl/respec/style/base.css",
      as: "style",
    },
    {
      hint: "preload", // all Geonovum specs show the logo.
      href: "https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg",
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
      as: "image",
    },
  ]
    .map(createResourceHint)
<<<<<<< HEAD
    .reduce(function(frag, link) {
=======
    .reduce((frag, link) => {
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
      frag.appendChild(link);
      return frag;
    }, document.createDocumentFragment());
  return resourceHints;
}

<<<<<<< HEAD



export function run(conf, doc, cb) {
  if (!conf.specStatus) {
    const warn = "`respecConfig.specStatus` missing. Defaulting to 'base'.";
=======
// Collect elements for insertion (document fragment)
const elements = createResourceHints();

// add favicon for Geonovum
const favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.type = "image/x-icon";
favicon.href =
  "https://tools.geostandaarden.nl/respec/style/logos/Geonovum.ico";
document.head.prepend(favicon);

if (!document.head.querySelector("meta[name=viewport]")) {
  // Make meta viewport the first element in the head.
  elements.prepend(createMetaViewport());
}

document.head.prepend(elements);

// export function run(conf, doc, cb) {
export function run(conf) {
  if (!conf.specStatus) {
    const warn = "`respecConfig.specStatus` missing. Defaulting to 'GN-BASIS'.";
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
    conf.specStatus = "GN-BASIS";
    pub("warn", warn);
  }

<<<<<<< HEAD
=======
  if (document.body.querySelector("figure.scalable")) {
    // Apply leaflet style if class scalable is present
    document.head.appendChild(createStyle("leaflet"));
    document.head.appendChild(createStyle("font-awesome"));
  }

>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
  let styleFile = "";

  // Figure out which style file to use.
  switch (conf.specStatus.toUpperCase()) {
    case "GN-WV":
      styleFile += "GN-WV.css";
      break;
    case "GN-CV":
      styleFile += "GN-CV.css";
      break;
    case "GN-VV":
      styleFile += "GN-VV.css";
      break;
    case "GN-DEF":
      styleFile += "GN-DEF.css";
      break;
    case "GN-BASIS":
      styleFile += "GN-BASIS.css";
      break;
    default:
      styleFile = "base.css";
  }

  if (!conf.noToc) {
    sub(
      "end-all",
<<<<<<< HEAD
      function() {
        attachFixupScript(doc, "2016");
=======
      () => {
        attachFixupScript(document, "2016");
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
      },
      { once: true }
    );
  }
  const finalStyleURL = `https://tools.geostandaarden.nl/respec/style/${styleFile}`;
<<<<<<< HEAD
  linkCSS(doc, finalStyleURL);
  const head = doc.querySelector("head");
  head.appendChild(favicon);


  // Collect elements for insertion (document fragment)
  const elements = createResourceHints();

  if (document.body.querySelector("figure.scalable")) {
    // Apply leaflet style if class scalable is present
    elements.appendChild(createStyle("leaflet"));
    elements.appendChild(createStyle("font-awesome"));
  }

  // Opportunistically apply base style
  // elements.appendChild(createBaseStyle());
  if (!document.head.querySelector("meta[name=viewport]")) {
    // Make meta viewport the first element in the head.
    elements.insertBefore(createMetaViewport(), elements.firstChild);
  }

  document.head.insertBefore(elements, document.head.firstChild);

  cb();
=======
  linkCSS(document, finalStyleURL);
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
}
