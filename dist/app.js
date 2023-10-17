// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2ly9l":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
//
// Active class behaviour
//
// Function to add the span element with styles
function addSpanToActiveRadio(radioElement) {
    const spanElement = document.createElement("span");
    spanElement.innerHTML = "\u2022";
    spanElement.style.position = "absolute";
    spanElement.style.left = "-0.75rem";
    spanElement.style.color = "#fa4338";
    spanElement.classList.add("active-dot"); // Add a custom class for the span
    radioElement.appendChild(spanElement);
}
// Function to remove the span element
function removeSpanFromRadio(radioElement) {
    const spanElement = radioElement.querySelector(".active-dot");
    if (spanElement) radioElement.removeChild(spanElement);
}
// Function to remove all spans from all radio elements
function removeAllSpansFromAllRadios() {
    const integrationRadioElements = document.querySelectorAll(".integration-radio");
    integrationRadioElements.forEach((element)=>{
        removeSpanFromRadio(element);
    });
}
// document.addEventListener("DOMContentLoaded", function () {
//     // // Target element with class .integration-radio
//     // const integrationRadioElements = document.querySelectorAll(".integration-radio");
//     // // Initial check for .is-active class upon page load
//     // integrationRadioElements.forEach(function (element) {
//     //     if (element.classList.contains("is-active")) {
//     //         addSpanToActiveRadio(element);
//     //     }
//     // });
//     // Create a MutationObserver to watch for changes
//     // const observer = new MutationObserver(function (mutationsList) {
//     //     mutationsList.forEach(function (mutation) {
//     //         // Check if the .integration-radio element received or lost the .is-active class
//     //         if (mutation.target.classList.contains("is-active")) {
//     //             // Remove any existing dots from all radio buttons
//     //             removeAllSpansFromAllRadios();
//     //             // Add the span element with styles
//     //             addSpanToActiveRadio(mutation.target);
//     //         }
//     //     });
//     // });
//     // // Configure and start the MutationObserver for each .integration-radio element
//     // integrationRadioElements.forEach(function (element) {
//     //     observer.observe(element, { attributes: true, attributeFilter: ["class"] }); // adding attributeFilter to specifically watch for class changes
//     // });
//     const integrationsListObserver = new MutationObserver(function (mutationsList) {
//         mutationsList.forEach(function (mutation) {
//             if (mutation.type === 'childList') {
//                 updateResultsCount();  // Update the count when a direct child is added or removed from #integrations-list
//             }
//         });
//     });
//     const integrationsList = document.getElementById('integrations-list');
//     if (integrationsList) {
//         // Start observing #integrations-list for adding/removing direct children
//         integrationsListObserver.observe(integrationsList, { childList: true });
//     }
// });
//
// Create link for "See all" in the .integrations-collections-landing_wrapper and add uery parameter to URL
//
function createCollectionsLandingLink() {
    // Get all elements with class "integrations-collections-landing_wrapper"
    var sectionWrappers = document.querySelectorAll(".integrations-collections-landing_wrapper");
    // Loop through each section wrapper
    sectionWrappers.forEach(function(wrapper) {
        // Get the h2 element and link within the current section wrapper
        var titleElement = wrapper.querySelector(".integrations-collections-landing_title-wrapper h2");
        console.log(titleElement);
        var addQueryLink = wrapper.querySelector(".integrations-collections-landing_title-wrapper a");
        console.log(addQueryLink);
        // Extract the title text and convert it to the query value
        var titleText = titleElement.textContent;
        var queryValue = titleText.replace(/ /g, "+");
        // Add an event listener to the link to update the URL with the query when clicked
        addQueryLink.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default link behavior
            // Update the URL with the "?collections=" query
            var newURL = window.location.href.split("?")[0] + "?collections=" + queryValue;
            history.pushState({}, "", newURL);
            // Optionally, you can reload the page to reflect the updated URL
            window.location.reload();
        });
    });
}
function createSpecialCollectionsLandingLink() {
    let specialCollections = document.querySelectorAll(".collections-special-landing_left");
    specialCollections.forEach(function(collection) {
        let buttonLink = collection.querySelector("a");
        let collectionNanme = collection.querySelector(".collections-special-landing_collection-name");
        let collectionNameText = collectionNanme.textContent;
        var queryValue = collectionNameText.replace(/ /g, "+");
        buttonLink.addEventListener("click", function(e) {
            e.preventDefault();
            // Update the URL with the "?collections=" query
            var newURL = window.location.href.split("?")[0] + "?collections=" + queryValue;
            history.pushState({}, "", newURL);
            window.location.reload();
        });
    });
}
// document.addEventListener("DOMContentLoaded", function () {
//     // Get all elements with class "integrations-collections-landing_wrapper"
//     var sectionWrappers = document.querySelectorAll(".integrations-collections-landing_wrapper");
//     // Loop through each section wrapper
//     sectionWrappers.forEach(function (wrapper) {
//         // Get the h2 element and link within the current section wrapper
//         var titleElement = wrapper.querySelector(".integrations-collections-landing_title-wrapper h2");
//         console.log(titleElement);
//         var addQueryLink = wrapper.querySelector(".integrations-collections-landing_title-wrapper a");
//         console.log(addQueryLink);
//         // Extract the title text and convert it to the query value
//         var titleText = titleElement.textContent;
//         var queryValue = titleText.replace(/ /g, "+");
//         // Add an event listener to the link to update the URL with the query when clicked
//         addQueryLink.addEventListener("click", function (e) {
//             e.preventDefault(); // Prevent the default link behavior
//             // Update the URL with the "?collections=" query
//             var newURL = window.location.href.split("?")[0] + "?collections=" + queryValue;
//             history.pushState({}, "", newURL);
//             // Optionally, you can reload the page to reflect the updated URL
//             window.location.reload();
//         });
//     });
//     let specialCollections = document.querySelectorAll(".collections-special-landing_left")
//     specialCollections.forEach(function (collection) {
//         let buttonLink = collection.querySelector("a");
//         let collectionNanme = collection.querySelector(".collections-special-landing_collection-name");
//         let collectionNameText = collectionNanme.textContent;
//         var queryValue = collectionNameText.replace(/ /g, "+");
//         buttonLink.addEventListener("click", function (e) {
//             e.preventDefault();
//             // Update the URL with the "?collections=" query
//             var newURL = window.location.href.split("?")[0] + "?collections=" + queryValue;
//             history.pushState({}, "", newURL);
//             window.location.reload();
//         });
//     });
// });
function updateResultsCount() {
    // Get the parent div by its ID
    let integrationsList = document.getElementById("integrations-list");
    // Count the number of direct children with class .integrations_item
    let itemCount = integrationsList.querySelectorAll(":scope > .integrations_item").length;
    // Get the results count div
    let resultsCountDiv = document.getElementById("results-count");
    // Display the count
    resultsCountDiv.textContent = itemCount;
    // For debugging purposes
    // console.log('Item count:', itemCount);
    // console.log('Integrations List:', integrationsList);
    let emptyStateDiv = document.getElementById("empty-state");
    if (itemCount > 0) emptyStateDiv.style.display = "none";
    else emptyStateDiv.style.display = "block";
}
// function delayedUpdateResultsCount() {
//     setTimeout(() => {
//         updateResultsCount();
//     }, 2000); // wait for 2 seconds
// }
window.fsAttributes = window.fsAttributes || [];
// Flags to check if the scripts have loaded
let cmsfilterLoaded = false;
let cmsnestLoaded = false;
// Common function to check if both scripts are loaded, then run your logic
function runMyScript() {
    if (cmsfilterLoaded && cmsnestLoaded) {
        console.log("Both cmsfilter and cmsnest have loaded.");
        createCollectionsLandingLink();
        createSpecialCollectionsLandingLink();
        // Get the input field element by its ID
        var inputField = document.getElementById("search-input"); // Replace with the actual ID of your input field
        // Get the "results-count_wrapper" div by its ID
        var resultsCountWrapper = document.getElementById("results-count_wrapper");
        // Get the element where you want to display the input text
        var resultsCountTextSearchInput = document.getElementById("results-count-text_search-input");
        // Get the element where you want to display the categories or collections value
        var resultsCountTextCollection = document.getElementById("results-count-text_collection");
        // Get all checkboxes inside the integration-feature_filters div
        var checkboxes = document.querySelectorAll(".integration-feature_filters input[type='checkbox']");
        function anyCheckboxChecked() {
            // Check if any checkbox is checked
            for(var i = 0; i < checkboxes.length; i++){
                if (checkboxes[i].checked) return true;
            }
            return false;
        }
        function handleCheckboxChange() {
            toggleResultsCount(); // Call the toggle function when a checkbox is changed
        }
        // Add event listeners to all checkboxes
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener("change", handleCheckboxChange);
        });
        // Function to show or hide the "results-count_wrapper" div based on input field value
        function toggleResultsCount() {
            var inputText = inputField.value.trim(); // Get the trimmed input field value
            if (inputText.length > 0) resultsCountTextSearchInput.textContent = 'for "' + inputText + '"'; // Display the input text surrounded by quotation marks
            else resultsCountTextSearchInput.textContent = ""; // Clear the text if nothing is typed in
            var urlParams = new URLSearchParams(window.location.search);
            var integrationsValue = urlParams.get("integrations");
            var collectionsValue = urlParams.get("collections");
            var categoriesValue = urlParams.get("categories");
            if (integrationsValue !== null && inputText !== "" || anyCheckboxChecked()) resultsCountWrapper.style.display = "block"; // Show the "results-count_wrapper" div when conditions are met
            else resultsCountWrapper.style.display = "none"; // Hide the "results-count_wrapper" div otherwise
            if (collectionsValue !== null) // Replace "+" with " " and display the collections value within quotation marks
            resultsCountTextCollection.textContent = 'in "' + collectionsValue.replace(/\+/g, " ") + '"';
            else if (categoriesValue !== null) // Replace "+" with " " and display the categories value within quotation marks
            resultsCountTextCollection.textContent = 'in "' + categoriesValue.replace(/\+/g, " ") + '"';
            else // If neither parameter is present, clear the text in the div
            resultsCountTextCollection.textContent = "";
        }
        // Target element with class .integration-radio
        const integrationRadioElements = document.querySelectorAll(".integration-radio");
        // Initial check for .is-active class upon page load
        integrationRadioElements.forEach(function(element) {
            if (element.classList.contains("is-active")) addSpanToActiveRadio(element);
        });
        document.getElementById("radio").addEventListener("change", function() {
            if (this.checked) removeAllSpansFromAllRadios();
        });
        // const observer = new MutationObserver(function (mutationsList) {
        //     mutationsList.forEach(function (mutation) {
        //         // Check if the .integration-radio element received or lost the .is-active class
        //         if (mutation.target.classList.contains("is-active")) {
        //             // Remove any existing dots from all radio buttons
        //             removeAllSpansFromAllRadios();
        //             // Add the span element with styles
        //             addSpanToActiveRadio(mutation.target);
        //         }
        //     });
        // });
        const observer = new MutationObserver(function(mutationsList) {
            mutationsList.forEach(function(mutation) {
                if (mutation.target.classList.contains("is-active")) {
                    // Check if the mutation target is the "All collections" label
                    if (mutation.target.id === "all-collections") return; // If it is, we just skip
                    removeAllSpansFromAllRadios();
                    addSpanToActiveRadio(mutation.target);
                }
            });
        });
        // Configure and start the MutationObserver for each .integration-radio element
        integrationRadioElements.forEach(function(element) {
            observer.observe(element, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            }); // adding attributeFilter to specifically watch for class changes
        });
        // Add an event listener to the input field to detect when someone types or deletes text
        inputField.addEventListener("input", toggleResultsCount);
        // Trigger the function on page load in case there are existing query parameters or initial input
        toggleResultsCount();
        window.addEventListener("popstate", toggleResultsCount);
        // Update the results count
        // updateResultsCount();
        const integrationsListObserver = new MutationObserver(function(mutationsList) {
            mutationsList.forEach(function(mutation) {
                if (mutation.type === "childList") updateResultsCount(); // Update the count when a direct child is added or removed from #integrations-list
            });
        });
        const integrationsList = document.getElementById("integrations-list");
        if (integrationsList) // Start observing #integrations-list for adding/removing direct children
        integrationsListObserver.observe(integrationsList, {
            childList: true
        });
    }
}
// Callback for cmsfilter
window.fsAttributes.push([
    "cmsfilter",
    (listInstances)=>{
        console.log("cmsfilter Successfully loaded!");
        window.fsAttributes.cmsfilter.init();
        cmsfilterLoaded = true;
        runMyScript();
    }
]);
// Callback for cmsnest
window.fsAttributes.push([
    "cmsnest",
    (listInstances)=>{
        console.log("cmsnest Successfully loaded!");
        // window.fsAttributes.cmsnest.init();
        cmsnestLoaded = true;
        runMyScript();
    }
]);

},{}]},["2ly9l","igcvL"], "igcvL", "parcelRequire1b99")

//# sourceMappingURL=app.js.map
