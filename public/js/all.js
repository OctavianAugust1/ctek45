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
    if (event.querySelector('textarea')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changedNameAndDescDev"])(event, request);
    if (event.querySelector('.dropdown__input-text--change-category')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["changeCategory"])(event, request);
    if (event.querySelector('button')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["requestBtn"])(event, request);
  });
});

/***/ }),

/***/ "./resources/js/func.js":
/*!******************************!*\
  !*** ./resources/js/func.js ***!
  \******************************/
/*! exports provided: uploadFiles, lazyLoadImage, animateEmergence, forTheEntireWindow, deleteImage, hamburger, textEditor, textEdited, selectCategory, sortCategory, upButton, patent_item_add, development_item_add, development_images_add, sendRequest, changedNamePatent, changedNameAndDescDev, changeCategory, response, requestBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadImage", function() { return lazyLoadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateEmergence", function() { return animateEmergence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forTheEntireWindow", function() { return forTheEntireWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textEditor", function() { return textEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textEdited", function() { return textEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategory", function() { return selectCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCategory", function() { return sortCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upButton", function() { return upButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patent_item_add", function() { return patent_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_item_add", function() { return development_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_images_add", function() { return development_images_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNamePatent", function() { return changedNamePatent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNameAndDescDev", function() { return changedNameAndDescDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCategory", function() { return changeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "response", function() { return response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBtn", function() { return requestBtn; });
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
            if (!event.target.files.length) {
              input_img.removeEventListener("change", change);
              input_img.value = '';
              return;
            }

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
                preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path data-name=\"".concat(file.name, "\" fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"));
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
  lazyLoad: function lazyLoad() {
    var images = document.querySelectorAll('img');
    var options = {
      root: null,
      threshold: 0.1
    };

    function handleImg(myImg, observer) {
      myImg.forEach(function (myImgSingle) {
        if (myImgSingle.intersectionRatio > 0) {
          loadImage(myImgSingle.target);
        }
      });
    }

    function loadImage(image) {
      image.src = image.getAttribute('data');
    }

    var observer = new IntersectionObserver(handleImg, options);
    images.forEach(function (img) {
      observer.observe(img);
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
        var body = document.querySelector('body');
        body.classList.add('modal-open');
        var modal = document.createElement("div");
        modal.className = "modal";
        var form = document.createElement("div");
        form.className = "modal__form";
        var image = document.createElement("img");
        image.src = event.target.parentElement.dataset.big;
        image.alt = "";
        image.className = "modal__image";
        var background = document.createElement("div");
        background.className = "modal__bg-modal";
        var close = document.createElement("div");
        close.className = "modal__close";
        close.insertAdjacentHTML('afterbegin', closeSvg);

        close.onclick = function () {
          close.closest('.modal').remove();
          body.classList.remove('modal-open');
        };

        background.onclick = function () {
          background.closest('.modal').remove();
          body.classList.remove('modal-open');
        };

        form.append(background, image, close);
        modal.append(form);
        document.body.append(modal);
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
  hamburger: function hamburger() {
    var hamburger = document.querySelector('.hamburger');
    var body = document.body;
    hamburger.addEventListener('click', function () {
      var modal = document.createElement('div');
      modal.className = 'modal';
      body.append(modal);
      body.className = 'modal-open';
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
    var tabletWidth = 1020;
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
    var editor;
    var textareaField = document.querySelector('textarea:not([name="message"]');
    var config = {
      toolbar: ['bold', 'italic',
      /*'blockQuote',*/
      '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo']
    };
    ClassicEditor.create(textareaField, config).then(function (newEditor) {
      return editor = newEditor;
    })["catch"](function (error) {
      return console.error(error);
    });
    setTimeout(function () {
      if (document.querySelector('.ck .ck-editor__editable')) {
        var editedText = document.querySelector('.ck .ck-editor__editable');
        editedText.addEventListener('DOMSubtreeModified', function () {
          setTimeout(function () {
            textareaField.value = editor.getData();
          });
        });
      }
    });
  },
  textEdited: function textEdited() {
    var dev_desc = document.querySelector('pre');
    var dev_desc_text = dev_desc.outerText;
    dev_desc.textContent = '';
    dev_desc.insertAdjacentHTML('beforeend', dev_desc_text);
  },
  selectCategory: function selectCategory() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var selectCategory = document.querySelectorAll("".concat(target, ".dropdown--select-category"));
    selectCategory.forEach(function (element) {
      var selectCategoryInput = element.querySelector('.dropdown__input-text--select-category');
      var selectCategoryList = element.querySelector('.dropdown__list--select-category');
      selectCategoryInput.value = selectCategoryList.value;
      element.addEventListener('change', function (event) {
        selectCategoryInput.value = event.target.value;
      });
    });
  },
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
      if (pageYOffset < document.documentElement.clientHeight) upBtn.style.opacity = 0;else upBtn.style.opacity = 1;
    });
  },
  ajax: {
    // HTML
    patent_item_add: function patent_item_add(data) {
      return "\n\t\t\t\t<div class=\"patents__item\">\n\t\t\t\t\t<div class=\"patents__thumbnail\">\n\t\t\t\t\t\t<div class=\"for-the-entire-window\" data-big=\"".concat(data.patent.patent_preview_big, "\">\n\t\t\t\t\t\t\t<img class=\"for-the-entire-window__icon\" src=\"").concat(window.location.origin, "/public/image/other/expand.svg\" data=\"").concat(window.location.origin, "/public/image/other/expand.svg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"patents__thumbnail-image\"><img class=\"patents__thumbnail-img\" src=\"").concat(data.patent.patent_preview_small, "\" data=\"").concat(data.patent.patent_preview_small, "\" alt=\"\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--change-text\" action=\"").concat(window.location.origin, "/api/change_information_patent\" method=\"POST\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-text form-box__input-text--patents\" type=\"text\" name=\"name\" value=\"").concat(data.patent.name, "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/change_patent\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"image_patent\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/delete_patent\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"patent_id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_item_add: function development_item_add(data, categories) {
      return "\n\t\t\t\t<div class=\"developments__item\">\n\t\t\t\t\t<div class=\"developments__thumbnail\">\n\t\t\t\t\t\t<div class=\"for-the-entire-window\" data-big=\"".concat(data.development.development_preview_big, "\">\n\t\t\t\t\t\t<img class=\"for-the-entire-window__icon\" src=\"").concat(window.location.origin, "/public/image/other/expand.svg\" data=\"").concat(window.location.origin, "/public/image/other/expand.svg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<img class=\"developments__thumbnail-img\" src=\"").concat(data.development.development_preview_small, "\" data=\"").concat(data.development.development_preview_small, "\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"developments__name\">").concat(data.development.name, "</span>\n\t\t\t\t\t<span class=\"caption\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</span>\n\t\t\t\t\t<div class=\"dropdown dropdown--select-category\">\n\t\t\t\t\t\t<form class=\"form form--dropdown\" action=\"").concat(window.location.origin, "/api/change_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t\t<input class=\"dropdown__input-text--select-category dropdown__input-text--change-category\" type=\"text\" value=\"").concat(data.development.category, "\" name=\"category\">\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<select class=\"dropdown__list dropdown__list--select-category\">\n\t\t\t\t\t\t\t<option class=\"dropdown__item dropdown__item--disabled\" disabled>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:</option>\n\t\t\t\t\t\t\t").concat(categories, "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form developments__item--form\" action=\"").concat(window.location.origin, "/api/change_development_preview_image\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t<div class=\"form-box\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"preview_development\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<a class=\"link button\" href=\"").concat(window.location.origin, "/development/").concat(data.development.id, "\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_images_add: function development_images_add(data) {
      return "\n\t\t\t\t<div class=\"development__thumbnail-image\">\n\t\t\t\t\t<img class=\"development__thumbnail-img\" src=\"".concat(window.location.origin, "/").concat(data.development_preview_small, "\" data=\"").concat(window.location.origin, "/").concat(data.development_preview_small, "\" alt=\"\">\n\t\t\t\t\t<div class=\"for-the-entire-window\" data-big=\"").concat(window.location.origin, "/").concat(data.development_preview_big, "\">\n\t\t\t\t\t\t<img class=\"for-the-entire-window__icon\" src=\"").concat(window.location.origin, "/public/image/other/expand.svg\" data=\"").concat(window.location.origin, "/public/image/other/expand.svg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"delete-image\">\n\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--development__thumbnail\" action=\"").concat(window.location.origin, "/api/delete_image_development\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"path\" value=\"").concat(window.location.origin, "/").concat(data.development_preview_small, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    // send ajax
    sendRequest: function sendRequest(method, url) {
      var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
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
      input_name.addEventListener('input', function (e) {
        input_name.defaultValue = input_name.value;
        var formData = new FormData(event);
        sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
          formData.append('api_token', data.api_token);
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
    changedNameAndDescDev: function changedNameAndDescDev(event, request) {
      var text_fields = document.querySelectorAll('.development__input-text, .development__textarea');
      text_fields.forEach(function (element) {
        var execution = false;
        var time;

        if (element.type == 'textarea') {
          var textarea_value = element.value;
          setInterval(function () {
            if (element.value != textarea_value) {
              var formData = new FormData(event);
              sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
                formData.append('api_token', data.api_token);
                if (execution == true) clearTimeout(time);
                execution = true;
                time = setTimeout(function () {
                  sendRequest('POST', request, formData)["catch"](function (err) {
                    return console.log(err);
                  });
                  execution = false;
                }, 500);
              });
            }

            textarea_value = element.value;
          }, 500);
        }

        element.addEventListener('input', function () {
          var formData = new FormData(event);
          sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
            formData.append('api_token', data.api_token);
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
      });
    },
    changeCategory: function changeCategory(event, request) {
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      function sendChangeCategory(event, request, time, execution) {
        var formData = new FormData(event);
        sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
          formData.append('api_token', data.api_token);
          if (execution == true) clearTimeout(time);
          execution = true;
          time = setTimeout(function () {
            sendRequest('POST', request, formData)["catch"](function (err) {
              return console.log(err);
            });
            execution = false;
          }, 500);
        });
      }

      var inputCategory = event.querySelector("".concat(target, ".dropdown__input-text--change-category"));
      var execution = false;
      var time;
      inputCategory.addEventListener('input', function (e) {
        return sendChangeCategory(event, request, time, execution);
      });
      var selectCategory = event.parentElement.querySelector('select');
      selectCategory.addEventListener('change', function () {
        return setTimeout(function () {
          return sendChangeCategory(event, request, time, execution);
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
        sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
          formData.append('api_token', data.api_token);
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
        })["catch"]();
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

      switch (request) {
        case window.location.origin + '/api/' + 'mail':
          // event.querySelector('[name="email"]').value = ''
          // event.querySelector('[name="name"]').value = ''
          // event.querySelector('.fr-view').value = ''
          break;

        case window.location.origin + '/api/' + 'upload_patent':
          var patents = document.querySelector('.grid--patents');
          patents.insertAdjacentHTML('beforeend', patent_item_add(data));
          event.querySelector('[name="name"]').value = '';
          event.querySelector('.preview').remove();
          forTheEntireWindow('.patents__item:nth-last-child(1) ');
          uploadFiles('.patents__item:nth-last-child(1) ');
          changedNamePatent('.patents__item:nth-last-child(1) ');
          var formsPatentAdd = document.querySelectorAll('.patents__item:nth-last-child(1) .form');
          formsPatentAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
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
          patent_item_change.querySelector('.for-the-entire-window').dataset.big = data.patent.patent_preview_big;
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
          selectCategory('.developments__item:nth-last-child(1) ');
          var formCategoryChange = document.querySelector('.developments__item:nth-last-child(1) form[action*="change_category"]');
          changeCategory(formCategoryChange, formCategoryChange.action, '.developments__item:nth-last-child(1) ');
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
          document.querySelectorAll('input, button').forEach(function (element) {
            element.classList.add('disabled-hover');
            element.setAttribute('disabled', 'disabled');
          });
          setTimeout(function () {
            return document.location.href = "".concat(window.location.origin, "/developments");
          }, 3000);
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
          forTheEntireWindow(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
          deleteImage(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
          var formsImgAdd = document.querySelectorAll(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image .form"));
          formsImgAdd.forEach(function (form) {
            return requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'delete_image_development':
          var development_image = event.closest('.development__thumbnail-image');
          development_image.classList.add('removing');
          development_image.addEventListener('transitionend', function () {
            return development_image.remove();
          });
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
var hamburger = func.hamburger;
var textEditor = func.textEditor;
var textEdited = func.textEdited;
var selectCategory = func.selectCategory;
var sortCategory = func.sortCategory;
var upButton = func.upButton;
var patent_item_add = func.ajax.patent_item_add;
var development_item_add = func.ajax.development_item_add;
var development_images_add = func.ajax.development_images_add;
var sendRequest = func.ajax.sendRequest;
var changedNamePatent = func.ajax.changedNamePatent;
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
/*! exports provided: uploadFiles, lazyLoadImage, animateEmergence, forTheEntireWindow, deleteImage, hamburger, textEditor, textEdited, selectCategory, sortCategory, upButton, patent_item_add, development_item_add, development_images_add, sendRequest, changedNamePatent, changedNameAndDescDev, changeCategory, response, requestBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadImage", function() { return lazyLoadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateEmergence", function() { return animateEmergence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forTheEntireWindow", function() { return forTheEntireWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textEditor", function() { return textEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textEdited", function() { return textEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategory", function() { return selectCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCategory", function() { return sortCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upButton", function() { return upButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patent_item_add", function() { return patent_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_item_add", function() { return development_item_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development_images_add", function() { return development_images_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNamePatent", function() { return changedNamePatent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedNameAndDescDev", function() { return changedNameAndDescDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCategory", function() { return changeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "response", function() { return response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestBtn", function() { return requestBtn; });
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
            if (!event.target.files.length) {
              input_img.removeEventListener("change", change);
              input_img.value = '';
              return;
            }

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
                preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path data-name=\"".concat(file.name, "\" fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"));
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
  lazyLoad: function lazyLoad() {
    var images = document.querySelectorAll('img');
    var options = {
      root: null,
      threshold: 0.1
    };

    function handleImg(myImg, observer) {
      myImg.forEach(function (myImgSingle) {
        if (myImgSingle.intersectionRatio > 0) {
          loadImage(myImgSingle.target);
        }
      });
    }

    function loadImage(image) {
      image.src = image.getAttribute('data');
    }

    var observer = new IntersectionObserver(handleImg, options);
    images.forEach(function (img) {
      observer.observe(img);
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
        var body = document.querySelector('body');
        body.classList.add('modal-open');
        var modal = document.createElement("div");
        modal.className = "modal";
        var form = document.createElement("div");
        form.className = "modal__form";
        var image = document.createElement("img");
        image.src = event.target.parentElement.dataset.big;
        image.alt = "";
        image.className = "modal__image";
        var background = document.createElement("div");
        background.className = "modal__bg-modal";
        var close = document.createElement("div");
        close.className = "modal__close";
        close.insertAdjacentHTML('afterbegin', closeSvg);

        close.onclick = function () {
          close.closest('.modal').remove();
          body.classList.remove('modal-open');
        };

        background.onclick = function () {
          background.closest('.modal').remove();
          body.classList.remove('modal-open');
        };

        form.append(background, image, close);
        modal.append(form);
        document.body.append(modal);
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
  hamburger: function hamburger() {
    var hamburger = document.querySelector('.hamburger');
    var body = document.body;
    hamburger.addEventListener('click', function () {
      var modal = document.createElement('div');
      modal.className = 'modal';
      body.append(modal);
      body.className = 'modal-open';
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
    var tabletWidth = 1020;
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
    var editor;
    var textareaField = document.querySelector('textarea:not([name="message"]');
    var config = {
      toolbar: ['bold', 'italic',
      /*'blockQuote',*/
      '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo']
    };
    ClassicEditor.create(textareaField, config).then(function (newEditor) {
      return editor = newEditor;
    })["catch"](function (error) {
      return console.error(error);
    });
    setTimeout(function () {
      if (document.querySelector('.ck .ck-editor__editable')) {
        var editedText = document.querySelector('.ck .ck-editor__editable');
        editedText.addEventListener('DOMSubtreeModified', function () {
          setTimeout(function () {
            textareaField.value = editor.getData();
          });
        });
      }
    });
  },
  textEdited: function textEdited() {
    var dev_desc = document.querySelector('pre');
    var dev_desc_text = dev_desc.outerText;
    dev_desc.textContent = '';
    dev_desc.insertAdjacentHTML('beforeend', dev_desc_text);
  },
  selectCategory: function selectCategory() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var selectCategory = document.querySelectorAll("".concat(target, ".dropdown--select-category"));
    selectCategory.forEach(function (element) {
      var selectCategoryInput = element.querySelector('.dropdown__input-text--select-category');
      var selectCategoryList = element.querySelector('.dropdown__list--select-category');
      selectCategoryInput.value = selectCategoryList.value;
      element.addEventListener('change', function (event) {
        selectCategoryInput.value = event.target.value;
      });
    });
  },
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
      if (pageYOffset < document.documentElement.clientHeight) upBtn.style.opacity = 0;else upBtn.style.opacity = 1;
    });
  },
  ajax: {
    // HTML
    patent_item_add: function patent_item_add(data) {
      return "\n\t\t\t\t<div class=\"patents__item\">\n\t\t\t\t\t<div class=\"patents__thumbnail\">\n\t\t\t\t\t\t<div class=\"for-the-entire-window\" data-big=\"".concat(data.patent.patent_preview_big, "\">\n\t\t\t\t\t\t\t<img class=\"for-the-entire-window__icon\" src=\"").concat(window.location.origin, "/public/image/other/expand.svg\" data=\"").concat(window.location.origin, "/public/image/other/expand.svg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"patents__thumbnail-image\"><img class=\"patents__thumbnail-img\" src=\"").concat(data.patent.patent_preview_small, "\" data=\"").concat(data.patent.patent_preview_small, "\" alt=\"\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--change-text\" action=\"").concat(window.location.origin, "/api/change_information_patent\" method=\"POST\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-text form-box__input-text--patents\" type=\"text\" name=\"name\" value=\"").concat(data.patent.name, "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/change_patent\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<div class=\"form-box form-box--patents\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"image_patent\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form class=\"form patents__form\" action=\"").concat(window.location.origin, "/api/delete_patent\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"patent_id\" value=\"").concat(data.patent.id, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_item_add: function development_item_add(data, categories) {
      return "\n\t\t\t\t<div class=\"developments__item\">\n\t\t\t\t\t<div class=\"developments__thumbnail\">\n\t\t\t\t\t\t<div class=\"for-the-entire-window\" data-big=\"".concat(data.development.development_preview_big, "\">\n\t\t\t\t\t\t<img class=\"for-the-entire-window__icon\" src=\"").concat(window.location.origin, "/public/image/other/expand.svg\" data=\"").concat(window.location.origin, "/public/image/other/expand.svg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<img class=\"developments__thumbnail-img\" src=\"").concat(data.development.development_preview_small, "\" data=\"").concat(data.development.development_preview_small, "\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"developments__name\">").concat(data.development.name, "</span>\n\t\t\t\t\t<span class=\"caption\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</span>\n\t\t\t\t\t<div class=\"dropdown dropdown--select-category\">\n\t\t\t\t\t\t<form class=\"form form--dropdown\" action=\"").concat(window.location.origin, "/api/change_category\" method=\"POST\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t\t<input class=\"dropdown__input-text--select-category dropdown__input-text--change-category\" type=\"text\" value=\"").concat(data.development.category, "\" name=\"category\">\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<select class=\"dropdown__list dropdown__list--select-category\">\n\t\t\t\t\t\t\t<option class=\"dropdown__item dropdown__item--disabled\" disabled>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:</option>\n\t\t\t\t\t\t\t").concat(categories, "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form developments__item--form\" action=\"").concat(window.location.origin, "/api/change_development_preview_image\" method=\"POST\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"").concat(data.development.id, "\">\n\t\t\t\t\t\t<div class=\"form-box\">\n\t\t\t\t\t\t\t<input class=\"form-box__input-file\" type=\"file\" name=\"preview_development\" accept=\"image/*\">\n\t\t\t\t\t\t\t<input class=\"input-button form-box__input-btn\" type=\"button\" value=\"\u041E\u0431\u0437\u043E\u0440\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"form__button\">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<a class=\"link button\" href=\"").concat(window.location.origin, "/development/").concat(data.development.id, "\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n\t\t\t\t</div>\n\t\t\t");
    },
    development_images_add: function development_images_add(data) {
      return "\n\t\t\t\t<div class=\"development__thumbnail-image\">\n\t\t\t\t\t<img class=\"development__thumbnail-img\" src=\"".concat(window.location.origin, "/").concat(data.development_preview_small, "\" data=\"").concat(window.location.origin, "/").concat(data.development_preview_small, "\" alt=\"\">\n\t\t\t\t\t<div class=\"for-the-entire-window\" data-big=\"").concat(window.location.origin, "/").concat(data.development_preview_big, "\">\n\t\t\t\t\t\t<img class=\"for-the-entire-window__icon\" src=\"").concat(window.location.origin, "/public/image/other/expand.svg\" data=\"").concat(window.location.origin, "/public/image/other/expand.svg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"delete-image\">\n\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form class=\"form form--development__thumbnail\" action=\"").concat(window.location.origin, "/api/delete_image_development\" method=\"POST\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"path\" value=\"").concat(window.location.origin, "/").concat(data.development_preview_small, "\">\n\t\t\t\t\t\t<button class=\"form__button\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t");
    },
    // send ajax
    sendRequest: function sendRequest(method, url) {
      var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
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
      input_name.addEventListener('input', function (e) {
        input_name.defaultValue = input_name.value;
        var formData = new FormData(event);
        sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
          formData.append('api_token', data.api_token);
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
    changedNameAndDescDev: function changedNameAndDescDev(event, request) {
      var text_fields = document.querySelectorAll('.development__input-text, .development__textarea');
      text_fields.forEach(function (element) {
        var execution = false;
        var time;

        if (element.type == 'textarea') {
          var textarea_value = element.value;
          setInterval(function () {
            if (element.value != textarea_value) {
              var formData = new FormData(event);
              sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
                formData.append('api_token', data.api_token);
                if (execution == true) clearTimeout(time);
                execution = true;
                time = setTimeout(function () {
                  sendRequest('POST', request, formData)["catch"](function (err) {
                    return console.log(err);
                  });
                  execution = false;
                }, 500);
              });
            }

            textarea_value = element.value;
          }, 500);
        }

        element.addEventListener('input', function () {
          var formData = new FormData(event);
          sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
            formData.append('api_token', data.api_token);
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
      });
    },
    changeCategory: function changeCategory(event, request) {
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      function sendChangeCategory(event, request, time, execution) {
        var formData = new FormData(event);
        sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
          formData.append('api_token', data.api_token);
          if (execution == true) clearTimeout(time);
          execution = true;
          time = setTimeout(function () {
            sendRequest('POST', request, formData)["catch"](function (err) {
              return console.log(err);
            });
            execution = false;
          }, 500);
        });
      }

      var inputCategory = event.querySelector("".concat(target, ".dropdown__input-text--change-category"));
      var execution = false;
      var time;
      inputCategory.addEventListener('input', function (e) {
        return sendChangeCategory(event, request, time, execution);
      });
      var selectCategory = event.parentElement.querySelector('select');
      selectCategory.addEventListener('change', function () {
        return setTimeout(function () {
          return sendChangeCategory(event, request, time, execution);
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
        sendRequest('POST', window.location.origin + '/api/api_token', formData).then(function (data) {
          formData.append('api_token', data.api_token);
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
        })["catch"]();
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

      switch (request) {
        case window.location.origin + '/api/' + 'mail':
          // event.querySelector('[name="email"]').value = ''
          // event.querySelector('[name="name"]').value = ''
          // event.querySelector('.fr-view').value = ''
          break;

        case window.location.origin + '/api/' + 'upload_patent':
          var patents = document.querySelector('.grid--patents');
          patents.insertAdjacentHTML('beforeend', patent_item_add(data));
          event.querySelector('[name="name"]').value = '';
          event.querySelector('.preview').remove();
          forTheEntireWindow('.patents__item:nth-last-child(1) ');
          uploadFiles('.patents__item:nth-last-child(1) ');
          changedNamePatent('.patents__item:nth-last-child(1) ');
          var formsPatentAdd = document.querySelectorAll('.patents__item:nth-last-child(1) .form');
          formsPatentAdd.forEach(function (form) {
            if (form.querySelector('button')) requestBtn(form, form.action);
          });
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
          patent_item_change.querySelector('.for-the-entire-window').dataset.big = data.patent.patent_preview_big;
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
          selectCategory('.developments__item:nth-last-child(1) ');
          var formCategoryChange = document.querySelector('.developments__item:nth-last-child(1) form[action*="change_category"]');
          changeCategory(formCategoryChange, formCategoryChange.action, '.developments__item:nth-last-child(1) ');
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
          document.querySelectorAll('input, button').forEach(function (element) {
            element.classList.add('disabled-hover');
            element.setAttribute('disabled', 'disabled');
          });
          setTimeout(function () {
            return document.location.href = "".concat(window.location.origin, "/developments");
          }, 3000);
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
          forTheEntireWindow(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
          deleteImage(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image "));
          var formsImgAdd = document.querySelectorAll(".development__thumbnail-image:nth-last-child(".concat(size + 1, ") ~ .development__thumbnail-image .form"));
          formsImgAdd.forEach(function (form) {
            return requestBtn(form, form.action);
          });
          break;

        case window.location.origin + '/api/' + 'delete_image_development':
          var development_image = event.closest('.development__thumbnail-image');
          development_image.classList.add('removing');
          development_image.addEventListener('transitionend', function () {
            return development_image.remove();
          });
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
var hamburger = func.hamburger;
var textEditor = func.textEditor;
var textEdited = func.textEdited;
var selectCategory = func.selectCategory;
var sortCategory = func.sortCategory;
var upButton = func.upButton;
var patent_item_add = func.ajax.patent_item_add;
var development_item_add = func.ajax.development_item_add;
var development_images_add = func.ajax.development_images_add;
var sendRequest = func.ajax.sendRequest;
var changedNamePatent = func.ajax.changedNamePatent;
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
  if (document.querySelector('[enctype="multipart/form-data"]')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["uploadFiles"])();
  if (document.querySelector('img')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["lazyLoadImage"])();
  if (document.querySelector('.animate-emergence')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["animateEmergence"])();
  if (document.querySelector('.for-the-entire-window')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["forTheEntireWindow"])();
  if (document.querySelector('.delete-image')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["deleteImage"])();
  if (document.querySelector('.hamburger')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["hamburger"])();
  if (document.querySelector('textarea')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["textEditor"])();
  if (document.querySelector('pre')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["textEdited"])();
  if (document.querySelector('.dropdown--select-category')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["selectCategory"])();
  if (document.querySelector('.dropdown__list--sort')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["sortCategory"])();
  if (document.querySelector('#upButton')) Object(_func_js__WEBPACK_IMPORTED_MODULE_0__["upButton"])(); // validation email
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