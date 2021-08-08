/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/ajax.js":
/*!******************************!*\
  !*** ./resources/js/ajax.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func.js */ "./resources/js/func.js");

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelectorAll("form:not([action=\"/login\"])");
  form.forEach(function (event) {
    var request = event.action;
    if (event.querySelector('.form-box__input-text--patents')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changedNamePatent"])(event, request);
    if (event.querySelector('.form-box__textarea--about-us')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changedTextAboutUs"])(event, request);
    if (event.querySelector('.development__input-text, .form-box__input-text--article')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changedNameAndDescDev"])(event, request);
    if (event.querySelector('.dropdown__list--change-category')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changeCategory"])(event, request);
    if (event.querySelector('button')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["requestBtn"])(event, request);
  });
});

/***/ }),

/***/ "./resources/js/func.js":
/*!******************************!*\
  !*** ./resources/js/func.js ***!
  \******************************/
/*! exports provided: uploadFiles, lazyLoadImage, animateEmergence, forTheEntireWindow, deleteImage, rotateCategory, hamburger, textEditor, changeImage, sortCategory, upButton, dragAndDrop, patent_item_add, development_item_add, development_images_add, category_add, article_add, sendRequest, changedNamePatent, changedTextAboutUs, change_main_page_inf, change_contacts, changedNameAndDescDev, changeCategory, response, requestBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadImage", function() { return lazyLoadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateEmergence", function() { return animateEmergence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forTheEntireWindow", function() { return forTheEntireWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateCategory", function() { return rotateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textEditor", function() { return textEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeImage", function() { return changeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCategory", function() { return sortCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upButton", function() { return upButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragAndDrop", function() { return dragAndDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patent_item_add", function() { return patent_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_item_add", function() { return development_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_images_add", function() { return development_images_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category_add", function() { return category_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article_add", function() { return article_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNamePatent", function() { return changedNamePatent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedTextAboutUs", function() { return changedTextAboutUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_main_page_inf", function() { return change_main_page_inf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_contacts", function() { return change_contacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNameAndDescDev", function() { return changedNameAndDescDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCategory", function() { return changeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "response", function() { return response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBtn", function() { return requestBtn; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var closeSvg = "\n\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t</path>\n\t</svg>\n";
var func = {
  uploadFiles: function uploadFiles() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var forms = document.querySelectorAll("".concat(target, "[enctype=\"multipart/form-data\"]"));
    forms.forEach(function (form) {
      var buttons = form.querySelectorAll('[type="button"]');
      buttons.forEach(function (element) {
        element.addEventListener('click', function (event) {
          var files = [];
          var btn_img = event.target;
          var input_img = btn_img.parentElement.querySelector('[type="file"]');
          input_img.value = '';
          input_img.click();

          var change = function change(event) {
            var preview;

            if (!btn_img.parentElement.querySelector('.preview')) {
              preview = document.createElement("div");
              preview.className = 'preview';
            } else preview = btn_img.parentElement.querySelector('.preview');

            btn_img.insertAdjacentElement("afterend", preview);
            files = Array.from(event.target.files);
            preview.textContent = '';
            files.forEach(function (file) {
              if (!file.type.match("image")) return;
              var reader = new FileReader();

              reader.onload = function (event) {
                var src = event.target.result;
                preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" data-name=\"".concat(file.name, "\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"));
              };

              reader.readAsDataURL(file);
            });
            input_img.removeEventListener("change", change);

            var remove = function remove(event) {
              if (!event.target.dataset.name) return;
              var name = event.target.dataset.name;
              files = files.filter(function (file) {
                return file.name !== name;
              });
              var block = document.querySelector("[data-name=\"".concat(name, "\"]")).closest('.preview__image');
              block.classList.add('removing');

              if (block.parentElement.childElementCount == 1) {
                event.target.closest('.form-box').querySelector('[type="file"]').value = '';
                var preview_el = block.parentElement;
                block.addEventListener('transitionend', function () {
                  return block.remove();
                });
                setTimeout(function () {
                  return preview_el.remove();
                }, 300);
              } else block.addEventListener('transitionend', function () {
                return block.remove();
              });
            };

            preview.addEventListener('click', remove);
          };

          input_img.addEventListener('change', change);

          var focus = function focus() {
            setTimeout(function () {
              input_img.removeEventListener('change', change);
              window.removeEventListener('focus', focus);
            }, 100);
          };

          window.addEventListener('focus', focus);
        });
      });
    });
  },
  dragAndDrop: function dragAndDrop() {
    var imageForUpload = [];
    var types = ['image/'];
    var dragAndDrop = document.querySelectorAll('.dragdrop');
    dragAndDrop.forEach(function (element) {
      element.addEventListener('dragenter', function (event) {
        event.preventDefault();
        element.classList.add('dragdrop--active');
      });
      element.addEventListener('dragleave', function (event) {
        event.preventDefault();
        element.classList.remove('dragdrop--active');
      });
      element.addEventListener('dragover', function (event) {
        event.preventDefault();
      });
      element.addEventListener('drop', function (event) {
        event.preventDefault();
        var multipleImage = event.target.querySelector('[type="file"]').multiple;
        imageForUpload = [];
        var files = event.dataTransfer.files;
        var image = false;

        for (var keyType in files) {
          var fileType = files[keyType].type;

          if (!fileType || !multipleImage && image) {
            continue;
          }

          image = true;

          for (var _i = 0, _Object$entries = Object.entries(types); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (!fileType.includes(value)) {
              continue;
            }

            imageForUpload.push(files[keyType]);
          }
        }

        element.classList.remove('dragdrop--active');
        dragAndDrop.forEach(function (element) {
          return element.classList.remove('dragdrop--visible');
        });
        var sendButton = element.querySelector('[type="file"]');

        var filesList = function filesList(imageForUpload) {
          var list = new DataTransfer();

          for (var _key in imageForUpload) {
            list.items.add(imageForUpload[_key]);
          }

          return list.files;
        };

        sendButton.files = filesList(imageForUpload);

        function previewImages(sendButton) {
          var files = [];
          var preview;
          var formBox = sendButton.parentElement;

          if (!formBox.querySelector('.preview')) {
            preview = document.createElement("div");
            preview.className = 'preview';
          } else preview = formBox.querySelector('.preview');

          sendButton.parentElement.querySelector('[type="button"]').insertAdjacentElement("afterend", preview);
          files = Array.from(sendButton.files);
          preview.textContent = '';
          files.forEach(function (file) {
            if (!file.type.match("image")) return;
            var reader = new FileReader();

            reader.onload = function (event) {
              var src = event.target.result;
              preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" data-name=\"".concat(file.name, "\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t"));
            };

            reader.readAsDataURL(file);
          });

          var remove = function remove(event) {
            if (!event.target.dataset.name) return;
            var name = event.target.dataset.name;
            files = files.filter(function (file) {
              return file.name !== name;
            });
            var block = document.querySelector("[data-name=\"".concat(name, "\"]")).closest('.preview__image');
            block.classList.add('removing');

            if (block.parentElement.childElementCount == 1) {
              var preview_el = block.parentElement;
              block.addEventListener('transitionend', function () {
                return block.remove();
              });
              setTimeout(function () {
                return preview_el.remove();
              }, 300);
            } else block.addEventListener('transitionend', function () {
              return block.remove();
            });
          };

          preview.addEventListener('click', remove);
        }

        previewImages(sendButton);
      });
    });
    var enterTarget = null;
    document.addEventListener('dragenter', function (event) {
      event.preventDefault();
      enterTarget = event.target;
      dragAndDrop.forEach(function (element) {
        return element.classList.add('dragdrop--visible');
      });
    });
    document.addEventListener('dragleave', function (event) {
      event.preventDefault();

      if (enterTarget != event.target) {
        return;
      }

      dragAndDrop.forEach(function (element) {
        return element.classList.remove('dragdrop--visible');
      });
    });
    document.addEventListener('mouseenter', function () {
      dragAndDrop.forEach(function (element) {
        element.classList.remove('dragdrop--active');
        element.classList.remove('dragdrop--visible');
      });
    });
  },
  lazyLoad: function lazyLoad() {
    var images = document.querySelectorAll('img:not([src])');
    var options = {
      root: null,
      threshold: 0.1
    };

    function handleImg(myImg, observer) {
      myImg.forEach(function (myImgSingle) {
        if (myImgSingle.intersectionRatio > 0) loadImage(myImgSingle.target);
      });
    }

    function loadImage(image) {
      image.src = image.getAttribute('data');
    }

    var observer = new IntersectionObserver(handleImg, options);
    images.forEach(function (img) {
      return observer.observe(img);
    });
  },
  animateEmergence: function animateEmergence() {
    var animItems = document.querySelectorAll('.animate-emergence');
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
      animItems.forEach(function (animItem) {
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('animate-emergence--active');
        }
      });
    }

    function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }

    setTimeout(function () {
      animOnScroll();
    }, 300);
  },
  forTheEntireWindow: function forTheEntireWindow() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var references = document.querySelectorAll("".concat(target, ".for-the-entire-window"));
    references.forEach(function (reference) {
      reference.addEventListener('click', function (event) {
        var targetElement = event.target.parentElement;
        targetElement.classList.add('active');
        var body = document.querySelector('body');
        body.classList.add('modal-open');
        var modal = document.createElement("div");
        modal.className = "modal";
        var form = document.createElement("div");
        form.className = "modal__form";
        var imageBlock = document.createElement("div");
        imageBlock.className = "modal__img";
        var image = document.createElement("img");
        image.src = event.target.dataset.big;
        image.alt = "";
        image.className = "modal__image";
        var background = document.createElement("div");
        background.className = "modal__bg-modal";
        var arrowLeft;
        var arrowRight;
        var closeAppend = false;
        var imageNav = targetElement.parentElement.classList.contains('imageNavigation') && targetElement.parentElement.children.length > 1;

        if (imageNav) {
          var imageNavigation = function imageNavigation(sign) {
            closeAppend = false;
            close.remove();
            var childrens = targetElement.parentElement.children;
            var thresholdValue;
            var arrow;
            var newThresholdValue;

            switch (sign) {
              case '+':
                thresholdValue = childrens.length - 1;
                newThresholdValue = -1;
                arrow = -1;
                break;

              case '-':
                thresholdValue = 0;
                newThresholdValue = childrens.length;
                arrow = 1;
                break;
            }

            for (var index = 0; index < childrens.length; index++) {
              if (childrens[index].classList.contains('active')) {
                var currentIndex = index;

                if (index == thresholdValue) {
                  index = newThresholdValue;
                  currentIndex = thresholdValue;
                }

                image.src = childrens[index - arrow].querySelector('.for-the-entire-window').dataset.big;
                childrens[currentIndex].classList.remove('active');
                childrens[index - arrow].classList.add('active');
                break;
              }
            }
          };

          arrowLeft = document.createElement("div");
          arrowLeft.className = "modal__arrow-left";

          arrowLeft.onclick = function () {
            return imageNavigation('-');
          };

          arrowRight = document.createElement("div");
          arrowRight.className = "modal__arrow-right";

          arrowRight.onclick = function () {
            return imageNavigation('+');
          };
        }

        var close = document.createElement("div");
        close.className = "modal__close";
        close.insertAdjacentHTML('afterbegin', closeSvg);

        function closeModal(element) {
          targetElement.parentElement.querySelector('.active').classList.remove('active');
          element.closest('.modal').remove();
          body.classList.remove('modal-open');
        }

        close.onclick = function () {
          return closeModal(close);
        };

        background.onclick = function () {
          return closeModal(background);
        };

        imageBlock.append(image);

        if (imageNav) {
          form.append(background, imageBlock, arrowLeft, arrowRight);
        } else {
          form.append(background, imageBlock);
        }

        modal.append(form);
        document.body.append(modal);
        var tabletWidth = false;

        if (document.documentElement.clientWidth <= 1040) {
          tabletWidth = true;
          close.style.top = '';
        }

        window.onresize = function () {
          if (document.documentElement.clientWidth <= 1040) {
            tabletWidth = true;
            close.style.top = '';
          } else {
            tabletWidth = false;
          }
        };

        var imgSrc = document.querySelector('.modal__image').src;
        var firstOpened = true;
        setInterval(function () {
          if (document.querySelector('.modal__image')) {
            if (document.querySelector('.modal__image').clientHeight > 0) {
              if (!closeAppend && (imgSrc != document.querySelector('.modal__image').src || firstOpened)) {
                imageBlock.append(close);
                closeAppend = true;
                firstOpened = false;
              }

              if (!tabletWidth) {
                close.style.top = "".concat((document.querySelector('.modal__img').clientHeight - document.querySelector('.modal__image').clientHeight) / 2, "px");
              }
            }

            imgSrc = document.querySelector('.modal__image').src;
          }
        }, 100);
      });
    });
  },
  deleteImage: function deleteImage() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var delete_image = document.querySelectorAll("".concat(target, ".delete-image__svg"));
    delete_image.forEach(function (delete_img) {
      delete_img.addEventListener('click', function (event) {
        var image = event.target.closest('.development__thumbnail-image');
        image.querySelector('button').click();
      });
    });
  },
  rotateCategory: function rotateCategory() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var arrowUpBoolean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var arrowDownBoolean = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var arrowUpClass = '.category__arrow-up';
    var arrowDownClass = '.category__arrow-down';
    var rotateCategoryArrow;

    if (arrowUpBoolean) {
      rotateCategoryArrow = document.querySelectorAll("".concat(target).concat(arrowUpClass));
    }

    if (arrowDownBoolean) {
      rotateCategoryArrow = document.querySelectorAll("".concat(target).concat(arrowDownClass));
    }

    if (!(arrowUpBoolean && arrowDownBoolean)) {
      rotateCategoryArrow = document.querySelectorAll("".concat(target).concat(arrowUpClass, ", ").concat(target).concat(arrowDownClass));
    }

    rotateCategoryArrow.forEach(function (element) {
      element.onclick = function () {
        var rotateCategoryButton = element.querySelector('.form__button--category');
        rotateCategoryButton.click();
      };
    });
  },
  hamburger: function hamburger() {
    var hamburger = document.querySelector('.hamburger');
    var body = document.body;
    hamburger.addEventListener('click', function () {
      var modal = document.createElement('div');
      modal.className = 'modal';
      body.append(modal);
      body.classList.add('modal-open');
      var nav = document.querySelector('nav');
      nav.style.visibility = 'unset';
      var close = document.createElement('div');
      close.className = 'nav__close';
      close.insertAdjacentHTML("afterbegin", closeSvg);
      nav.prepend(close);
      close.addEventListener('click', function () {
        body.classList.remove('modal-open');
        nav.style.visibility = 'hidden';
        modal.remove();
        close.remove();
      });
    });
    var mobileSize;
    var tabletWidth = 1040;
    var animate_emergence = document.querySelectorAll('.animate-emergence');

    if (document.documentElement.clientWidth <= tabletWidth) {
      animate_emergence.forEach(function (element) {
        element.classList.remove('animate-emergence');
      });
    }

    window.addEventListener('resize', function () {
      var width = document.documentElement.clientWidth;
      if (width > tabletWidth) mobileSize = false;

      if (document.documentElement.clientWidth <= tabletWidth && mobileSize == false) {
        mobileSize = true;
        var nav = document.querySelector('nav');
        animate_emergence.forEach(function (element) {
          element.classList.remove('animate-emergence');
        });
        nav.style.visibility = 'hidden';
      }

      if (document.documentElement.clientWidth > tabletWidth) {
        var _nav = document.querySelector('nav');

        _nav.style.visibility = 'unset';
        animate_emergence.forEach(function (element) {
          element.classList.add('animate-emergence');
        });

        if (document.querySelector('.nav__close')) {
          body.classList.remove('modal-open');
          var modal = document.querySelector('.modal');
          var close = document.querySelector('.nav__close');
          modal.remove();
          close.remove();
        }
      }
    });
  },
  textEditor: function textEditor() {
    var textareaField = document.querySelectorAll('textarea:not([name="message"]');
    textareaField.forEach(function (element) {
      var editor;
      var config = {
        language: 'ru',
        toolbar: ['bold', 'italic',
        /*'blockQuote',*/
        '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
        ckfinder: {
          uploadUrl: "".concat(window.location.origin, "/upload_ckfinder_image")
        }
      };
      var uploadImage;
      var ckFinder;

      if (element.classList.contains('ckfinder')) {
        uploadImage = ['bold', 'italic',
        /*'blockQuote',*/
        '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo', '|', 'uploadImage'];
        ckFinder = {
          uploadUrl: "".concat(window.location.origin, "/upload_ckfinder_image")
        };
        config.toolbar = uploadImage;
        config.ckfinder = ckFinder;
      }

      ClassicEditor.create(element, config).then(function (newEditor) {
        return editor = newEditor;
      })["catch"](function (error) {
        return console.error(error);
      });
      setTimeout(function () {
        if (document.querySelector('.ck .ck-editor__editable')) {
          var editedText = element.parentElement.querySelector('.ck .ck-editor__editable'); // if (editedText.querySelector('img')) {
          // 	const images = editedText.querySelectorAll('img')
          // 	const re = /.*?\/{2}.*?\/(?<linkPath>.*?\/).*/
          // 	images.forEach(image => {
          // 		const imageSrc = image.src
          // 		let match = re.exec(imageSrc)
          // 		image.src = imageSrc.replace(match.groups.linkPath, '')
          // 	})
          // }

          editedText.addEventListener('DOMSubtreeModified', function () {
            setTimeout(function () {
              element.value = editor.getData();
            });
          });
        }
      });
    });
    var Balloon = document.querySelectorAll('.baloon');
    var id = 1;
    Balloon.forEach(function (element) {
      var config = {
        language: 'ru',
        toolbar: ['bold', 'italic',
        /*'blockQuote',*/
        '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo']
      };
      BalloonEditor.create(element, config).then(function (newEditor) {
        if (!(element.classList.contains('baloon_contacts') || element.classList.contains('baloon_footer_contacts'))) {
          change_main_page_inf(element, id, newEditor, window.location.origin + '/api/' + 'change_main_page_inf');
          id += 1;
        } else {
          change_contacts(element, element.id, newEditor, window.location.origin + '/api/' + 'change_contacts');
        }
      })["catch"](function (error) {
        return console.error(error);
      });
    });
  },
  changeImage: function changeImage() {
    var defaultImages = document.querySelectorAll('.change-image__button');
    defaultImages.forEach(function (element) {
      element.addEventListener('click', function () {
        var form = element.closest('.form');
        var choiceImage = form.querySelector('[type="file"]');

        function change() {
          choiceImage.removeEventListener('change', change);
          var btn = form.querySelector('button');
          btn.click();
        }

        choiceImage.addEventListener('change', change);
        choiceImage.click();

        function focus() {
          setTimeout(function () {
            choiceImage.removeEventListener('change', change);
          }, 100);
        }

        window.addEventListener('focus', focus);
      });
    });
  },
  // textEdited: () => {
  // 	const dev_desc = document.querySelectorAll('pre')
  // 	dev_desc.forEach(element => {
  // 		const dev_desc_text = element.textContent
  // 		element.textContent = ''
  // 		element.insertAdjacentHTML('beforeend', dev_desc_text)
  // 		if (element.querySelector('img')) {
  // 			const images = element.querySelectorAll('img')
  // 			const re = /.*?\/{2}.*?\/(?<linkPath>.*?\/).*/
  // 			images.forEach(image => {
  // 				const imageSrc = image.src
  // 				let match = re.exec(imageSrc)
  // 				image.src = imageSrc.replace(match.groups.linkPath, '')
  // 			})
  // 		}
  // 	})
  // },
  sortCategory: function sortCategory() {
    var sort = document.querySelector('.dropdown__list--sort');
    sort.addEventListener('change', function () {
      var developments = document.querySelectorAll('.developments__item');
      developments.forEach(function (development) {
        if (development.classList.contains('non-select-category')) {
          development.classList.remove('non-select-category');
        }

        var devSort;
        if (development.querySelector('[name="category"]')) devSort = development.querySelector('[name="category"]').value;else if (development.querySelector('.categoryDev')) devSort = development.querySelector('.categoryDev').innerHTML;

        if (sort.value == 'Не выбрано') {
          development.classList.remove('non-select-category');
        } else if (devSort != sort.value) {
          development.classList.add('non-select-category');
        }
      });
    });
  },
  upButton: function upButton() {
    var upBtn = document.getElementById('upButton');
    upBtn.addEventListener('click', function () {
      return window.scrollTo(pageXOffset, 0);
    });
    window.addEventListener('scroll', function () {
      if (pageYOffset < document.documentElement.clientHeight) {
        upBtn.style.opacity = 0;
        upBtn.style.visibility = 'hidden';
      } else {
        upBtn.style.opacity = 1;
        upBtn.style.visibility = 'unset';
      }
    });
  },
  ajax: {
    // HTML
    patent_item_add: function patent_item_add(data) {
      return "\n\t\t\t\t<div class=\"patents__item\">\n\t\t\t\t\t<div class=\"patents__thumbnail\">\n\t\t\t\t\t\t<div class=\"patents__thumbnail-image for-the-entire-window\"><img class=\"patents__thumbnail-img\" src=\"".concat(data.patent.patent_preview_small, "\" data=\"").concat(data.patent.patent_preview_small, "\" data-big=\"").concat(data.patent.patent_preview_big, "\" alt=\"\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--change-text\" action=\"").concat(window.location.origin, "/api/change_information_patent\" method=\"POST\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-text form-box__input-text--patents\" type=\"text\" name=\"name\" value=\"").concat(data.patent.name, "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/change_patent\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"image_patent\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/delete_patent\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"patent_id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_item_add: function development_item_add(data, categories) {
      return "\n\t\t\t\t<div class=\"developments__item\">\n\t\t\t\t\t<div class=\"developments__thumbnail\">\n\t\t\t\t\t\t<img class=\"developments__thumbnail-img for-the-entire-window\" src=\"".concat(data.development.development_preview_small, "\" data=\"").concat(data.development.development_preview_small, "\" data-big=\"").concat(data.development.development_preview_big, "\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"developments__name\">").concat(data.development.name, "</span>\n\t\t\t\t\t<span class=\"caption\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</span>\n\t\t\t\t\t<div class=\"dropdown dropdown--select-category\">\n\t\t\t\t\t\t<form class=\"form form--dropdown\" action=\"").concat(window.location.origin, "/api/change_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t\t<select class=\"dropdown__list dropdown__list--select-category dropdown__list--change-category\" name=\"category\">\n\t\t\t\t\t\t\t\t<option class=\"dropdown__item dropdown__item--disabled\" disabled>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:</option>\n\t\t\t\t\t\t\t\t").concat(categories, "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form developments__item--form\" action=\"").concat(window.location.origin, "/api/change_development_preview_image\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t<div class=\"form-box\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"preview_development\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form\" class=\"delete_development\" action=\"").concat(window.location.origin, "/api/delete_development\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<a class=\"link button\" href=\"").concat(window.location.origin, "/development/").concat(data.development.id, "\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_images_add: function development_images_add(data) {
      return "\n\t\t\t\t<div class=\"development__thumbnail-image\">\n\t\t\t\t\t<img class=\"development__thumbnail-img for-the-entire-window\" src=\"".concat(window.location.origin, "/").concat(data.development_preview_small, "\" data=\"").concat(window.location.origin, "/").concat(data.development_preview_small, "\" data-big=\"").concat(window.location.origin, "/").concat(data.development_preview_big, "\" alt=\"\">\n\t\t\t\t\t<div class=\"delete-image\">\n\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--development__thumbnail\" action=\"").concat(window.location.origin, "/api/delete_image_development\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"path\" value=\"").concat(data.development_preview_small, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    category_add: function category_add(data) {
      var withoutCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var firstCategory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var latestCategory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var rotatingCategory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var arrowUpBlock = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var arrowDownBlock = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var arrowUp = '';
      var arrowDown = '';
      var changedCategory = '';
      var rotatingCategoryClass = '';

      if (!firstCategory || arrowUpBlock) {
        arrowUp = "\n\t\t\t\t\t<div class=\"category__arrow-up\">\n\t\t\t\t\t\t<form class=\"form form--category\" action=\"".concat(window.location.origin, "/api/up_rotate_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"rotating_id\" value=\"").concat(data.rotating_id, "\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"category\" value=\"").concat(data.category, "\">\n\t\t\t\t\t\t\t<button class=\"form__button form__button--category\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t");

        if (arrowUpBlock) {
          return arrowUp;
        }
      }

      if (!latestCategory || arrowDownBlock) {
        arrowDown = "\n\t\t\t\t\t<div class=\"category__arrow-down\">\n\t\t\t\t\t\t<form class=\"form form--category\" action=\"".concat(window.location.origin, "/api/down_rotate_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"rotating_id\" value=\"").concat(data.rotating_id, "\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"category\" value=\"").concat(data.category, "\">\n\t\t\t\t\t\t\t<button class=\"form__button form__button--category\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t");

        if (arrowDownBlock) {
          return arrowDown;
        }
      }

      if (!withoutCategory) {
        changedCategory = "\n\t\t\t\t\t<form class=\"form form--admin\" action=\"".concat(window.location.origin, "/api/change_category_name\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" value=\"").concat(data.id, "\" name=\"id\">\n\t\t\t\t\t\t<div class=\"form-box form-box--admin\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-text\" type=\"text\" value=\"").concat(data.category, "\" name=\"category\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button button\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<form class=\"form form--admin\" action=\"").concat(window.location.origin, "/api/delete_category\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" value=\"").concat(data.id, "\" name=\"id\">\n\t\t\t\t\t\t<button class=\"form__button button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t");
      }

      if (rotatingCategory) {
        rotatingCategoryClass = 'rotating-category';
      }

      return "\n\t\t\t\t<div class=\"category ".concat(rotatingCategoryClass, "\">\n\t\t\t\t\t").concat(arrowUp, "\n\t\t\t\t\t").concat(arrowDown, "\n\t\t\t\t\t<div class=\"category__right-block\">\n\t\t\t\t\t\t<span class=\"category__name\">").concat(data.category, "</span>\n\t\t\t\t\t\t").concat(changedCategory, "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
    },
    article_add: function article_add(data) {
      return "\n\t\t\t\t<div class=\"article\">\n\t\t\t\t\t<span class=\"article__name\">".concat(data.name, "</span>\n\t\t\t\t\t<div class=\"article__buttons\">\n\t\t\t\t\t\t<form action=\"").concat(window.location.origin, "/api/delete_article\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.id, "\">\n\t\t\t\t\t\t\t<button class=\"form__button article__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<a class=\"link button article__button\" href=\"").concat(window.location.origin, "/article/").concat(data.id, "\">\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435...</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
    },
    // send ajax
    sendRequest: function sendRequest(method, url) {
      var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        if (document.querySelector('meta[name="api_token"]')) xhr.setRequestHeader('Authorization', "Bearer ".concat(document.querySelector('meta[name="api_token"]').content));
        xhr.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

        xhr.onload = function () {
          if (xhr.status >= 400) reject(xhr.response);else resolve(xhr.response);
        };

        xhr.onerror = function () {
          return reject(xhr.response);
        };

        xhr.send(formData);
      });
    },
    // change name
    changedNamePatent: function changedNamePatent(event, request) {
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var input_name = event.querySelector("".concat(target, ".form-box__input-text--patents"));
      var execution = false;
      var time;
      input_name.addEventListener('input', function () {
        input_name.defaultValue = input_name.value;
        var formData = new FormData(event);
        if (execution == true) clearTimeout(time);
        execution = true;
        time = setTimeout(function () {
          sendRequest('POST', request, formData)["catch"](function (err) {
            return console.log(err);
          });
          execution = false;
        }, 500);
      });
    },
    // change text AboutUs
    changedTextAboutUs: function changedTextAboutUs(event, request) {
      var textAboutUs = document.querySelector('.form-box__textarea--about-us');
      var execution = false;
      var time;
      var textarea_value = textAboutUs.value;
      setInterval(function () {
        if (textAboutUs.value != textarea_value) {
          var formData = new FormData(event);
          if (execution == true) clearTimeout(time);
          execution = true;
          time = setTimeout(function () {
            sendRequest('POST', request, formData)["catch"](function (err) {
              return console.log(err);
            });
            execution = false;
          }, 500);
        }

        textarea_value = textAboutUs.value;
      }, 500);
    },
    // change_main_page_inf
    change_main_page_inf: function change_main_page_inf(editor, id, text, request) {
      editor.addEventListener('DOMSubtreeModified', function () {
        var formData = new FormData();
        formData.append('id', id);
        formData.append('text', text.getData());
        sendRequest('POST', request, formData)["catch"](function (err) {
          return console.log(err);
        });
      });
    },
    // change_contacts
    change_contacts: function change_contacts(editor, id, text, request) {
      editor.addEventListener('DOMSubtreeModified', function () {
        var formData = new FormData();
        formData.append('id', id);
        formData.append('contact', text.getData());
        sendRequest('POST', request, formData)["catch"](function (err) {
          return console.log(err);
        });
      });
    },
    changedNameAndDescDev: function changedNameAndDescDev(event, request) {
      var text_fields;

      if (document.querySelector('.development__input-text, .development__textarea')) {
        text_fields = document.querySelectorAll('.development__input-text, .development__textarea');
      } else if (document.querySelector('.form-box__input-text--article, .article__text')) {
        text_fields = document.querySelectorAll('.form-box__input-text--article, .article__text');
      }

      text_fields.forEach(function (element) {
        var execution = false;
        var time;

        if (element.type == 'textarea') {
          var textarea_value = element.value;
          setInterval(function () {
            if (element.value != textarea_value) {
              var formData = new FormData(event);
              if (execution == true) clearTimeout(time);
              execution = true;
              time = setTimeout(function () {
                sendRequest('POST', request, formData)["catch"](function (err) {
                  return console.log(err);
                });
                execution = false;
              }, 500);
            }

            textarea_value = element.value;
          }, 500);
        }

        element.addEventListener('input', function () {
          var formData = new FormData(event);
          if (execution == true) clearTimeout(time);
          execution = true;
          time = setTimeout(function () {
            sendRequest('POST', request, formData)["catch"](function (err) {
              return console.log(err);
            });
            execution = false;
          }, 500);
        });
      });
    },
    changeCategory: function changeCategory(event, request) {
      var selectCategory = event.parentElement.querySelector('.dropdown__list--change-category');
      selectCategory.addEventListener('change', function () {
        var formData = new FormData(event);
        sendRequest('POST', request, formData)["catch"](function (err) {
          return console.log(err);
        });
      });
    },
    // request
    requestBtn: function requestBtn(event, request) {
      var btn = event.querySelector('button');
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var formData = new FormData(event);
        event.classList.add('formSend');
        event.querySelector('.form__button').classList.add('sendFormButton');
        sendRequest('POST', request, formData).then(function (data) {
          if (event.querySelector('.error')) {
            var errors = event.querySelectorAll('.error');
            errors.forEach(function (error) {
              return error.remove();
            });
          }

          response(event, data, request);
        })["catch"](function (err) {
          // console.log(err)
          event.classList.remove('formSend');
          event.querySelector('.form__button').classList.remove('sendFormButton');

          if (event.querySelector('.error')) {
            var errors = event.querySelectorAll('.error');
            errors.forEach(function (error) {
              return error.remove();
            });
          }

          for (var key in err.errors) {
            var inputField = event.querySelector("[name*=\"".concat(key, "\"]"));
            var errorField = document.createElement('div');
            errorField.className = 'error';
            errorField.textContent = "".concat(err.errors[key]);
            if (inputField.parentElement.id != 'selectCategory') event.insertBefore(errorField, inputField.parentElement);else event.insertBefore(errorField, inputField.parentElement.parentElement);
          }
        });
      });
    },
    response: function response(event, data, request) {
      event.classList.remove('formSend');
      event.querySelector('.form__button').classList.remove('sendFormButton');
      var successPopUp = document.createElement('div');
      successPopUp.className = 'successPopUp';
      successPopUp.textContent = 'Выполнено успешно';
      document.body.append(successPopUp);
      setTimeout(function () {
        return successPopUp.remove();
      }, 3000);

      if (event.querySelector('[type="file"]')) {
        var inputImg = event.querySelectorAll('[type="file"]');
        inputImg.forEach(function (element) {
          return element.value = null;
        });
      }

      switch (request) {
        case window.location.origin + '/api/' + 'upload_patent':
          var patents = document.querySelector('.grid--patents');
          patents.insertAdjacentHTML('beforeend', patent_item_add(data));
          event.querySelector('[name="name"]').value = '';
          event.querySelector('.preview').remove();
          forTheEntireWindow('.patents__item:nth-last-child(1) ');
          uploadFiles('.patents__item:nth-last-child(1) ');
          var formsPatentAdd = document.querySelectorAll('.patents__item:nth-last-child(1) .form');
          formsPatentAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          var form = document.querySelector('.patents__item:nth-last-child(1) [name="name"]').closest('form');
          changedNamePatent(form, form.action, '.patents__item:nth-last-child(1) ');
          break;

        case window.location.origin + '/api/' + 'delete_patent':
          var patent_item_delete = event.closest('.patents__item');
          patent_item_delete.classList.add('removing');
          patent_item_delete.addEventListener('transitionend', function () {
            return patent_item_delete.remove();
          });
          break;

        case window.location.origin + '/api/' + 'change_patent':
          var patent_item_change = event.closest('.patents__item');
          patent_item_change.querySelector('.patents__thumbnail-img').src = data.patent.patent_preview_small;
          patent_item_change.querySelector('.for-the-entire-window img').dataset.big = data.patent.patent_preview_big;
          event.querySelector('.preview').remove();
          break;

        case window.location.origin + '/api/' + 'upload_development':
          var developments = document.querySelector('.grid--developments');

          var categories = function categories() {
            var category = data.development.category;
            var categoriesArr = data.development.categories;
            var categoriesStr = '';

            for (var index = 0; index < categoriesArr.length; index++) {
              if (category == categoriesArr[index]) categoriesStr += "<option class=\"dropdown__item\" selected>".concat(categoriesArr[index], "</option>\n");else categoriesStr += "<option class=\"dropdown__item\">".concat(categoriesArr[index], "</option>\n");
            }

            return categoriesStr;
          };

          developments.insertAdjacentHTML('beforeend', development_item_add(data, categories()));
          uploadFiles('.developments__item:nth-last-child(1) ');
          forTheEntireWindow('.developments__item:nth-last-child(1) ');
          var formCategoryChange = document.querySelector('.developments__item:nth-last-child(1) form[action*="change_category"]');
          changeCategory(formCategoryChange, formCategoryChange.action);
          var formsDevAdd = document.querySelectorAll('.developments__item:nth-last-child(1) .form');
          formsDevAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          event.querySelector('[name="name"]').value = '';
          var previewAll = event.querySelectorAll('.preview');
          previewAll.forEach(function (preview) {
            return preview.remove();
          });
          break;

        case window.location.origin + '/api/' + 'delete_development':
          var development_item_delete = event.closest('.developments__item');
          development_item_delete.classList.add('removing');
          development_item_delete.addEventListener('transitionend', function () {
            return development_item_delete.remove();
          });
          break;

        case window.location.origin + '/api/' + 'change_development_preview_image':
          var development_item_change = event.closest('.developments__item');
          development_item_change.querySelector('.developments__thumbnail-img').src = data.development.development_preview_small;
          development_item_change.querySelector('.for-the-entire-window').dataset.big = data.development.development_preview_big;
          event.querySelector('.preview').remove();
          break;

        case window.location.origin + '/api/' + 'add_development_image':
          var development_thumbnail = document.querySelector('.development__thumbnail');
          var size = Object.keys(data.development_images).length;

          for (var key in data.development_images) {
            development_thumbnail.insertAdjacentHTML('beforeend', development_images_add(data.development_images[key]));
          }

          event.querySelector('.preview').remove();
          var formsImgAdd;

          if (document.querySelector('.development__thumbnail').children.length > 1) {
            forTheEntireWindow(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
            deleteImage(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
            formsImgAdd = document.querySelectorAll(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image .form"));
          } else {
            forTheEntireWindow('.development__thumbnail-image ');
            deleteImage('.development__thumbnail-image ');
            formsImgAdd = document.querySelectorAll(".development__thumbnail-image .form");
          }

          formsImgAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'delete_image_development':
          var development_image = event.closest('.development__thumbnail-image');
          development_image.classList.add('removing');
          development_image.addEventListener('transitionend', function () {
            return development_image.remove();
          });
          break;

        case window.location.origin + '/api/' + 'add_article':
          event.querySelector('.form-box__input-text').value = ''; // event.querySelector('.form-box__textarea').value = ''

          var articles = document.querySelector('.articles .grid');
          articles.insertAdjacentHTML('beforeend', article_add(data));
          var formsArticle = document.querySelectorAll('.article:nth-last-child(1) .form');
          formsArticle.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'delete_article':
          var article = event.closest('.article');
          article.classList.add('removing');
          article.addEventListener('transitionend', function () {
            return article.remove();
          });
          break;

        case window.location.origin + '/api/' + 'add_category':
          var categoriesBlock = document.querySelector('.categories');
          event.querySelector('.form-box__input-text').value = '';
          categoriesBlock.insertAdjacentHTML('beforeend', category_add(data, false, false, true));
          var formsCategory = document.querySelectorAll('.categories:nth-last-child(1) .form');
          formsCategory.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'change_category_name':
          var categoryName = event.parentElement.querySelector('.category__name');
          categoryName.textContent = data.category;
          var category_name = event.closest('.category').querySelectorAll('.category__arrow-down [name="category"], .category__arrow-up [name="category"]');
          console.log(category_name);
          category_name.forEach(function (element) {
            element.value = data.category;
          });
          break;

        case window.location.origin + '/api/' + 'delete_category':
          var category = event.closest('.category');
          category.classList.add('removing');
          category.addEventListener('transitionend', function () {
            return category.remove();
          });
          break;

        case window.location.origin + '/api/' + 'up_rotate_category':
          var categoriesBlockUp = event.closest('.categories');
          var categoryBlockUp = event.parentElement.parentElement;
          var categoryBlockPrevious = event.parentElement.parentElement.previousElementSibling;
          var categoryBlockUpIDTarget;

          for (var index = 0; index < categoriesBlockUp.children.length; index++) {
            if (categoryBlockUp == categoriesBlockUp.children[index]) {
              categoryBlockUpIDTarget = index + 1;
            }
          }

          var categoryBlockUpIDPrevious;

          for (var _index = 0; _index < categoriesBlockUp.children.length; _index++) {
            if (categoryBlockPrevious == categoriesBlockUp.children[_index]) {
              categoryBlockUpIDPrevious = _index + 1;
            }
          }

          categoryBlockUp.remove();
          categoryBlockPrevious.insertAdjacentHTML('beforebegin', category_add(data, data.withoutCategory, data.min, data.max, true, false, false));
          categoryBlockPrevious.querySelectorAll('[name="rotating_id"]').forEach(function (element) {
            element.value = data.rotate_id;
          });

          if (data.max || data.maximalTarget) {
            categoryBlockPrevious.querySelector('.category__arrow-down').remove();
          }

          if (data.min) {
            categoryBlockPrevious.insertAdjacentHTML('afterbegin', category_add(data, data.withoutCategory, false, false, false, data.min, false));
            var formArrowUpBlock = categoryBlockPrevious.querySelector('.category__arrow-up .form');
            formArrowUpBlock.querySelector('[name="rotating_id"]').value = data.rotate_id;
            formArrowUpBlock.querySelector('[name="category"]').value = data.category_rotate;
            requestBtn(formArrowUpBlock, formArrowUpBlock.action);
            rotateCategory(".category:nth-child(".concat(categoryBlockUpIDPrevious, ") "), true, false);
          }

          var targetCategoryFormsUp = categoriesBlockUp.querySelectorAll('.rotating-category .form');
          targetCategoryFormsUp.forEach(function (form) {
            requestBtn(form, form.action);
          });
          rotateCategory(".category:nth-child(".concat(categoryBlockUpIDTarget, ") "), false, false);
          categoriesBlockUp.querySelector('.rotating-category').classList.remove('rotating-category');
          break;

        case window.location.origin + '/api/' + 'down_rotate_category':
          var categoriesBlockDown = event.closest('.categories');
          var categoryBlockTarget = event.parentElement.parentElement;
          var categoryBlockNext = event.parentElement.parentElement.nextElementSibling;
          var categoryBlockDownIDTarget;

          for (var _index2 = 0; _index2 < categoriesBlockDown.children.length; _index2++) {
            if (categoryBlockTarget == categoriesBlockDown.children[_index2]) {
              categoryBlockDownIDTarget = _index2 + 1;
            }
          }

          var categoryBlockDownIDNext;

          for (var _index3 = 0; _index3 < categoriesBlockDown.children.length; _index3++) {
            if (categoryBlockNext == categoriesBlockDown.children[_index3]) {
              categoryBlockDownIDNext = _index3 + 1;
            }
          }

          categoryBlockTarget.remove();
          categoryBlockNext.insertAdjacentHTML('afterend', category_add(data, data.withoutCategory, data.min, data.max, true, false, false));
          categoryBlockNext.querySelectorAll('.category [name="rotating_id"]').forEach(function (element) {
            element.value = data.rotate_id;
          });

          if (data.min || data.minimalTarget) {
            categoryBlockNext.querySelector('.category__arrow-up').remove();
          }

          if (data.max) {
            categoryBlockNext.insertAdjacentHTML('beforeend', category_add(data, data.withoutCategory, false, false, false, false, data.max));
            var formArrowDownBlock = categoryBlockNext.querySelector('.category__arrow-down .form');
            formArrowDownBlock.querySelector('[name="rotating_id"]').value = data.rotate_id;
            formArrowDownBlock.querySelector('[name="category"]').value = data.category_rotate;
            requestBtn(formArrowDownBlock, formArrowDownBlock.action);
            rotateCategory(".category:nth-child(".concat(categoryBlockDownIDNext, ") "), false, true);
          }

          if (data.min) {
            categoryBlockNext.querySelector('.category__arrow-up').remove();
          }

          var targetCategoryFormsDown = categoriesBlockDown.querySelectorAll('.rotating-category .form');
          targetCategoryFormsDown.forEach(function (form) {
            requestBtn(form, form.action);
          });
          rotateCategory(".category:nth-child(".concat(categoryBlockDownIDTarget, ") "), false, false);
          categoriesBlockDown.querySelector('.rotating-category').classList.remove('rotating-category');
          break;
      }
    }
  }
};
var uploadFiles = func.uploadFiles;
var lazyLoadImage = func.lazyLoad;
var animateEmergence = func.animateEmergence;
var forTheEntireWindow = func.forTheEntireWindow;
var deleteImage = func.deleteImage;
var rotateCategory = func.rotateCategory;
var hamburger = func.hamburger;
var textEditor = func.textEditor;
var changeImage = func.changeImage; // export const textEdited = func.textEdited

var sortCategory = func.sortCategory;
var upButton = func.upButton;
var dragAndDrop = func.dragAndDrop;
var patent_item_add = func.ajax.patent_item_add;
var development_item_add = func.ajax.development_item_add;
var development_images_add = func.ajax.development_images_add;
var category_add = func.ajax.category_add;
var article_add = func.ajax.article_add;
var sendRequest = func.ajax.sendRequest;
var changedNamePatent = func.ajax.changedNamePatent;
var changedTextAboutUs = func.ajax.changedTextAboutUs;
var change_main_page_inf = func.ajax.change_main_page_inf;
var change_contacts = func.ajax.change_contacts;
var changedNameAndDescDev = func.ajax.changedNameAndDescDev;
var changeCategory = func.ajax.changeCategory;
var response = func.ajax.response;
var requestBtn = func.ajax.requestBtn;

/***/ }),

/***/ "./resources/sass/main.sass":
/*!**********************************!*\
  !*** ./resources/sass/main.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/ajax.js ./resources/sass/main.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\OpenServer\domains\ctek\resources\js\ajax.js */"./resources/js/ajax.js");
module.exports = __webpack_require__(/*! D:\OpenServer\domains\ctek\resources\sass\main.sass */"./resources/sass/main.sass");


/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/func.js":
/*!******************************!*\
  !*** ./resources/js/func.js ***!
  \******************************/
/*! exports provided: uploadFiles, lazyLoadImage, animateEmergence, forTheEntireWindow, deleteImage, rotateCategory, hamburger, textEditor, changeImage, sortCategory, upButton, dragAndDrop, patent_item_add, development_item_add, development_images_add, category_add, article_add, sendRequest, changedNamePatent, changedTextAboutUs, change_main_page_inf, change_contacts, changedNameAndDescDev, changeCategory, response, requestBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadImage", function() { return lazyLoadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateEmergence", function() { return animateEmergence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forTheEntireWindow", function() { return forTheEntireWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateCategory", function() { return rotateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textEditor", function() { return textEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeImage", function() { return changeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCategory", function() { return sortCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upButton", function() { return upButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragAndDrop", function() { return dragAndDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patent_item_add", function() { return patent_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_item_add", function() { return development_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_images_add", function() { return development_images_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category_add", function() { return category_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article_add", function() { return article_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNamePatent", function() { return changedNamePatent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedTextAboutUs", function() { return changedTextAboutUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_main_page_inf", function() { return change_main_page_inf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change_contacts", function() { return change_contacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNameAndDescDev", function() { return changedNameAndDescDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCategory", function() { return changeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "response", function() { return response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBtn", function() { return requestBtn; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var closeSvg = "\n\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t</path>\n\t</svg>\n";
var func = {
  uploadFiles: function uploadFiles() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var forms = document.querySelectorAll("".concat(target, "[enctype=\"multipart/form-data\"]"));
    forms.forEach(function (form) {
      var buttons = form.querySelectorAll('[type="button"]');
      buttons.forEach(function (element) {
        element.addEventListener('click', function (event) {
          var files = [];
          var btn_img = event.target;
          var input_img = btn_img.parentElement.querySelector('[type="file"]');
          input_img.value = '';
          input_img.click();

          var change = function change(event) {
            var preview;

            if (!btn_img.parentElement.querySelector('.preview')) {
              preview = document.createElement("div");
              preview.className = 'preview';
            } else preview = btn_img.parentElement.querySelector('.preview');

            btn_img.insertAdjacentElement("afterend", preview);
            files = Array.from(event.target.files);
            preview.textContent = '';
            files.forEach(function (file) {
              if (!file.type.match("image")) return;
              var reader = new FileReader();

              reader.onload = function (event) {
                var src = event.target.result;
                preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" data-name=\"".concat(file.name, "\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"));
              };

              reader.readAsDataURL(file);
            });
            input_img.removeEventListener("change", change);

            var remove = function remove(event) {
              if (!event.target.dataset.name) return;
              var name = event.target.dataset.name;
              files = files.filter(function (file) {
                return file.name !== name;
              });
              var block = document.querySelector("[data-name=\"".concat(name, "\"]")).closest('.preview__image');
              block.classList.add('removing');

              if (block.parentElement.childElementCount == 1) {
                event.target.closest('.form-box').querySelector('[type="file"]').value = '';
                var preview_el = block.parentElement;
                block.addEventListener('transitionend', function () {
                  return block.remove();
                });
                setTimeout(function () {
                  return preview_el.remove();
                }, 300);
              } else block.addEventListener('transitionend', function () {
                return block.remove();
              });
            };

            preview.addEventListener('click', remove);
          };

          input_img.addEventListener('change', change);

          var focus = function focus() {
            setTimeout(function () {
              input_img.removeEventListener('change', change);
              window.removeEventListener('focus', focus);
            }, 100);
          };

          window.addEventListener('focus', focus);
        });
      });
    });
  },
  dragAndDrop: function dragAndDrop() {
    var imageForUpload = [];
    var types = ['image/'];
    var dragAndDrop = document.querySelectorAll('.dragdrop');
    dragAndDrop.forEach(function (element) {
      element.addEventListener('dragenter', function (event) {
        event.preventDefault();
        element.classList.add('dragdrop--active');
      });
      element.addEventListener('dragleave', function (event) {
        event.preventDefault();
        element.classList.remove('dragdrop--active');
      });
      element.addEventListener('dragover', function (event) {
        event.preventDefault();
      });
      element.addEventListener('drop', function (event) {
        event.preventDefault();
        var multipleImage = event.target.querySelector('[type="file"]').multiple;
        imageForUpload = [];
        var files = event.dataTransfer.files;
        var image = false;

        for (var keyType in files) {
          var fileType = files[keyType].type;

          if (!fileType || !multipleImage && image) {
            continue;
          }

          image = true;

          for (var _i = 0, _Object$entries = Object.entries(types); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (!fileType.includes(value)) {
              continue;
            }

            imageForUpload.push(files[keyType]);
          }
        }

        element.classList.remove('dragdrop--active');
        dragAndDrop.forEach(function (element) {
          return element.classList.remove('dragdrop--visible');
        });
        var sendButton = element.querySelector('[type="file"]');

        var filesList = function filesList(imageForUpload) {
          var list = new DataTransfer();

          for (var _key in imageForUpload) {
            list.items.add(imageForUpload[_key]);
          }

          return list.files;
        };

        sendButton.files = filesList(imageForUpload);

        function previewImages(sendButton) {
          var files = [];
          var preview;
          var formBox = sendButton.parentElement;

          if (!formBox.querySelector('.preview')) {
            preview = document.createElement("div");
            preview.className = 'preview';
          } else preview = formBox.querySelector('.preview');

          sendButton.parentElement.querySelector('[type="button"]').insertAdjacentElement("afterend", preview);
          files = Array.from(sendButton.files);
          preview.textContent = '';
          files.forEach(function (file) {
            if (!file.type.match("image")) return;
            var reader = new FileReader();

            reader.onload = function (event) {
              var src = event.target.result;
              preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" data-name=\"".concat(file.name, "\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t"));
            };

            reader.readAsDataURL(file);
          });

          var remove = function remove(event) {
            if (!event.target.dataset.name) return;
            var name = event.target.dataset.name;
            files = files.filter(function (file) {
              return file.name !== name;
            });
            var block = document.querySelector("[data-name=\"".concat(name, "\"]")).closest('.preview__image');
            block.classList.add('removing');

            if (block.parentElement.childElementCount == 1) {
              var preview_el = block.parentElement;
              block.addEventListener('transitionend', function () {
                return block.remove();
              });
              setTimeout(function () {
                return preview_el.remove();
              }, 300);
            } else block.addEventListener('transitionend', function () {
              return block.remove();
            });
          };

          preview.addEventListener('click', remove);
        }

        previewImages(sendButton);
      });
    });
    var enterTarget = null;
    document.addEventListener('dragenter', function (event) {
      event.preventDefault();
      enterTarget = event.target;
      dragAndDrop.forEach(function (element) {
        return element.classList.add('dragdrop--visible');
      });
    });
    document.addEventListener('dragleave', function (event) {
      event.preventDefault();

      if (enterTarget != event.target) {
        return;
      }

      dragAndDrop.forEach(function (element) {
        return element.classList.remove('dragdrop--visible');
      });
    });
    document.addEventListener('mouseenter', function () {
      dragAndDrop.forEach(function (element) {
        element.classList.remove('dragdrop--active');
        element.classList.remove('dragdrop--visible');
      });
    });
  },
  lazyLoad: function lazyLoad() {
    var images = document.querySelectorAll('img:not([src])');
    var options = {
      root: null,
      threshold: 0.1
    };

    function handleImg(myImg, observer) {
      myImg.forEach(function (myImgSingle) {
        if (myImgSingle.intersectionRatio > 0) loadImage(myImgSingle.target);
      });
    }

    function loadImage(image) {
      image.src = image.getAttribute('data');
    }

    var observer = new IntersectionObserver(handleImg, options);
    images.forEach(function (img) {
      return observer.observe(img);
    });
  },
  animateEmergence: function animateEmergence() {
    var animItems = document.querySelectorAll('.animate-emergence');
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
      animItems.forEach(function (animItem) {
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('animate-emergence--active');
        }
      });
    }

    function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }

    setTimeout(function () {
      animOnScroll();
    }, 300);
  },
  forTheEntireWindow: function forTheEntireWindow() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var references = document.querySelectorAll("".concat(target, ".for-the-entire-window"));
    references.forEach(function (reference) {
      reference.addEventListener('click', function (event) {
        var targetElement = event.target.parentElement;
        targetElement.classList.add('active');
        var body = document.querySelector('body');
        body.classList.add('modal-open');
        var modal = document.createElement("div");
        modal.className = "modal";
        var form = document.createElement("div");
        form.className = "modal__form";
        var imageBlock = document.createElement("div");
        imageBlock.className = "modal__img";
        var image = document.createElement("img");
        image.src = event.target.dataset.big;
        image.alt = "";
        image.className = "modal__image";
        var background = document.createElement("div");
        background.className = "modal__bg-modal";
        var arrowLeft;
        var arrowRight;
        var closeAppend = false;
        var imageNav = targetElement.parentElement.classList.contains('imageNavigation') && targetElement.parentElement.children.length > 1;

        if (imageNav) {
          var imageNavigation = function imageNavigation(sign) {
            closeAppend = false;
            close.remove();
            var childrens = targetElement.parentElement.children;
            var thresholdValue;
            var arrow;
            var newThresholdValue;

            switch (sign) {
              case '+':
                thresholdValue = childrens.length - 1;
                newThresholdValue = -1;
                arrow = -1;
                break;

              case '-':
                thresholdValue = 0;
                newThresholdValue = childrens.length;
                arrow = 1;
                break;
            }

            for (var index = 0; index < childrens.length; index++) {
              if (childrens[index].classList.contains('active')) {
                var currentIndex = index;

                if (index == thresholdValue) {
                  index = newThresholdValue;
                  currentIndex = thresholdValue;
                }

                image.src = childrens[index - arrow].querySelector('.for-the-entire-window').dataset.big;
                childrens[currentIndex].classList.remove('active');
                childrens[index - arrow].classList.add('active');
                break;
              }
            }
          };

          arrowLeft = document.createElement("div");
          arrowLeft.className = "modal__arrow-left";

          arrowLeft.onclick = function () {
            return imageNavigation('-');
          };

          arrowRight = document.createElement("div");
          arrowRight.className = "modal__arrow-right";

          arrowRight.onclick = function () {
            return imageNavigation('+');
          };
        }

        var close = document.createElement("div");
        close.className = "modal__close";
        close.insertAdjacentHTML('afterbegin', closeSvg);

        function closeModal(element) {
          targetElement.parentElement.querySelector('.active').classList.remove('active');
          element.closest('.modal').remove();
          body.classList.remove('modal-open');
        }

        close.onclick = function () {
          return closeModal(close);
        };

        background.onclick = function () {
          return closeModal(background);
        };

        imageBlock.append(image);

        if (imageNav) {
          form.append(background, imageBlock, arrowLeft, arrowRight);
        } else {
          form.append(background, imageBlock);
        }

        modal.append(form);
        document.body.append(modal);
        var tabletWidth = false;

        if (document.documentElement.clientWidth <= 1040) {
          tabletWidth = true;
          close.style.top = '';
        }

        window.onresize = function () {
          if (document.documentElement.clientWidth <= 1040) {
            tabletWidth = true;
            close.style.top = '';
          } else {
            tabletWidth = false;
          }
        };

        var imgSrc = document.querySelector('.modal__image').src;
        var firstOpened = true;
        setInterval(function () {
          if (document.querySelector('.modal__image')) {
            if (document.querySelector('.modal__image').clientHeight > 0) {
              if (!closeAppend && (imgSrc != document.querySelector('.modal__image').src || firstOpened)) {
                imageBlock.append(close);
                closeAppend = true;
                firstOpened = false;
              }

              if (!tabletWidth) {
                close.style.top = "".concat((document.querySelector('.modal__img').clientHeight - document.querySelector('.modal__image').clientHeight) / 2, "px");
              }
            }

            imgSrc = document.querySelector('.modal__image').src;
          }
        }, 100);
      });
    });
  },
  deleteImage: function deleteImage() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var delete_image = document.querySelectorAll("".concat(target, ".delete-image__svg"));
    delete_image.forEach(function (delete_img) {
      delete_img.addEventListener('click', function (event) {
        var image = event.target.closest('.development__thumbnail-image');
        image.querySelector('button').click();
      });
    });
  },
  rotateCategory: function rotateCategory() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var arrowUpBoolean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var arrowDownBoolean = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var arrowUpClass = '.category__arrow-up';
    var arrowDownClass = '.category__arrow-down';
    var rotateCategoryArrow;

    if (arrowUpBoolean) {
      rotateCategoryArrow = document.querySelectorAll("".concat(target).concat(arrowUpClass));
    }

    if (arrowDownBoolean) {
      rotateCategoryArrow = document.querySelectorAll("".concat(target).concat(arrowDownClass));
    }

    if (!(arrowUpBoolean && arrowDownBoolean)) {
      rotateCategoryArrow = document.querySelectorAll("".concat(target).concat(arrowUpClass, ", ").concat(target).concat(arrowDownClass));
    }

    rotateCategoryArrow.forEach(function (element) {
      element.onclick = function () {
        var rotateCategoryButton = element.querySelector('.form__button--category');
        rotateCategoryButton.click();
      };
    });
  },
  hamburger: function hamburger() {
    var hamburger = document.querySelector('.hamburger');
    var body = document.body;
    hamburger.addEventListener('click', function () {
      var modal = document.createElement('div');
      modal.className = 'modal';
      body.append(modal);
      body.classList.add('modal-open');
      var nav = document.querySelector('nav');
      nav.style.visibility = 'unset';
      var close = document.createElement('div');
      close.className = 'nav__close';
      close.insertAdjacentHTML("afterbegin", closeSvg);
      nav.prepend(close);
      close.addEventListener('click', function () {
        body.classList.remove('modal-open');
        nav.style.visibility = 'hidden';
        modal.remove();
        close.remove();
      });
    });
    var mobileSize;
    var tabletWidth = 1040;
    var animate_emergence = document.querySelectorAll('.animate-emergence');

    if (document.documentElement.clientWidth <= tabletWidth) {
      animate_emergence.forEach(function (element) {
        element.classList.remove('animate-emergence');
      });
    }

    window.addEventListener('resize', function () {
      var width = document.documentElement.clientWidth;
      if (width > tabletWidth) mobileSize = false;

      if (document.documentElement.clientWidth <= tabletWidth && mobileSize == false) {
        mobileSize = true;
        var nav = document.querySelector('nav');
        animate_emergence.forEach(function (element) {
          element.classList.remove('animate-emergence');
        });
        nav.style.visibility = 'hidden';
      }

      if (document.documentElement.clientWidth > tabletWidth) {
        var _nav = document.querySelector('nav');

        _nav.style.visibility = 'unset';
        animate_emergence.forEach(function (element) {
          element.classList.add('animate-emergence');
        });

        if (document.querySelector('.nav__close')) {
          body.classList.remove('modal-open');
          var modal = document.querySelector('.modal');
          var close = document.querySelector('.nav__close');
          modal.remove();
          close.remove();
        }
      }
    });
  },
  textEditor: function textEditor() {
    var textareaField = document.querySelectorAll('textarea:not([name="message"]');
    textareaField.forEach(function (element) {
      var editor;
      var config = {
        language: 'ru',
        toolbar: ['bold', 'italic',
        /*'blockQuote',*/
        '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
        ckfinder: {
          uploadUrl: "".concat(window.location.origin, "/upload_ckfinder_image")
        }
      };
      var uploadImage;
      var ckFinder;

      if (element.classList.contains('ckfinder')) {
        uploadImage = ['bold', 'italic',
        /*'blockQuote',*/
        '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo', '|', 'uploadImage'];
        ckFinder = {
          uploadUrl: "".concat(window.location.origin, "/upload_ckfinder_image")
        };
        config.toolbar = uploadImage;
        config.ckfinder = ckFinder;
      }

      ClassicEditor.create(element, config).then(function (newEditor) {
        return editor = newEditor;
      })["catch"](function (error) {
        return console.error(error);
      });
      setTimeout(function () {
        if (document.querySelector('.ck .ck-editor__editable')) {
          var editedText = element.parentElement.querySelector('.ck .ck-editor__editable'); // if (editedText.querySelector('img')) {
          // 	const images = editedText.querySelectorAll('img')
          // 	const re = /.*?\/{2}.*?\/(?<linkPath>.*?\/).*/
          // 	images.forEach(image => {
          // 		const imageSrc = image.src
          // 		let match = re.exec(imageSrc)
          // 		image.src = imageSrc.replace(match.groups.linkPath, '')
          // 	})
          // }

          editedText.addEventListener('DOMSubtreeModified', function () {
            setTimeout(function () {
              element.value = editor.getData();
            });
          });
        }
      });
    });
    var Balloon = document.querySelectorAll('.baloon');
    var id = 1;
    Balloon.forEach(function (element) {
      var config = {
        language: 'ru',
        toolbar: ['bold', 'italic',
        /*'blockQuote',*/
        '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo']
      };
      BalloonEditor.create(element, config).then(function (newEditor) {
        if (!(element.classList.contains('baloon_contacts') || element.classList.contains('baloon_footer_contacts'))) {
          change_main_page_inf(element, id, newEditor, window.location.origin + '/api/' + 'change_main_page_inf');
          id += 1;
        } else {
          change_contacts(element, element.id, newEditor, window.location.origin + '/api/' + 'change_contacts');
        }
      })["catch"](function (error) {
        return console.error(error);
      });
    });
  },
  changeImage: function changeImage() {
    var defaultImages = document.querySelectorAll('.change-image__button');
    defaultImages.forEach(function (element) {
      element.addEventListener('click', function () {
        var form = element.closest('.form');
        var choiceImage = form.querySelector('[type="file"]');

        function change() {
          choiceImage.removeEventListener('change', change);
          var btn = form.querySelector('button');
          btn.click();
        }

        choiceImage.addEventListener('change', change);
        choiceImage.click();

        function focus() {
          setTimeout(function () {
            choiceImage.removeEventListener('change', change);
          }, 100);
        }

        window.addEventListener('focus', focus);
      });
    });
  },
  // textEdited: () => {
  // 	const dev_desc = document.querySelectorAll('pre')
  // 	dev_desc.forEach(element => {
  // 		const dev_desc_text = element.textContent
  // 		element.textContent = ''
  // 		element.insertAdjacentHTML('beforeend', dev_desc_text)
  // 		if (element.querySelector('img')) {
  // 			const images = element.querySelectorAll('img')
  // 			const re = /.*?\/{2}.*?\/(?<linkPath>.*?\/).*/
  // 			images.forEach(image => {
  // 				const imageSrc = image.src
  // 				let match = re.exec(imageSrc)
  // 				image.src = imageSrc.replace(match.groups.linkPath, '')
  // 			})
  // 		}
  // 	})
  // },
  sortCategory: function sortCategory() {
    var sort = document.querySelector('.dropdown__list--sort');
    sort.addEventListener('change', function () {
      var developments = document.querySelectorAll('.developments__item');
      developments.forEach(function (development) {
        if (development.classList.contains('non-select-category')) {
          development.classList.remove('non-select-category');
        }

        var devSort;
        if (development.querySelector('[name="category"]')) devSort = development.querySelector('[name="category"]').value;else if (development.querySelector('.categoryDev')) devSort = development.querySelector('.categoryDev').innerHTML;

        if (sort.value == 'Не выбрано') {
          development.classList.remove('non-select-category');
        } else if (devSort != sort.value) {
          development.classList.add('non-select-category');
        }
      });
    });
  },
  upButton: function upButton() {
    var upBtn = document.getElementById('upButton');
    upBtn.addEventListener('click', function () {
      return window.scrollTo(pageXOffset, 0);
    });
    window.addEventListener('scroll', function () {
      if (pageYOffset < document.documentElement.clientHeight) {
        upBtn.style.opacity = 0;
        upBtn.style.visibility = 'hidden';
      } else {
        upBtn.style.opacity = 1;
        upBtn.style.visibility = 'unset';
      }
    });
  },
  ajax: {
    // HTML
    patent_item_add: function patent_item_add(data) {
      return "\n\t\t\t\t<div class=\"patents__item\">\n\t\t\t\t\t<div class=\"patents__thumbnail\">\n\t\t\t\t\t\t<div class=\"patents__thumbnail-image for-the-entire-window\"><img class=\"patents__thumbnail-img\" src=\"".concat(data.patent.patent_preview_small, "\" data=\"").concat(data.patent.patent_preview_small, "\" data-big=\"").concat(data.patent.patent_preview_big, "\" alt=\"\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--change-text\" action=\"").concat(window.location.origin, "/api/change_information_patent\" method=\"POST\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-text form-box__input-text--patents\" type=\"text\" name=\"name\" value=\"").concat(data.patent.name, "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/change_patent\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"image_patent\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/delete_patent\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"patent_id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_item_add: function development_item_add(data, categories) {
      return "\n\t\t\t\t<div class=\"developments__item\">\n\t\t\t\t\t<div class=\"developments__thumbnail\">\n\t\t\t\t\t\t<img class=\"developments__thumbnail-img for-the-entire-window\" src=\"".concat(data.development.development_preview_small, "\" data=\"").concat(data.development.development_preview_small, "\" data-big=\"").concat(data.development.development_preview_big, "\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"developments__name\">").concat(data.development.name, "</span>\n\t\t\t\t\t<span class=\"caption\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</span>\n\t\t\t\t\t<div class=\"dropdown dropdown--select-category\">\n\t\t\t\t\t\t<form class=\"form form--dropdown\" action=\"").concat(window.location.origin, "/api/change_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t\t<select class=\"dropdown__list dropdown__list--select-category dropdown__list--change-category\" name=\"category\">\n\t\t\t\t\t\t\t\t<option class=\"dropdown__item dropdown__item--disabled\" disabled>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:</option>\n\t\t\t\t\t\t\t\t").concat(categories, "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form developments__item--form\" action=\"").concat(window.location.origin, "/api/change_development_preview_image\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t<div class=\"form-box\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"preview_development\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form\" class=\"delete_development\" action=\"").concat(window.location.origin, "/api/delete_development\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<a class=\"link button\" href=\"").concat(window.location.origin, "/development/").concat(data.development.id, "\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_images_add: function development_images_add(data) {
      return "\n\t\t\t\t<div class=\"development__thumbnail-image\">\n\t\t\t\t\t<img class=\"development__thumbnail-img for-the-entire-window\" src=\"".concat(window.location.origin, "/").concat(data.development_preview_small, "\" data=\"").concat(window.location.origin, "/").concat(data.development_preview_small, "\" data-big=\"").concat(window.location.origin, "/").concat(data.development_preview_big, "\" alt=\"\">\n\t\t\t\t\t<div class=\"delete-image\">\n\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--development__thumbnail\" action=\"").concat(window.location.origin, "/api/delete_image_development\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"path\" value=\"").concat(data.development_preview_small, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    category_add: function category_add(data) {
      var withoutCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var firstCategory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var latestCategory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var rotatingCategory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var arrowUpBlock = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var arrowDownBlock = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var arrowUp = '';
      var arrowDown = '';
      var changedCategory = '';
      var rotatingCategoryClass = '';

      if (!firstCategory || arrowUpBlock) {
        arrowUp = "\n\t\t\t\t\t<div class=\"category__arrow-up\">\n\t\t\t\t\t\t<form class=\"form form--category\" action=\"".concat(window.location.origin, "/api/up_rotate_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"rotating_id\" value=\"").concat(data.rotating_id, "\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"category\" value=\"").concat(data.category, "\">\n\t\t\t\t\t\t\t<button class=\"form__button form__button--category\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t");

        if (arrowUpBlock) {
          return arrowUp;
        }
      }

      if (!latestCategory || arrowDownBlock) {
        arrowDown = "\n\t\t\t\t\t<div class=\"category__arrow-down\">\n\t\t\t\t\t\t<form class=\"form form--category\" action=\"".concat(window.location.origin, "/api/down_rotate_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"rotating_id\" value=\"").concat(data.rotating_id, "\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"category\" value=\"").concat(data.category, "\">\n\t\t\t\t\t\t\t<button class=\"form__button form__button--category\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t");

        if (arrowDownBlock) {
          return arrowDown;
        }
      }

      if (!withoutCategory) {
        changedCategory = "\n\t\t\t\t\t<form class=\"form form--admin\" action=\"".concat(window.location.origin, "/api/change_category_name\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" value=\"").concat(data.id, "\" name=\"id\">\n\t\t\t\t\t\t<div class=\"form-box form-box--admin\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-text\" type=\"text\" value=\"").concat(data.category, "\" name=\"category\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button button\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<form class=\"form form--admin\" action=\"").concat(window.location.origin, "/api/delete_category\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" value=\"").concat(data.id, "\" name=\"id\">\n\t\t\t\t\t\t<button class=\"form__button button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t");
      }

      if (rotatingCategory) {
        rotatingCategoryClass = 'rotating-category';
      }

      return "\n\t\t\t\t<div class=\"category ".concat(rotatingCategoryClass, "\">\n\t\t\t\t\t").concat(arrowUp, "\n\t\t\t\t\t").concat(arrowDown, "\n\t\t\t\t\t<div class=\"category__right-block\">\n\t\t\t\t\t\t<span class=\"category__name\">").concat(data.category, "</span>\n\t\t\t\t\t\t").concat(changedCategory, "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
    },
    article_add: function article_add(data) {
      return "\n\t\t\t\t<div class=\"article\">\n\t\t\t\t\t<span class=\"article__name\">".concat(data.name, "</span>\n\t\t\t\t\t<div class=\"article__buttons\">\n\t\t\t\t\t\t<form action=\"").concat(window.location.origin, "/api/delete_article\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.id, "\">\n\t\t\t\t\t\t\t<button class=\"form__button article__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<a class=\"link button article__button\" href=\"").concat(window.location.origin, "/article/").concat(data.id, "\">\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435...</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
    },
    // send ajax
    sendRequest: function sendRequest(method, url) {
      var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        if (document.querySelector('meta[name="api_token"]')) xhr.setRequestHeader('Authorization', "Bearer ".concat(document.querySelector('meta[name="api_token"]').content));
        xhr.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

        xhr.onload = function () {
          if (xhr.status >= 400) reject(xhr.response);else resolve(xhr.response);
        };

        xhr.onerror = function () {
          return reject(xhr.response);
        };

        xhr.send(formData);
      });
    },
    // change name
    changedNamePatent: function changedNamePatent(event, request) {
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var input_name = event.querySelector("".concat(target, ".form-box__input-text--patents"));
      var execution = false;
      var time;
      input_name.addEventListener('input', function () {
        input_name.defaultValue = input_name.value;
        var formData = new FormData(event);
        if (execution == true) clearTimeout(time);
        execution = true;
        time = setTimeout(function () {
          sendRequest('POST', request, formData)["catch"](function (err) {
            return console.log(err);
          });
          execution = false;
        }, 500);
      });
    },
    // change text AboutUs
    changedTextAboutUs: function changedTextAboutUs(event, request) {
      var textAboutUs = document.querySelector('.form-box__textarea--about-us');
      var execution = false;
      var time;
      var textarea_value = textAboutUs.value;
      setInterval(function () {
        if (textAboutUs.value != textarea_value) {
          var formData = new FormData(event);
          if (execution == true) clearTimeout(time);
          execution = true;
          time = setTimeout(function () {
            sendRequest('POST', request, formData)["catch"](function (err) {
              return console.log(err);
            });
            execution = false;
          }, 500);
        }

        textarea_value = textAboutUs.value;
      }, 500);
    },
    // change_main_page_inf
    change_main_page_inf: function change_main_page_inf(editor, id, text, request) {
      editor.addEventListener('DOMSubtreeModified', function () {
        var formData = new FormData();
        formData.append('id', id);
        formData.append('text', text.getData());
        sendRequest('POST', request, formData)["catch"](function (err) {
          return console.log(err);
        });
      });
    },
    // change_contacts
    change_contacts: function change_contacts(editor, id, text, request) {
      editor.addEventListener('DOMSubtreeModified', function () {
        var formData = new FormData();
        formData.append('id', id);
        formData.append('contact', text.getData());
        sendRequest('POST', request, formData)["catch"](function (err) {
          return console.log(err);
        });
      });
    },
    changedNameAndDescDev: function changedNameAndDescDev(event, request) {
      var text_fields;

      if (document.querySelector('.development__input-text, .development__textarea')) {
        text_fields = document.querySelectorAll('.development__input-text, .development__textarea');
      } else if (document.querySelector('.form-box__input-text--article, .article__text')) {
        text_fields = document.querySelectorAll('.form-box__input-text--article, .article__text');
      }

      text_fields.forEach(function (element) {
        var execution = false;
        var time;

        if (element.type == 'textarea') {
          var textarea_value = element.value;
          setInterval(function () {
            if (element.value != textarea_value) {
              var formData = new FormData(event);
              if (execution == true) clearTimeout(time);
              execution = true;
              time = setTimeout(function () {
                sendRequest('POST', request, formData)["catch"](function (err) {
                  return console.log(err);
                });
                execution = false;
              }, 500);
            }

            textarea_value = element.value;
          }, 500);
        }

        element.addEventListener('input', function () {
          var formData = new FormData(event);
          if (execution == true) clearTimeout(time);
          execution = true;
          time = setTimeout(function () {
            sendRequest('POST', request, formData)["catch"](function (err) {
              return console.log(err);
            });
            execution = false;
          }, 500);
        });
      });
    },
    changeCategory: function changeCategory(event, request) {
      var selectCategory = event.parentElement.querySelector('.dropdown__list--change-category');
      selectCategory.addEventListener('change', function () {
        var formData = new FormData(event);
        sendRequest('POST', request, formData)["catch"](function (err) {
          return console.log(err);
        });
      });
    },
    // request
    requestBtn: function requestBtn(event, request) {
      var btn = event.querySelector('button');
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var formData = new FormData(event);
        event.classList.add('formSend');
        event.querySelector('.form__button').classList.add('sendFormButton');
        sendRequest('POST', request, formData).then(function (data) {
          if (event.querySelector('.error')) {
            var errors = event.querySelectorAll('.error');
            errors.forEach(function (error) {
              return error.remove();
            });
          }

          response(event, data, request);
        })["catch"](function (err) {
          // console.log(err)
          event.classList.remove('formSend');
          event.querySelector('.form__button').classList.remove('sendFormButton');

          if (event.querySelector('.error')) {
            var errors = event.querySelectorAll('.error');
            errors.forEach(function (error) {
              return error.remove();
            });
          }

          for (var key in err.errors) {
            var inputField = event.querySelector("[name*=\"".concat(key, "\"]"));
            var errorField = document.createElement('div');
            errorField.className = 'error';
            errorField.textContent = "".concat(err.errors[key]);
            if (inputField.parentElement.id != 'selectCategory') event.insertBefore(errorField, inputField.parentElement);else event.insertBefore(errorField, inputField.parentElement.parentElement);
          }
        });
      });
    },
    response: function response(event, data, request) {
      event.classList.remove('formSend');
      event.querySelector('.form__button').classList.remove('sendFormButton');
      var successPopUp = document.createElement('div');
      successPopUp.className = 'successPopUp';
      successPopUp.textContent = 'Выполнено успешно';
      document.body.append(successPopUp);
      setTimeout(function () {
        return successPopUp.remove();
      }, 3000);

      if (event.querySelector('[type="file"]')) {
        var inputImg = event.querySelectorAll('[type="file"]');
        inputImg.forEach(function (element) {
          return element.value = null;
        });
      }

      switch (request) {
        case window.location.origin + '/api/' + 'upload_patent':
          var patents = document.querySelector('.grid--patents');
          patents.insertAdjacentHTML('beforeend', patent_item_add(data));
          event.querySelector('[name="name"]').value = '';
          event.querySelector('.preview').remove();
          forTheEntireWindow('.patents__item:nth-last-child(1) ');
          uploadFiles('.patents__item:nth-last-child(1) ');
          var formsPatentAdd = document.querySelectorAll('.patents__item:nth-last-child(1) .form');
          formsPatentAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          var form = document.querySelector('.patents__item:nth-last-child(1) [name="name"]').closest('form');
          changedNamePatent(form, form.action, '.patents__item:nth-last-child(1) ');
          break;

        case window.location.origin + '/api/' + 'delete_patent':
          var patent_item_delete = event.closest('.patents__item');
          patent_item_delete.classList.add('removing');
          patent_item_delete.addEventListener('transitionend', function () {
            return patent_item_delete.remove();
          });
          break;

        case window.location.origin + '/api/' + 'change_patent':
          var patent_item_change = event.closest('.patents__item');
          patent_item_change.querySelector('.patents__thumbnail-img').src = data.patent.patent_preview_small;
          patent_item_change.querySelector('.for-the-entire-window img').dataset.big = data.patent.patent_preview_big;
          event.querySelector('.preview').remove();
          break;

        case window.location.origin + '/api/' + 'upload_development':
          var developments = document.querySelector('.grid--developments');

          var categories = function categories() {
            var category = data.development.category;
            var categoriesArr = data.development.categories;
            var categoriesStr = '';

            for (var index = 0; index < categoriesArr.length; index++) {
              if (category == categoriesArr[index]) categoriesStr += "<option class=\"dropdown__item\" selected>".concat(categoriesArr[index], "</option>\n");else categoriesStr += "<option class=\"dropdown__item\">".concat(categoriesArr[index], "</option>\n");
            }

            return categoriesStr;
          };

          developments.insertAdjacentHTML('beforeend', development_item_add(data, categories()));
          uploadFiles('.developments__item:nth-last-child(1) ');
          forTheEntireWindow('.developments__item:nth-last-child(1) ');
          var formCategoryChange = document.querySelector('.developments__item:nth-last-child(1) form[action*="change_category"]');
          changeCategory(formCategoryChange, formCategoryChange.action);
          var formsDevAdd = document.querySelectorAll('.developments__item:nth-last-child(1) .form');
          formsDevAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          event.querySelector('[name="name"]').value = '';
          var previewAll = event.querySelectorAll('.preview');
          previewAll.forEach(function (preview) {
            return preview.remove();
          });
          break;

        case window.location.origin + '/api/' + 'delete_development':
          var development_item_delete = event.closest('.developments__item');
          development_item_delete.classList.add('removing');
          development_item_delete.addEventListener('transitionend', function () {
            return development_item_delete.remove();
          });
          break;

        case window.location.origin + '/api/' + 'change_development_preview_image':
          var development_item_change = event.closest('.developments__item');
          development_item_change.querySelector('.developments__thumbnail-img').src = data.development.development_preview_small;
          development_item_change.querySelector('.for-the-entire-window').dataset.big = data.development.development_preview_big;
          event.querySelector('.preview').remove();
          break;

        case window.location.origin + '/api/' + 'add_development_image':
          var development_thumbnail = document.querySelector('.development__thumbnail');
          var size = Object.keys(data.development_images).length;

          for (var key in data.development_images) {
            development_thumbnail.insertAdjacentHTML('beforeend', development_images_add(data.development_images[key]));
          }

          event.querySelector('.preview').remove();
          var formsImgAdd;

          if (document.querySelector('.development__thumbnail').children.length > 1) {
            forTheEntireWindow(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
            deleteImage(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
            formsImgAdd = document.querySelectorAll(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image .form"));
          } else {
            forTheEntireWindow('.development__thumbnail-image ');
            deleteImage('.development__thumbnail-image ');
            formsImgAdd = document.querySelectorAll(".development__thumbnail-image .form");
          }

          formsImgAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'delete_image_development':
          var development_image = event.closest('.development__thumbnail-image');
          development_image.classList.add('removing');
          development_image.addEventListener('transitionend', function () {
            return development_image.remove();
          });
          break;

        case window.location.origin + '/api/' + 'add_article':
          event.querySelector('.form-box__input-text').value = ''; // event.querySelector('.form-box__textarea').value = ''

          var articles = document.querySelector('.articles .grid');
          articles.insertAdjacentHTML('beforeend', article_add(data));
          var formsArticle = document.querySelectorAll('.article:nth-last-child(1) .form');
          formsArticle.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'delete_article':
          var article = event.closest('.article');
          article.classList.add('removing');
          article.addEventListener('transitionend', function () {
            return article.remove();
          });
          break;

        case window.location.origin + '/api/' + 'add_category':
          var categoriesBlock = document.querySelector('.categories');
          event.querySelector('.form-box__input-text').value = '';
          categoriesBlock.insertAdjacentHTML('beforeend', category_add(data, false, false, true));
          var formsCategory = document.querySelectorAll('.categories:nth-last-child(1) .form');
          formsCategory.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'change_category_name':
          var categoryName = event.parentElement.querySelector('.category__name');
          categoryName.textContent = data.category;
          var category_name = event.closest('.category').querySelectorAll('.category__arrow-down [name="category"], .category__arrow-up [name="category"]');
          console.log(category_name);
          category_name.forEach(function (element) {
            element.value = data.category;
          });
          break;

        case window.location.origin + '/api/' + 'delete_category':
          var category = event.closest('.category');
          category.classList.add('removing');
          category.addEventListener('transitionend', function () {
            return category.remove();
          });
          break;

        case window.location.origin + '/api/' + 'up_rotate_category':
          var categoriesBlockUp = event.closest('.categories');
          var categoryBlockUp = event.parentElement.parentElement;
          var categoryBlockPrevious = event.parentElement.parentElement.previousElementSibling;
          var categoryBlockUpIDTarget;

          for (var index = 0; index < categoriesBlockUp.children.length; index++) {
            if (categoryBlockUp == categoriesBlockUp.children[index]) {
              categoryBlockUpIDTarget = index + 1;
            }
          }

          var categoryBlockUpIDPrevious;

          for (var _index = 0; _index < categoriesBlockUp.children.length; _index++) {
            if (categoryBlockPrevious == categoriesBlockUp.children[_index]) {
              categoryBlockUpIDPrevious = _index + 1;
            }
          }

          categoryBlockUp.remove();
          categoryBlockPrevious.insertAdjacentHTML('beforebegin', category_add(data, data.withoutCategory, data.min, data.max, true, false, false));
          categoryBlockPrevious.querySelectorAll('[name="rotating_id"]').forEach(function (element) {
            element.value = data.rotate_id;
          });

          if (data.max || data.maximalTarget) {
            categoryBlockPrevious.querySelector('.category__arrow-down').remove();
          }

          if (data.min) {
            categoryBlockPrevious.insertAdjacentHTML('afterbegin', category_add(data, data.withoutCategory, false, false, false, data.min, false));
            var formArrowUpBlock = categoryBlockPrevious.querySelector('.category__arrow-up .form');
            formArrowUpBlock.querySelector('[name="rotating_id"]').value = data.rotate_id;
            formArrowUpBlock.querySelector('[name="category"]').value = data.category_rotate;
            requestBtn(formArrowUpBlock, formArrowUpBlock.action);
            rotateCategory(".category:nth-child(".concat(categoryBlockUpIDPrevious, ") "), true, false);
          }

          var targetCategoryFormsUp = categoriesBlockUp.querySelectorAll('.rotating-category .form');
          targetCategoryFormsUp.forEach(function (form) {
            requestBtn(form, form.action);
          });
          rotateCategory(".category:nth-child(".concat(categoryBlockUpIDTarget, ") "), false, false);
          categoriesBlockUp.querySelector('.rotating-category').classList.remove('rotating-category');
          break;

        case window.location.origin + '/api/' + 'down_rotate_category':
          var categoriesBlockDown = event.closest('.categories');
          var categoryBlockTarget = event.parentElement.parentElement;
          var categoryBlockNext = event.parentElement.parentElement.nextElementSibling;
          var categoryBlockDownIDTarget;

          for (var _index2 = 0; _index2 < categoriesBlockDown.children.length; _index2++) {
            if (categoryBlockTarget == categoriesBlockDown.children[_index2]) {
              categoryBlockDownIDTarget = _index2 + 1;
            }
          }

          var categoryBlockDownIDNext;

          for (var _index3 = 0; _index3 < categoriesBlockDown.children.length; _index3++) {
            if (categoryBlockNext == categoriesBlockDown.children[_index3]) {
              categoryBlockDownIDNext = _index3 + 1;
            }
          }

          categoryBlockTarget.remove();
          categoryBlockNext.insertAdjacentHTML('afterend', category_add(data, data.withoutCategory, data.min, data.max, true, false, false));
          categoryBlockNext.querySelectorAll('.category [name="rotating_id"]').forEach(function (element) {
            element.value = data.rotate_id;
          });

          if (data.min || data.minimalTarget) {
            categoryBlockNext.querySelector('.category__arrow-up').remove();
          }

          if (data.max) {
            categoryBlockNext.insertAdjacentHTML('beforeend', category_add(data, data.withoutCategory, false, false, false, false, data.max));
            var formArrowDownBlock = categoryBlockNext.querySelector('.category__arrow-down .form');
            formArrowDownBlock.querySelector('[name="rotating_id"]').value = data.rotate_id;
            formArrowDownBlock.querySelector('[name="category"]').value = data.category_rotate;
            requestBtn(formArrowDownBlock, formArrowDownBlock.action);
            rotateCategory(".category:nth-child(".concat(categoryBlockDownIDNext, ") "), false, true);
          }

          if (data.min) {
            categoryBlockNext.querySelector('.category__arrow-up').remove();
          }

          var targetCategoryFormsDown = categoriesBlockDown.querySelectorAll('.rotating-category .form');
          targetCategoryFormsDown.forEach(function (form) {
            requestBtn(form, form.action);
          });
          rotateCategory(".category:nth-child(".concat(categoryBlockDownIDTarget, ") "), false, false);
          categoriesBlockDown.querySelector('.rotating-category').classList.remove('rotating-category');
          break;
      }
    }
  }
};
var uploadFiles = func.uploadFiles;
var lazyLoadImage = func.lazyLoad;
var animateEmergence = func.animateEmergence;
var forTheEntireWindow = func.forTheEntireWindow;
var deleteImage = func.deleteImage;
var rotateCategory = func.rotateCategory;
var hamburger = func.hamburger;
var textEditor = func.textEditor;
var changeImage = func.changeImage; // export const textEdited = func.textEdited

var sortCategory = func.sortCategory;
var upButton = func.upButton;
var dragAndDrop = func.dragAndDrop;
var patent_item_add = func.ajax.patent_item_add;
var development_item_add = func.ajax.development_item_add;
var development_images_add = func.ajax.development_images_add;
var category_add = func.ajax.category_add;
var article_add = func.ajax.article_add;
var sendRequest = func.ajax.sendRequest;
var changedNamePatent = func.ajax.changedNamePatent;
var changedTextAboutUs = func.ajax.changedTextAboutUs;
var change_main_page_inf = func.ajax.change_main_page_inf;
var change_contacts = func.ajax.change_contacts;
var changedNameAndDescDev = func.ajax.changedNameAndDescDev;
var changeCategory = func.ajax.changeCategory;
var response = func.ajax.response;
var requestBtn = func.ajax.requestBtn;

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func.js */ "./resources/js/func.js");

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('[enctype="multipart/form-data"]:not(.change-image)')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["uploadFiles"])();
  if (document.querySelector('img')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["lazyLoadImage"])();
  if (document.querySelector('.animate-emergence')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["animateEmergence"])();
  if (document.querySelector('.for-the-entire-window')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["forTheEntireWindow"])();
  if (document.querySelector('.delete-image')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["deleteImage"])();
  if (document.querySelector('.rotate-categories')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["rotateCategory"])();
  if (document.querySelector('.hamburger')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["hamburger"])();
  if (document.querySelector('textarea') || document.querySelector('.baloon') && document.querySelector('#balloon')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["textEditor"])();
  if (document.querySelector('.change-image')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changeImage"])(); // if (document.querySelector('pre')) textEdited()
  // if (document.querySelector('.dropdown--select-category')) selectCategory()

  if (document.querySelector('.dropdown__list--sort')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["sortCategory"])();
  if (document.querySelector('#upButton')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["upButton"])();
  if (document.querySelector('.dragdrop')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["dragAndDrop"])(); // validation email
  // preg_match('/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u', $item)
});

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenServer\domains\ctek\resources\js\main.js */"./resources/js/main.js");


/***/ })

/******/ });