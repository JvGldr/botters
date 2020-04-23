<<<<<<< HEAD
=======
// @ts-check
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
/**
 * Sets the defaults for Geonovum documents
 */
export const name = "geonovum/defaults";
<<<<<<< HEAD
import { rule as checkPunctuation } from "../core/linter-rules/check-punctuation";
import linter from "../core/linter";
import { rule as localRefsExist } from "../core/linter-rules/local-refs-exist";
import { rule as noHeadinglessSectionsRule } from "../core/linter-rules/no-headingless-sections";
import { rule as noHttpPropsRule } from "../core/linter-rules/no-http-props";
import { rule as privsecSectionRule } from "./linter-rules/privsec-section";


linter.register(noHttpPropsRule, privsecSectionRule, noHeadinglessSectionsRule, checkPunctuation,
localRefsExist);

// const cgbg = new Set(["BG-DRAFT", "BG-FINAL", "CG-DRAFT", "CG-FINAL"]);
=======
import { coreDefaults } from "../core/defaults.js";
import linter from "../core/linter.js";
import { rule as privsecSectionRule } from "../core/linter-rules/privsec-section.js";

linter.register(privsecSectionRule);

>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
const licenses = new Map([
  [
    "cc0",
    {
      name: "Creative Commons 0 Public Domain Dedication",
      short: "CC0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
<<<<<<< HEAD
      image: "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg",
=======
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
    },
  ],
  [
    "cc-by",
    {
      name: "Creative Commons Attribution 4.0 International Public License",
      short: "CC-BY",
      url: "https://creativecommons.org/licenses/by/4.0/legalcode",
<<<<<<< HEAD
      image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg",
=======
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
    },
  ],
  [
    "cc-by-nd",
    {
<<<<<<< HEAD
      name: "Creative Commons Attribution-NoDerivatives 4.0 International Public License",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
      image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg",
    },
  ]
=======
      name:
        "Creative Commons Attribution-NoDerivatives 4.0 International Public License",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
    },
  ],
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
]);

const geonovumDefaults = {
  lint: {
<<<<<<< HEAD
    "no-headingless-sections": true,
    "privsec-section": true,
    "no-http-props": true,
=======
    "privsec-section": true,
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
  },
  doJsonLd: true,
  license: "cc-by",
  specStatus: "GN-BASIS",
<<<<<<< HEAD
  logos: [{
    src: "https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg",
    alt: "Geonovum",
    id: "Geonovum",
    height: 67,
    width: 132,
    url: "https://www.geonovum.nl/"
  }]
=======
  logos: [
    {
      src: "https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg",
      alt: "Geonovum",
      id: "Geonovum",
      height: 67,
      width: 132,
      url: "https://www.geonovum.nl/",
    },
  ],
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
};

function computeProps(conf) {
  return {
    isCCBY: conf.license === "cc-by",
    licenseInfo: licenses.get(conf.license),
    isBasic: conf.specStatus === "GN-BASIS",
    isRegular: conf.specStatus === "GN-BASIS",
  };
}

export function run(conf) {
  // assign the defaults
<<<<<<< HEAD
  Object.assign(conf, { ...geonovumDefaults, ...conf });
  //computed properties
=======
  const lint =
    conf.lint === false
      ? false
      : {
          ...coreDefaults.lint,
          ...geonovumDefaults.lint,
          ...conf.lint,
        };
  Object.assign(conf, {
    ...coreDefaults,
    ...geonovumDefaults,
    ...conf,
    lint,
  });
  // computed properties
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
  Object.assign(conf, computeProps(conf));
}
