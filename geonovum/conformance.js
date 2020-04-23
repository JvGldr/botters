<<<<<<< HEAD
// Module w3c/conformance
// Handle the conformance section properly.
import confoTmpl from "./templates/conformance";
import { pub } from "../core/pubsubhub";

export const name = "geonovum/conformance";

export function run(conf, doc, cb) {
  var $confo = $("#conformance");
  if ($confo.length) $confo.prepend(confoTmpl(conf).childNodes);
  // Added message for legacy compat with Aria specs
  // See https://github.com/w3c/respec/issues/793
  pub("end", "geonovum/conformance");
  cb();
=======
// @ts-check
// Module geonovum/conformance
// Handle the conformance section properly.
// based on W3C conformance, but because Geonovum has different requirements, have a separate module
import { hyperHTML as html } from "../core/import-maps.js";
export const name = "geonovum/conformance";

/**
 * @param {Element} conformance
 */
function processConformance(conformance) {
  const content = html`
    <h2>Conformiteit</h2>
    <p>
      Naast onderdelen die als niet normatief gemarkeerd zijn, zijn ook alle
      diagrammen, voorbeelden, en noten in dit document niet normatief. Verder
      is alles in dit document normatief.
    </p>
    <p>
      Informatief en normatief.
    </p>
  `;
  conformance.prepend(...content.childNodes);
}

export function run() {
  const conformance = document.querySelector("section#conformance");
  if (conformance) {
    processConformance(conformance);
  }
>>>>>>> 138c0c0bd379e3a50aa5295cfe0a06420b3008ca
}
