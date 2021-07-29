// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var string = "\n.skin {\n  position: relative;\n  height: 100vh;\n  background-color: #ffe600;\n}\nheader {\n  position: relative;\n  top: -90px;\n}\n/* \u9F3B\u5B50\u8BBE\u8BA1 */\n.nose {\n  position: absolute;\n  top: 140px;\n  left: 50%;\n  margin-left: -14px;\n  border: 14px solid red;\n  border-color: #000 transparent red transparent;\n  border-bottom: none;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  z-index: 6;\n}\n/* \u9F3B\u5B50\u9F20\u6807\u79FB\u5165\u52A8\u753B */\n@keyframes nosewave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  animation: nosewave 300ms linear infinite;\n  transform-origin: center bottom;\n}\n/* \u773C\u775B */\n.eye {\n  width: 56px;\n  height: 56px;\n  background-color: #2e2e2e;\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  margin-left: -28px;\n  border-radius: 50%;\n  border: 3px solid #000;\n}\n.eye.right {\n  transform: translate(110px);\n}\n.eye.left {\n  transform: translate(-110px);\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  width: 22px;\n  height: 22px;\n  background-color: #fff;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 1px;\n  left: 8px;\n  animation: eyeMove 3s infinite;\n}\n@keyframes eyeMove {\n  0%,\n  100% {\n    top: 1px;\n    left: 8px;\n  }\n  30%,\n  70% {\n    top: 5px;\n    left: 17px;\n  }\n  40% {\n    top: 8px;\n    left: 21px;\n  }\n  50% {\n    top: 12px;\n    left: 13px;\n  }\n  80%,\n  90% {\n    top: 17px;\n    left: 17px;\n  }\n}\n/* \u5212\u5B9A\u5634\u90E8\u5927\u5C0F */\n.mouth {\n  position: relative;\n  width: 180px;\n  height: 220px;\n  left: 50%;\n  top: 180px;\n  margin-left: -90px;\n  /* border: 1px solid red; */\n}\n/* \u8BBE\u8BA1\u4E0A\u65B9\u4E24\u8FB9\u7684\u80E1\u5B50 */\n.mouth:after {\n  content: \"\";\n  display: block;\n  width: 100px;\n  height: 30px;\n  background: #ffe600;\n  border-bottom: 3px solid rgb(2, 0, 1);\n  border-left: 3px solid rgb(2, 0, 1);\n  position: absolute;\n  top: -15px;\n  left: -10px;\n  border-bottom-left-radius: 340px 180px;\n  transform: rotate(-24deg);\n  z-index: 3;\n}\n.mouth:before {\n  content: \"\";\n  display: block;\n  width: 100px;\n  height: 30px;\n  background: #ffe600;\n  border-bottom: 3px solid rgb(2, 0, 1);\n  border-right: 3px solid rgb(2, 0, 1);\n  position: absolute;\n  top: -15px;\n  right: -10px;\n  border-bottom-right-radius: 340px 180px;\n  transform: rotate(24deg);\n  z-index: 3;\n}\n/* \u5634\u90E8\u8BBE\u8BA1 */\n.mouth_main {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  width: 100px;\n  height: 160px;\n  border: 3px solid rgb(2, 0, 1);\n  margin-left: -50px;\n  border-radius: 0 0 50px 50px / 0 0 160px 160px;\n  background-color: rgb(167, 16, 7);\n  overflow: hidden;\n  animation: mouthMove 3s infinite;\n}\n@keyframes mouthMove {\n  0%,\n  46%,\n  54%,\n  100% {\n    height: 160px;\n  }\n  50% {\n    height: 20px;\n  }\n}\n/* \u8BBE\u8BA1\u820C\u5934 */\n.mouth_main .tongue {\n  width: 100px;\n  height: 160px;\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  margin-left: -50px;\n  border-radius: 100px;\n  background-color: rgb(255, 91, 93);\n}\n/* \u8138\u90E8\u8BBE\u8BA1 */\n.face {\n  border: 2px solid #000;\n  background-color: rgb(254, 24, 0);\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 210px;\n  left: 50%;\n  margin-left: -40px;\n  border-radius: 50%;\n}\n.face.left {\n  transform: translateX(-150px);\n}\n.face.right {\n  transform: translateX(150px);\n}\n/* \u9F20\u6807\u79FB\u5165\u65F6\u7684\u95EA\u7535\u7279\u6548 */\n.face img {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n}\n.facex:hover img {\n  display: block;\n}\n/* \u7CBE\u7075\u7403 */\nbody .box {\n  width: 82px;\n  height: 82px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  position: relative;\n  box-shadow: 0 0 5px rgba(255, 255, 255, 0.9);\n  left: 50%;\n  top: 220px;\n  margin-left: -41px;\n  animation: box-rotate 4s ease-in-out infinite alternate;\n}\n\n.box .box_main {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgb(236, 2, 3);\n  border: 1px solid #333;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  overflow: hidden;\n}\n.box .box_main:before {\n  content: \"\";\n  display: block;\n  width: 80px;\n  height: 40px;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.box .box_main:after {\n  content: \"\";\n  display: block;\n  width: 80px;\n  height: 12px;\n  background: rgb(59, 53, 67);\n  position: absolute;\n  top: 50%;\n  left: 0;\n  margin-top: -6px;\n}\n\n.box .box_main .box_circle {\n  width: 24px;\n  height: 24px;\n  border: 8px solid rgb(59, 53, 67);\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -13px;\n  margin-top: -12px;\n  z-index: 5;\n}\n.box .box_main .box_circle:after {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: 8px;\n  border: 1px solid rgb(59, 53, 67);\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -4px;\n  margin-top: -4px;\n  animation: bg_change 3s infinite;\n  z-index: 6;\n}\n@keyframes bg_change {\n  0%,\n  40%,\n  60%,\n  90%,\n  100% {\n    background: none;\n  }\n  50% {\n    background: rgb(236, 2, 3);\n  }\n}\n@keyframes box-rotate {\n  0%,\n  90%,\n  100% {\n    transform: rotate(0deg);\n  }\n  40%,\n  50% {\n    transform: rotate(360deg);\n    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.9);\n  }\n}\n.arm_left,\n.arm_right {\n  width: 100px;\n  height: 160px;\n  background-color: #ffe600;\n  position: absolute;\n  top: 350px;\n  left: 50%;\n  margin-left: -50px;\n  border: 4px solid #000;\n  border-bottom-left-radius: 40% 90%;\n  border-bottom-right-radius: 40% 90%;\n  border-top-color: #ffe600;\n}\n.arm_left {\n  transform: translate(-120px) rotate(-45deg);\n}\n.arm_right {\n  transform: translate(120px) rotate(45deg);\n}\n\n  \n"; // 中文最好加注释，否则会影响css

