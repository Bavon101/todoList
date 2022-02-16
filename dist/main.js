/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: rgb(252, 252, 243);\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.to-do-section {\r\n  background-color: white;\r\n  width: 65%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  transform: translate(-50%, -50%);\r\n  max-width: 950px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n}\r\n\r\n.refresh-btn,\r\n.task-btn,\r\n.delete-btn {\r\n  border: none;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n}\r\n\r\n.refresh-icon,\r\n.enter-key-icon,\r\n.more-icon {\r\n  color: gray;\r\n  font-size: 24px !important;\r\n}\r\n\r\n.enter-key-icon {\r\n  font-size: 16px !important;\r\n}\r\n\r\n.task-input {\r\n  border: none;\r\n  font-style: italic;\r\n  width: 95%;\r\n}\r\n\r\n.edit-input {\r\n  border: none;\r\n  width: 95%;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n*:focus {\r\n  border: none;\r\n  outline: none;\r\n  background-color: white;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: grab;\r\n}\r\n\r\n.check-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.check-box {\r\n  height: 20px;\r\n  width: 20px;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.padding-l-r {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.clear-btn {\r\n  text-align: center;\r\n  border: none;\r\n  width: 100%;\r\n  height: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hr-ignore-btm {\r\n  margin-bottom: 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n#to-do-list {\r\n  text-align: center;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


const task = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const form = document.getElementById('form');
const toDoList = document.getElementById('to-do-list');
const createDefault = () => {
  toDoList.innerHTML = 'There are no task available';
};

const updateEdit = (t = {}, refresh = false) => {
  task.edit(t.index, t.completed, t.description);
  if (refresh) {
    // eslint-disable-next-line no-use-before-define
    createToDoList();
  }
};

const removeTask = (id) => {
  task.delete(id);
  // eslint-disable-next-line no-use-before-define
  createToDoList();
};

const getEditField = (id) => {
  const t = task.tasks.filter((t) => t.id === id)[0];
  const container = document.getElementById(id);
  container.style.backgroundColor = 'rgb(252, 252, 243)';
  const checkContainer = document.createElement('div');
  checkContainer.classList.add('check-container');
  const checkBox = document.createElement('input');
  checkBox.classList.add('check-box');
  checkBox.setAttribute('type', 'checkbox');
  if (t.completed) {
    checkBox.setAttribute('checked', 'checked');
  }
  checkBox.addEventListener('change', (e) => {
    t.completed = e.currentTarget.checked;
    updateEdit(t, true);
  });
  checkContainer.appendChild(checkBox);
  const editForm = document.createElement('form');
  const editInput = document.createElement('input');
  editInput.classList.add('edit-input');
  editInput.style.backgroundColor = 'rgb(252, 252, 243)';
  editInput.value = t.description;
  editForm.appendChild(editInput);
  editInput.focus();
  editForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (editInput.value.length > 0) {
        t.description = editInput.value;
        updateEdit(t, true);
      } else {
        // eslint-disable-next-line no-alert
        alert('You cannot save an empty task.');
      }
    }
  });
  const enterIcon = document.createElement('span');
  enterIcon.classList.add('material-icons', 'enter-key-icon');
  enterIcon.innerHTML = 'keyboard_return';
  editForm.appendChild(enterIcon);
  checkContainer.appendChild(editForm);
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('material-icons', 'more-icon');
  deleteIcon.innerHTML = 'delete';
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.onclick = () => { removeTask(id); };
  container.replaceChildren();
  container.appendChild(checkContainer);
  container.appendChild(deleteBtn);
};
const createToDoList = () => {
  toDoList.replaceChildren();
  if (task.tasks.length === 0) {
    createDefault();
    return;
  }
  task.tasks.sort((a, b) => a.index - b.index);
  task.tasks.map((t) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container', 'padding-l-r');
    taskContainer.setAttribute('id', t.id);
    const checkContainer = document.createElement('div');
    checkContainer.classList.add('check-container');
    const checkBox = document.createElement('input');
    checkBox.classList.add('check-box');
    checkBox.setAttribute('type', 'checkbox');
    if (t.completed) {
      checkBox.setAttribute('checked', 'checked');
    }
    checkBox.addEventListener('change', (e) => {
      t.completed = e.currentTarget.checked;
      updateEdit(t, true);
    });
    checkContainer.appendChild(checkBox);
    const taskName = document.createElement('h5');
    taskName.innerHTML = t.description;
    checkContainer.appendChild(taskName);
    taskContainer.appendChild(checkContainer);
    const moreBtn = document.createElement('button');
    moreBtn.classList.add('task-btn');
    const moreIcon = document.createElement('i');
    moreIcon.classList.add('material-icons', 'more-icon');
    moreIcon.innerHTML = 'more_vert';
    moreBtn.onclick = () => { getEditField(t.id); };
    moreBtn.appendChild(moreIcon);
    taskContainer.appendChild(moreBtn);
    toDoList.appendChild(taskContainer);
    const divider = document.createElement('hr');
    if ((t.index - 1) === (task.tasks.length - 1)) {
      divider.classList.add('hr-ignore-btm');
    }
    toDoList.appendChild(divider);
    return toDoList;
  });
};
const addNew = () => {
  const description = document.getElementById('task-input').value;
  task.add(description);
  form.reset();
  createToDoList();
};
const getTasks = () => {
  if (localStorage.getItem('tasks')) {
    task.get();
    createToDoList();
  } else {
    createDefault();
  }
};

const init = () => {
  getTasks();
  document.getElementById('clear-btn').onclick = () => { task.clearCompleted(); createToDoList(); };
  document.getElementById('refresh-btn').onclick = () => { getTasks(); };
  form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addNew();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
class Tasks {
  tasks = [];

  add = (description) => {
    const task = {
      id: Date.now(),
      description,
      index: this.tasks.length + 1,
      completed: false,
    };
    this.tasks.push(task);
    this.saveTasks();
  };

  saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  };

  delete = (id) => {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.reIndex();
    this.saveTasks();
  };

  edit = (index, completed = false, description) => {
    this.tasks[index - 1].description = description;
    this.tasks[index - 1].index = index;
    this.tasks[index - 1].completed = completed;
    this.saveTasks();
  };

  get = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  };

  reIndex = () => {
    this.tasks.sort((a, b) => a.index - b.index);
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }
  }

  clearCompleted = () => {
    this.tasks = this.tasks.filter((t) => !t.completed);
    this.reIndex();
    this.saveTasks();
  }
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_view_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_modules_view_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;