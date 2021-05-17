const closeSvg = `
	<svg class="delete-image__svg" viewBox="0 0 352 512">
		<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
		</path>
	</svg>
`
const func = {

	uploadFiles: (target = '') => {
		const forms = document.querySelectorAll(`${target}[enctype="multipart/form-data"]`)
		forms.forEach(form => {
			const buttons = form.querySelectorAll('[type="button"]')
			buttons.forEach(element => {
				element.addEventListener('click', event => {
					let files = []
					const btn_img = event.target
					const input_img = btn_img.parentElement.querySelector('[type="file"]')
					input_img.value = ''
					input_img.click()

					const change = event => {
						if(!event.target.files.length) {
							input_img.removeEventListener("change", change)
							input_img.value = ''
							return
						}

						let preview
						if (!btn_img.parentElement.querySelector('.preview')) {
							preview = document.createElement("div")
							preview.className = 'preview'
						} else preview = btn_img.parentElement.querySelector('.preview')

						btn_img.insertAdjacentElement("afterend", preview)
						files = Array.from(event.target.files)
						preview.textContent = ''
						files.forEach(file => {
							if (!file.type.match("image")) return
							const reader = new FileReader()
							reader.onload = event => {
								const src = event.target.result
								preview.insertAdjacentHTML("afterbegin", `
									<div class="preview__image">
										<div class="delete-image delete-image--preview__image">
											<svg class="delete-image__svg" viewBox="0 0 352 512">
												<path data-name="${file.name}" fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
												</path>
											</svg>
										</div>
										<img class="preview__img" src="${src}" alt=""/>
									</div>
								`)
							}
							reader.readAsDataURL(file)
						})
						input_img.removeEventListener("change", change)
					
						const remove = event => {
							if (!event.target.dataset.name) return
							const {name} = event.target.dataset
							files = files.filter(file => file.name !== name)
			
							const block = document.querySelector(`[data-name="${name}"]`).closest('.preview__image')
							block.classList.add('removing')
							if (block.parentElement.childElementCount == 1) {
								event.target.closest('.form-box').querySelector('[type="file"]').value = ''
								const preview_el = block.parentElement
								block.addEventListener('transitionend', () => block.remove())
								setTimeout(() => preview_el.remove(), 300)
							} else block.addEventListener('transitionend', () => block.remove())
						}
						preview.addEventListener('click', remove)
					}
					input_img.addEventListener('change', change)
					const focus = () => {
						setTimeout(function() {
							input_img.removeEventListener('change', change)
							window.removeEventListener('focus', focus)
						}, 100);
					}
					window.addEventListener('focus', focus)
				})
			})
		})
	},

	lazyLoad: () => {
		const images = document.querySelectorAll('img')
		const options = {
			root: null,
			threshold: 0.1
		}
		
		function handleImg(myImg, observer) {
			myImg.forEach(myImgSingle => {
				if (myImgSingle.intersectionRatio > 0) {
					loadImage(myImgSingle.target)
				}
			})
		}
		
		function loadImage(image) {
			image.src = image.getAttribute('data')
		}
		
		const observer = new IntersectionObserver(handleImg, options)
		
		images.forEach(img => {
			observer.observe(img)	
		})
	},

	animateEmergence: () => {
		const animItems = document.querySelectorAll('.animate-emergence')
		window.addEventListener('scroll', animOnScroll)
		function animOnScroll(params) {
			animItems.forEach(animItem => {
				const animItemHeight = animItem.offsetHeight
				const animItemOffset = offset(animItem).top
				const animStart = 4
	
				let animItemPoint = window.innerHeight - animItemHeight / animStart
	
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart
				}
	
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('animate-emergence--active')
				}
			})
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return {
					top: rect.top + scrollTop,
					left: rect.left + scrollLeft
				}
		}
		setTimeout(() => {
			animOnScroll()
		}, 300)
	},

	forTheEntireWindow: (target = '') => {
		const references = document.querySelectorAll(`${target}.for-the-entire-window`)
		references.forEach(reference => {
			reference.addEventListener('click', event => {
				const body = document.querySelector('body')
				body.classList.add('modal-open')
				let modal = document.createElement("div")
				modal.className = "modal"
				let form = document.createElement("div")
				form.className = "modal__form"
				let image = document.createElement("img")
				image.src = event.target.parentElement.dataset.big
				image.alt = ""
				image.className = "modal__image"
				let background = document.createElement("div")
				background.className = "modal__bg-modal"
				
				let close = document.createElement("div")
				close.className = "modal__close"
				close.insertAdjacentHTML('afterbegin', closeSvg)
				close.onclick = () => {
					close.closest('.modal').remove()
					body.classList.remove('modal-open')
				}
				background.onclick = () => {
					background.closest('.modal').remove()
					body.classList.remove('modal-open')
				}
	
				form.append(background, image, close)
				modal.append(form)
				document.body.append(modal)
			})
		})
	},

	deleteImage: (target = '') => {
		const delete_image = document.querySelectorAll(`${target}.delete-image__svg`)
		delete_image.forEach(delete_img => {
			delete_img.addEventListener('click', event => {
				const image = event.target.closest('.development__thumbnail-image')
				image.querySelector('button').click()
			})
		})
	},

	hamburger: () => {
		const hamburger = document.querySelector('.hamburger')
		const body = document.body
		hamburger.addEventListener('click', () => {
			const modal = document.createElement('div')
			modal.className = 'modal'
			body.append(modal)
			body.className = 'modal-open'

			const nav = document.querySelector('nav')
			nav.style.visibility = 'unset'
			const close = document.createElement('div')
			close.className = 'nav__close'
			close.insertAdjacentHTML("afterbegin", closeSvg)
			nav.prepend(close)

			close.addEventListener('click', () => {
				body.classList.remove('modal-open')
				nav.style.visibility = 'hidden'
				modal.remove()
				close.remove()
			})
		})
		let mobileSize
		const tabletWidth = 1020
		const animate_emergence = document.querySelectorAll('.animate-emergence')
		if (document.documentElement.clientWidth <= tabletWidth) {
			animate_emergence.forEach(element => {
				element.classList.remove('animate-emergence')
			})
		}
		window.addEventListener('resize', () => {
			const width = document.documentElement.clientWidth
			if (width > tabletWidth) mobileSize = false
			if (document.documentElement.clientWidth <= tabletWidth
			&& mobileSize == false) {
				mobileSize = true
				const nav = document.querySelector('nav')
				animate_emergence.forEach(element => {
					element.classList.remove('animate-emergence')
				})
				nav.style.visibility = 'hidden'
			}
			if (document.documentElement.clientWidth > tabletWidth) {
				const nav = document.querySelector('nav')
				nav.style.visibility = 'unset'
				animate_emergence.forEach(element => {
					element.classList.add('animate-emergence')
				})
				if (document.querySelector('.nav__close')) {
					body.classList.remove('modal-open')
					const modal = document.querySelector('.modal')
					const close = document.querySelector('.nav__close')
					modal.remove()
					close.remove()
				}
			}
		})
	},

	textEditor: () => {
		let editor
		const textareaField = document.querySelector('textarea:not([name="message"]')
		const config = {
			toolbar: [ 'bold', 'italic', /*'blockQuote',*/ '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ]
		}
		ClassicEditor
			.create(textareaField, config)
			.then(newEditor => editor = newEditor)
			.catch(error => console.error(error))

		setTimeout(() => {
			if (document.querySelector('.ck .ck-editor__editable')) {
				const editedText = document.querySelector('.ck .ck-editor__editable')
				editedText.addEventListener('DOMSubtreeModified', () => {
					setTimeout(() => { textareaField.value = editor.getData() })
				})
			}
		})
	},

	textEdited: () => {
		const dev_desc = document.querySelector('pre')
		const dev_desc_text = dev_desc.outerText
		dev_desc.textContent = ''
		dev_desc.insertAdjacentHTML('beforeend', dev_desc_text)
	},

	selectCategory: (target = '') => {
		const selectCategory = document.querySelectorAll(`${target}.dropdown--select-category`)
		selectCategory.forEach(element => {
			const selectCategoryInput = element.querySelector('.dropdown__input-text--select-category')
			const selectCategoryList = element.querySelector('.dropdown__list--select-category')
			selectCategoryInput.value = selectCategoryList.value

			element.addEventListener('change', event => {
				selectCategoryInput.value = event.target.value
			})
		})
	},

	sortCategory: () => {
		const sort = document.querySelector('.dropdown__list--sort')
		sort.addEventListener('change', () => {
			const developments = document.querySelectorAll('.developments__item')
			developments.forEach(development => {
				if (development.classList.contains('non-select-category')) {
					development.classList.remove('non-select-category')
				}

				let devSort
				if (development.querySelector('[name="category"]')) devSort = development.querySelector('[name="category"]').value
				else if (development.querySelector('.categoryDev')) devSort = development.querySelector('.categoryDev').innerHTML
				if (sort.value == 'Не выбрано') {
					development.classList.remove('non-select-category')
				} else if (devSort != sort.value) {
					development.classList.add('non-select-category')
				}
			})
		})
	},

	upButton: () => {
		const upBtn = document.getElementById('upButton')
		upBtn.addEventListener('click', () => window.scrollTo(pageXOffset, 0))
		window.addEventListener('scroll', () => {
			if (pageYOffset < document.documentElement.clientHeight) upBtn.style.opacity = 0
			else upBtn.style.opacity = 1
		})
	},


	ajax: {
		
		// HTML
		patent_item_add: data => {
			return `
				<div class="patents__item">
					<div class="patents__thumbnail">
						<div class="for-the-entire-window" data-big="${data.patent.patent_preview_big}">
							<img class="for-the-entire-window__icon" src="${window.location.origin}/public/image/other/expand.svg" data="${window.location.origin}/public/image/other/expand.svg" alt="">
						</div>
						<div class="patents__thumbnail-image"><img class="patents__thumbnail-img" src="${data.patent.patent_preview_small}" data="${data.patent.patent_preview_small}" alt=""></div>
					</div>
					<form class="form form--change-text" action="${window.location.origin}/api/change_information_patent" method="POST">
						<div class="form-box form-box--patents">
							<input class="form-box__input-file" type="hidden" name="id" value="${data.patent.id}">
							<input class="form-box__input-text form-box__input-text--patents" type="text" name="name" value="${data.patent.name}">
						</div>
					</form>
					<hr>
					<form class="form patents__form" action="${window.location.origin}/api/change_patent" method="POST" enctype="multipart/form-data">
						<input type="hidden" name="id" value="${data.patent.id}">
						<div class="form-box form-box--patents">
							<input class="form-box__input-file" type="file" name="image_patent" accept="image/*">
							<input class="input-button form-box__input-btn" type="button" value="Обзор">
						</div>
						<button class="form__button">Загрузить другую картинку</button>
					</form>
					<hr>
					<form class="form patents__form" action="${window.location.origin}/api/delete_patent" method="POST">
						<input type="hidden" name="patent_id" value="${data.patent.id}">
						<button class="form__button">Удалить</button>
					</form>
				</div>
			`
		},

		development_item_add: (data, categories) => {
			return `
				<div class="developments__item">
					<div class="developments__thumbnail">
						<div class="for-the-entire-window" data-big="${data.development.development_preview_big}">
						<img class="for-the-entire-window__icon" src="${window.location.origin}/public/image/other/expand.svg" data="${window.location.origin}/public/image/other/expand.svg" alt="">
						</div>
						<img class="developments__thumbnail-img" src="${data.development.development_preview_small}" data="${data.development.development_preview_small}" alt="">
					</div>
					<span class="developments__name">${data.development.name}</span>
					<span class="caption">Категория</span>
					<div class="dropdown dropdown--select-category">
						<form class="form form--dropdown" action="${window.location.origin}/api/change_category" method="POST">
							<input type="hidden" name="id" value="${data.development.id}">
							<input class="dropdown__input-text--select-category dropdown__input-text--change-category" type="text" value="${data.development.category}" name="category">
						</form>
						<select class="dropdown__list dropdown__list--select-category">
							<option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
							${categories}
						</select>
					</div>
					<form class="form developments__item--form" action="${window.location.origin}/api/change_development_preview_image" method="POST" enctype="multipart/form-data">
						<input type="hidden" name="id" value="${data.development.id}">
						<div class="form-box">
							<input class="form-box__input-file" type="file" name="preview_development" accept="image/*">
							<input class="input-button form-box__input-btn" type="button" value="Обзор">
						</div>
						<button class="form__button">Загрузить другую картинку</button>
					</form>
					<hr>
					<a class="link button" href="${window.location.origin}/development/${data.development.id}">Подробнее</a>
				</div>
			`
		},

		development_images_add: data => {
			return `
				<div class="development__thumbnail-image">
					<img class="development__thumbnail-img" src="${window.location.origin}/${data.development_preview_small}" data="${window.location.origin}/${data.development_preview_small}" alt="">
					<div class="for-the-entire-window" data-big="${window.location.origin}/${data.development_preview_big}">
						<img class="for-the-entire-window__icon" src="${window.location.origin}/public/image/other/expand.svg" data="${window.location.origin}/public/image/other/expand.svg" alt="">
					</div>
					<div class="delete-image">
						<svg class="delete-image__svg" viewBox="0 0 352 512">
							<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
							</path>
						</svg>
					</div>
					<form class="form form--development__thumbnail" action="${window.location.origin}/api/delete_image_development" method="POST">
						<input type="hidden" name="path" value="${window.location.origin}/${data.development_preview_small}">
						<button class="form__button">Удалить изображение</button>
					</form>
				</div>
			`
		},

		// send ajax
		sendRequest: (method, url, formData = null) => {
			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest()
				xhr.open(method, url)
				xhr.responseType = 'json'
				xhr.setRequestHeader('Accept', 'application/json')
				xhr.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content)
				xhr.onload = () => {
					if (xhr.status >= 400) reject(xhr.response)
					else resolve(xhr.response)
				}
				xhr.onerror = () => reject(xhr.response)
				xhr.send(formData)
			})
		},

		// change name
		changedNamePatent: (event, request, target = '') => {
			const input_name = event.querySelector(`${target}.form-box__input-text--patents`)
			let execution = false
			let time
			input_name.addEventListener('input', e => {
				input_name.defaultValue = input_name.value
				const formData = new FormData(event)
				sendRequest('POST', window.location.origin + '/api/api_token', formData)
					.then(data => {
						formData.append('api_token', data.api_token)
						if (execution == true) clearTimeout(time)
						execution = true
						time = setTimeout(() => {
							sendRequest('POST', request, formData).catch(err => console.log(err))
							execution = false
						}, 500)
					})
			})
		},

		changedNameAndDescDev: (event, request) => {
			const text_fields = document.querySelectorAll('.development__input-text, .development__textarea')
			text_fields.forEach(element => {
				let execution = false
				let time
				if (element.type == 'textarea') {
					let textarea_value = element.value;
					(setInterval(() => {
						if (element.value != textarea_value) {
							const formData = new FormData(event)
							sendRequest('POST', window.location.origin + '/api/api_token', formData)
								.then(data => {
									formData.append('api_token', data.api_token)
									if (execution == true) clearTimeout(time)
									execution = true
									time = setTimeout(() => {
										sendRequest('POST', request, formData).catch(err => console.log(err))
										execution = false
									}, 500)
								})
						}
						textarea_value = element.value
					}, 500))
				}
				element.addEventListener('input', () => {
					const formData = new FormData(event)
					sendRequest('POST', window.location.origin + '/api/api_token', formData)
						.then(data => {
							formData.append('api_token', data.api_token)
							if (execution == true) clearTimeout(time)
							execution = true
							time = setTimeout(() => {
								sendRequest('POST', request, formData).catch(err => console.log(err))
								execution = false
							}, 500)
						})
				})
			})
		},

		changeCategory: (event, request, target = '') => {
			function sendChangeCategory(event, request, time, execution) {
				const formData = new FormData(event)
				sendRequest('POST', window.location.origin + '/api/api_token', formData)
					.then(data => {
						formData.append('api_token', data.api_token)
						if (execution == true) clearTimeout(time)
						execution = true
						time = setTimeout(() => {
							sendRequest('POST', request, formData).catch(err => console.log(err))
							execution = false
						}, 500)
					})
			}
			const inputCategory = event.querySelector(`${target}.dropdown__input-text--change-category`)
			let execution = false
			let time
			inputCategory.addEventListener('input', e => sendChangeCategory(event, request, time, execution))
			
			const selectCategory = event.parentElement.querySelector('select')
			selectCategory.addEventListener('change', () => setTimeout(() => sendChangeCategory(event, request, time, execution)))
		},

		// request
		requestBtn: (event, request) => {
			const btn = event.querySelector('button')
			btn.addEventListener('click', e => {
				e.preventDefault()
				const formData = new FormData(event)
				event.classList.add('formSend')
				event.querySelector('.form__button').classList.add('sendFormButton')
				sendRequest('POST', window.location.origin + '/api/api_token', formData)
					.then(data => {
						formData.append('api_token', data.api_token)
						sendRequest('POST', request, formData)
							.then(data => {
								if (event.querySelector('.error')) {
									const errors = event.querySelectorAll('.error')
									errors.forEach(error => error.remove())
								}
								response(event, data, request)
							})
							.catch(err => {
								// console.log(err)
								event.classList.remove('formSend')
								event.querySelector('.form__button').classList.remove('sendFormButton')
								if (event.querySelector('.error')) {
									const errors = event.querySelectorAll('.error')
									errors.forEach(error => error.remove())
								}
								for (const key in err.errors) {
									const inputField = event.querySelector(`[name*="${key}"]`)
									
									const errorField = document.createElement('div')
									errorField.className = 'error'
									errorField.textContent = `${err.errors[key]}`
									if (inputField.parentElement.id != 'selectCategory') event.insertBefore(errorField, inputField.parentElement)
									else event.insertBefore(errorField, inputField.parentElement.parentElement)
								}
							})
					}).catch(/* err => console.log(err) */)
			})
		},

		response: (event, data, request) => {
			event.classList.remove('formSend')
			event.querySelector('.form__button').classList.remove('sendFormButton')
			const successPopUp = document.createElement('div')
			successPopUp.className = 'successPopUp'
			successPopUp.textContent = 'Выполнено успешно'
			document.body.append(successPopUp)
			setTimeout(() => successPopUp.remove(), 3000)

			switch (request) {
				case window.location.origin + '/api/' + 'mail':
					// event.querySelector('[name="email"]').value = ''
					// event.querySelector('[name="name"]').value = ''
					// event.querySelector('.fr-view').value = ''
					break;

				case window.location.origin + '/api/' + 'upload_patent':
					const patents = document.querySelector('.grid--patents')
					patents.insertAdjacentHTML('beforeend', patent_item_add(data))
					event.querySelector('[name="name"]').value = ''
					event.querySelector('.preview').remove()
					forTheEntireWindow('.patents__item:nth-last-child(1) ')
					uploadFiles('.patents__item:nth-last-child(1) ')
					changedNamePatent('.patents__item:nth-last-child(1) ')
					const formsPatentAdd = document.querySelectorAll('.patents__item:nth-last-child(1) .form')
					formsPatentAdd.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					break;
				case window.location.origin + '/api/' + 'delete_patent':
					const patent_item_delete = event.closest('.patents__item')
					patent_item_delete.classList.add('removing')
					patent_item_delete.addEventListener('transitionend', () => patent_item_delete.remove())
					break;
				case window.location.origin + '/api/' + 'change_patent':
					const patent_item_change = event.closest('.patents__item')
					patent_item_change.querySelector('.patents__thumbnail-img').src = data.patent.patent_preview_small
					patent_item_change.querySelector('.for-the-entire-window').dataset.big = data.patent.patent_preview_big
					event.querySelector('.preview').remove()
					break;

				case window.location.origin + '/api/' + 'upload_development':
					const developments = document.querySelector('.grid--developments')
					function categories() {
						const category = data.development.category
						const categoriesArr = data.development.categories
						let categoriesStr = ''
						for (let index = 0; index < categoriesArr.length; index++) {
							if (category == categoriesArr[index]) categoriesStr += (`<option class="dropdown__item" selected>${categoriesArr[index]}</option>\n`)
							else categoriesStr += (`<option class="dropdown__item">${categoriesArr[index]}</option>\n`)
						}
						return categoriesStr
					}
					developments.insertAdjacentHTML('beforeend', development_item_add(data, categories()))
					uploadFiles('.developments__item:nth-last-child(1) ')
					forTheEntireWindow('.developments__item:nth-last-child(1) ')
					selectCategory('.developments__item:nth-last-child(1) ')
					const formCategoryChange = document.querySelector('.developments__item:nth-last-child(1) form[action*="change_category"]')
					changeCategory(formCategoryChange, formCategoryChange.action, '.developments__item:nth-last-child(1) ')
					const formsDevAdd = document.querySelectorAll('.developments__item:nth-last-child(1) .form')
					formsDevAdd.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					event.querySelector('[name="name"]').value = ''
					const previewAll = event.querySelectorAll('.preview')
					previewAll.forEach(preview => preview.remove())
					break;
				case window.location.origin + '/api/' + 'delete_development':
					document.querySelectorAll('input, button').forEach(element => {
						element.classList.add('disabled-hover')
						element.setAttribute('disabled', 'disabled')
					})
					setTimeout(() => document.location.href = `${window.location.origin}/developments`, 3000)
					break;
				case window.location.origin + '/api/' + 'change_development_preview_image':
					const development_item_change = event.closest('.developments__item')
					development_item_change.querySelector('.developments__thumbnail-img').src = data.development.development_preview_small
					development_item_change.querySelector('.for-the-entire-window').dataset.big = data.development.development_preview_big
					event.querySelector('.preview').remove()
					break;
				case window.location.origin + '/api/' + 'add_development_image':
					const development_thumbnail = document.querySelector('.development__thumbnail')
					const size = Object.keys(data.development_images).length
					for (const key in data.development_images) development_thumbnail.insertAdjacentHTML('beforeend', development_images_add(data.development_images[key]))
					event.querySelector('.preview').remove()
					forTheEntireWindow(`.development__thumbnail-image:nth-last-child(${size + 1}) ~ .development__thumbnail-image `)
					deleteImage(`.development__thumbnail-image:nth-last-child(${size + 1}) ~ .development__thumbnail-image `)
					const formsImgAdd = document.querySelectorAll(`.development__thumbnail-image:nth-last-child(${size + 1}) ~ .development__thumbnail-image .form`)
					formsImgAdd.forEach(form => requestBtn(form, form.action))
					break;
				case window.location.origin + '/api/' + 'delete_image_development':
					const development_image = event.closest('.development__thumbnail-image')
					development_image.classList.add('removing')
					development_image.addEventListener('transitionend', () => development_image.remove())
					break;
			}
		},

	}

}

export const uploadFiles = func.uploadFiles
export const lazyLoadImage = func.lazyLoad
export const animateEmergence = func.animateEmergence
export const forTheEntireWindow = func.forTheEntireWindow
export const deleteImage = func.deleteImage
export const hamburger = func.hamburger
export const textEditor = func.textEditor
export const textEdited = func.textEdited
export const selectCategory = func.selectCategory
export const sortCategory = func.sortCategory
export const upButton = func.upButton

export const patent_item_add = func.ajax.patent_item_add
export const development_item_add = func.ajax.development_item_add
export const development_images_add = func.ajax.development_images_add
export const sendRequest = func.ajax.sendRequest
export const changedNamePatent = func.ajax.changedNamePatent
export const changedNameAndDescDev = func.ajax.changedNameAndDescDev
export const changeCategory = func.ajax.changeCategory
export const response = func.ajax.response
export const requestBtn = func.ajax.requestBtn