var string2 = '';
var n = 0;

var step = function step() {
  setTimeout(function () {
    if (string[n] === '\n') {
      //如果这个字符为回车
      string2 = string2 + '<br>';
    } else if (string[n] === ' ') {
      string2 += "&nbsp;";
    } else {
      //如果这个字符不是回车
      string2 = string2 + string[n];
    }

    demo.innerHTML = string2;
    demo2.innerHTML = string.substring(0, n); // 这句不要用string2，因为里面有html样式，不能出现在css中

    window.scrollTo(0, 9999);
    demo.scrollTo(0, 99999); // scrollTo(x,y)
    //写一句代码就滚动一下滚动条

    if (n < string.length - 1) {
      n = n + 1;
      step();
    } else {}
  }, 0); //   let id = setTimeout(() => {
  //     x()
  //   }, 0)
  //   const x = () => {
  //     if (string[n] === '\n') {
  //       //如果这个字符为回车
  //       string2 = string2 + '<br>';
  //     } else if (string[n] === ' ') {
  //       string2 += "&nbsp;";
  //     } else {
  //       //如果这个字符不是回车
  //       string2 = string2 + string[n];
  //     }
  //     demo.innerHTML = string2;
  //     demo2.innerHTML = string.substring(0, n);
  //     // 这句不要用string2，因为里面有html样式，不能出现在css中
  //     window.scrollTo(0, 9999);
  //     demo.scrollTo(0, 99999);
  //     // scrollTo(x,y)
  //     //写一句代码就滚动一下滚动条
  //     if (n < string.length - 1) {
  //       n = n + 1
  //       step()
  //     } else { }
  //   }
  //   var btnPause = document.querySelector('#btnPause');
  //   btnPause.addEventListener('click', function () {
  //     window.clearTimeout(id)
  //   })
  //   var btnPause = document.querySelector('#btnPlay');
  //   btnPlay.addEventListener('click', function () {
  //     let id = setTimeout(() => {
  //       x()
  //     }, 0)
  //   })
  // }
};

step();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58349" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map