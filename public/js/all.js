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
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  function sendRequest(method, url) {
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');

      xhr.onload = function () {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = function () {
        reject(xhr.response);
      };

      xhr.send(body);
    });
  }

  var request = 'http://localhost:3000/api/upload_patent';
  var form = document.querySelectorAll('#upload_patent');
  form.forEach(function (event) {
    var btn = event.querySelector('button');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var body = new FormData(event);
      sendRequest('POST', request, body).then(function (data) {
        return console.log(data);
      })["catch"](function (err) {
        return console.log(err);
      });
    });
  });
});

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

__webpack_require__(/*! d:\OpenServer\domains\ctek\resources\js\ajax.js */"./resources/js/ajax.js");
module.exports = __webpack_require__(/*! d:\OpenServer\domains\ctek\resources\sass\main.sass */"./resources/sass/main.sass");


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

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var close_svg = "\n\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t<path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t</path>\n\t\t</svg>\n\t";

  if (document.querySelector('[enctype="multipart/form-data"]')) {
    var forms = document.querySelectorAll('[enctype="multipart/form-data"]');
    forms.forEach(function (form) {
      form.addEventListener('click', function (event) {
        if (event.target.type != 'button') return;
        var files = [];
        var btn_img = event.target;
        var input_img = btn_img.previousSibling.previousSibling; // const input_files = input_img.files

        input_img.value = '';
        input_img.click();
        var preview;

        if (btn_img.nextSibling.nodeName != 'DIV') {
          preview = document.createElement("div");
          preview.className = 'preview';
        } else preview = btn_img.nextSibling;

        var change = function change(event) {
          if (!event.target.files.length) return;
          btn_img.insertAdjacentElement("afterend", preview);
          files = Array.from(event.target.files); // files = Array.from([...event.target.files, ...input_files])
          // console.log(new File(...input_files))
          // input_img.files = new File([...event.target.files, ...input_files])
          // let r = [...event.target.files, ...input_files]
          // console.log(r)
          // console.log(input_img.files)

          preview.textContent = '';
          files.forEach(function (file) {
            if (!file.type.match("image")) return;
            var reader = new FileReader();

            reader.onload = function (event) {
              var src = event.target.result;
              preview.insertAdjacentHTML("afterbegin", "\n\t\t\t\t\t\t\t\t<div class=\"preview__image\">\n\t\t\t\t\t\t\t\t\t<div class=\"delete-image delete-image--preview__image\">\n\t\t\t\t\t\t\t\t\t\t<svg class=\"delete-image__svg\" viewBox=\"0 0 352 512\">\n\t\t\t\t\t\t\t\t\t\t\t<path data-name=\"".concat(file.name, "\" fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\">\n\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img class=\"preview__img\" src=\"").concat(src, "\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t"));
            };

            reader.readAsDataURL(file);
          });
          input_img.removeEventListener("change", change);
        };

        var remove = function remove(event) {
          if (!event.target.dataset.name) return;
          var name = event.target.dataset.name;
          files = files.filter(function (file) {
            return file.name !== name;
          });
          var block = document.querySelector("[data-name=\"".concat(name, "\"]")).closest('.preview__image');
          block.classList.add('preview__image--removing');

          if (block.parentElement.childElementCount == 1) {
            var preview_el = block.parentElement; // сделать асинхронное выполнение синхронным

            setTimeout(function () {
              return block.addEventListener('transitionend', function () {
                return block.remove();
              });
            });
            preview_el.remove();
          } else {
            setTimeout(function () {
              return block.addEventListener('transitionend', function () {
                return block.remove();
              });
            });
          }
        };

        input_img.addEventListener('change', change);
        preview.addEventListener('click', remove);
      });
    });
  }

  if (document.querySelector('img')) {
    var handleImg = function handleImg(myImg, observer) {
      myImg.forEach(function (myImgSingle) {
        if (myImgSingle.intersectionRatio > 0) {
          loadImage(myImgSingle.target);
        }
      });
    };

    var loadImage = function loadImage(image) {
      image.src = image.getAttribute('data');
    };

    var images = document.querySelectorAll('img');
    var options = {
      root: null,
      threshold: 0.1
    };
    var observer = new IntersectionObserver(handleImg, options);
    images.forEach(function (img) {
      observer.observe(img);
    });
  }

  if (document.querySelector('.animate-emergence')) {
    var animOnScroll = function animOnScroll(params) {
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
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    var animItems = document.querySelectorAll('.animate-emergence');
    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
  }

  if (document.querySelector('.changed_text')) {
    var changed_text = document.querySelectorAll('.changed_text');
    changed_text.forEach(function (element) {
      element.addEventListener('input', function (event) {
        event.target.defaultValue = event.target.value;
      });
    });
  }

  if (document.querySelector('.for-the-entire-window')) {
    var references = document.querySelectorAll('.for-the-entire-window');
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
        close.insertAdjacentHTML('afterbegin', close_svg);

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
  }

  if (document.querySelector('.delete_image_btn')) {
    var delete_image = document.querySelectorAll('.delete_image');
    delete_image.forEach(function (delete_img) {
      delete_img.addEventListener('click', function (event) {
        var image = event.target.closest('.image');
        image.querySelector('.delete_image_btn').click();
      });
    });
  }

  if (document.querySelector('.hamburger')) {
    var hamburger = document.querySelector('.hamburger');
    var body = document.body;
    hamburger.addEventListener('click', function () {
      var modal = document.createElement('div');
      modal.className = 'modal';
      body.append(modal);
      body.style.overflow = 'hidden';
      body.className = 'modal-open';
      var nav = document.querySelector('nav');
      nav.style.visibility = 'unset';
      var close = document.createElement('div');
      close.className = 'nav__close';
      close.insertAdjacentHTML("afterbegin", close_svg);
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
        body.style.overflow = 'unset';

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
  }

  if (document.querySelector('#editor')) {
    var name = function name(params) {
      var desc = document.querySelector('#description');
      var vvvvvv = JSON.parse(desc.textContent);
      var quill_editor = document.querySelector('#quill_editor');
      quill.setContents(vvvvvv);
      var dev_description = document.querySelector('#dev_description');
      dev_description.innerHTML = quill.root.innerHTML; // quill.setAttribute() = JSON.parse(textarea_quill.value)

      quill.setContents(JSON.parse(textarea_quill.value));
    }; // const editor = new EditorJS({
    // 	HolderId: 'editorjs',
    // 	tools: { 
    // 		header: {
    // 			class: Header, 
    // 			inlineToolbar: ['link', 'marker', 'bold', 'italic']
    // 		}, 
    // 		list: { 
    // 			class: List, 
    // 			inlineToolbar: true 
    // 		} 
    // 	},
    // })
    // DecoupledEditor
    //     .create(document.querySelector('.form-box__textarea', {
    // 		language: 'ru'
    // 	}))
    //     .catch(error => {
    //         console.error(error)
    //     })
    // DecoupledEditor
    // 		.create( document.querySelector( '.form-box__textarea', {
    // 			language: 'ru'
    // 		} ) )
    // 		.then( editor => {
    // 			const toolbarContainer = document.querySelector( '#toolbar-container' );
    // 			toolbarContainer.appendChild( editor.ui.view.toolbar.element );
    // 		} )
    // 		.catch( error => {
    // 			console.error( error );
    // 		} );
    // const textarea = document.querySelectorAll('textarea')
    // textarea.forEach(element => {
    // 	new FroalaEditor(element, {
    // 		language: 'ru',
    // 		charCounterCount: false,
    // 		fileUpload: false,
    // 		imageUpload: false,
    // 		imagePaste: false,
    // 		imageUploadRemoteUrls: false,
    // 		videoUpload: false,
    // 		fontFamilyDefaultSelection: 'Nunito',
    // 		fontSizeDefaultSelection: '19',
    // 		fontSizeUnit: 'px',
    // 		fontSizeSelection: true,
    // 		heightMin: 200,
    // 		quickInsertEnabled: false,
    // 		emoticonsUseImage: false,
    // 		fontFamilySelection: true,
    // 		attribution: false,
    // 		spellcheck: false,
    // 		toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'inlineClass', 'clearFormatting'],
    // 		toolbarBottom: true,
    // 		keepFormatOnDelete: true,
    // 		htmlExecuteScripts: false,
    // 	})
    // })


    var quill = new Quill('#editor', {
      modules: {
        toolbar: [['bold', 'italic', 'underline'], ['blockquote'], [{
          'header': 1
        }, {
          'header': 2
        }], [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }], [{
          'script': 'sub'
        }, {
          'script': 'super'
        }], [{
          'indent': '-1'
        }, {
          'indent': '+1'
        }], [{
          'direction': 'rtl'
        }], ['clean']]
      },
      placeholder: 'Описание',
      theme: 'snow'
    });
    quill.root.setAttribute('spellcheck', false);
    var submit_quill = document.querySelector('#submit_quill');
    var textarea_quill = document.querySelector('#textarea_quill');

    submit_quill.onclick = function () {
      textarea_quill.value = JSON.stringify(quill.getContents());
    };
  } // validation email
  // preg_match('/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u', $item)

});

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\OpenServer\domains\ctek\resources\js\script.js */"./resources/js/script.js");


/***/ })

/******/ });