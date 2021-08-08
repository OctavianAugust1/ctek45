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
											<svg class="delete-image__svg" data-name="${file.name}" viewBox="0 0 352 512">
												<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
												</path>
											</svg>
										</div>
										<img class="preview__img" src="${src}" alt="">
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

	dragAndDrop: () => {
		let imageForUpload = []
		const types = ['image/']
		const dragAndDrop = document.querySelectorAll('.dragdrop')
		dragAndDrop.forEach(element => {
			element.addEventListener('dragenter', event => {
				event.preventDefault()
				element.classList.add('dragdrop--active')
			})
			element.addEventListener('dragleave', event => {
				event.preventDefault()
				element.classList.remove('dragdrop--active')
			})
			element.addEventListener('dragover', event => {
				event.preventDefault()
			})
			element.addEventListener('drop', event => {
				event.preventDefault()
				const multipleImage = event.target.querySelector('[type="file"]').multiple
				imageForUpload = []
				const files = event.dataTransfer.files
				let image = false
				for (const keyType in files) {
					let fileType = files[keyType].type
					if (!fileType || (!multipleImage && image)) {
						continue
					}
					image = true
					for (const [ key, value ] of Object.entries(types)) {
						if (!fileType.includes(value)) {
							continue
						}
						imageForUpload.push(files[keyType])
					}
				}
				element.classList.remove('dragdrop--active')
				dragAndDrop.forEach(element => element.classList.remove('dragdrop--visible'))
				const sendButton = element.querySelector('[type="file"]')

				const filesList = imageForUpload => {
					let list = new DataTransfer()
					for (const key in imageForUpload) {
						list.items.add(imageForUpload[key])
					}
					return list.files
				}
				
				sendButton.files = filesList(imageForUpload)
				function previewImages(sendButton) {
					let files = []
					let preview
					const formBox = sendButton.parentElement
					if (!formBox.querySelector('.preview')) {
						preview = document.createElement("div")
						preview.className = 'preview'
					} else preview = formBox.querySelector('.preview')

					sendButton.parentElement.querySelector('[type="button"]').insertAdjacentElement("afterend", preview)
					files = Array.from(sendButton.files)
					preview.textContent = ''
					files.forEach(file => {
						if (!file.type.match("image")) return
						const reader = new FileReader()
						reader.onload = event => {
							const src = event.target.result
							preview.insertAdjacentHTML("afterbegin", `
								<div class="preview__image">
									<div class="delete-image delete-image--preview__image">
										<svg class="delete-image__svg" data-name="${file.name}" viewBox="0 0 352 512">
											<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
											</path>
										</svg>
									</div>
									<img class="preview__img" src="${src}" alt="">
								</div>
							`)
						}
						reader.readAsDataURL(file)
					})

					const remove = event => {
						if (!event.target.dataset.name) return
						const {name} = event.target.dataset
						files = files.filter(file => file.name !== name)
		
						const block = document.querySelector(`[data-name="${name}"]`).closest('.preview__image')
						block.classList.add('removing')
						if (block.parentElement.childElementCount == 1) {
							const preview_el = block.parentElement
							block.addEventListener('transitionend', () => block.remove())
							setTimeout(() => preview_el.remove(), 300)
						} else block.addEventListener('transitionend', () => block.remove())
					}
					preview.addEventListener('click', remove)
				}
				previewImages(sendButton)
			})
		})


		let enterTarget = null
		document.addEventListener('dragenter', event => {
			event.preventDefault()
			enterTarget = event.target
			dragAndDrop.forEach(element => element.classList.add('dragdrop--visible'))
		})
		document.addEventListener('dragleave', event => {
			event.preventDefault()
			if (enterTarget != event.target) {
				return
			}
			dragAndDrop.forEach(element => element.classList.remove('dragdrop--visible'))
		})
		document.addEventListener('mouseenter', () => {
			dragAndDrop.forEach(element => {
				element.classList.remove('dragdrop--active')
				element.classList.remove('dragdrop--visible')
			})
		})
	},

	lazyLoad: () => {
		const images = document.querySelectorAll('img:not([src])')
		const options = {
			root: null,
			threshold: 0.1
		}
		
		function handleImg(myImg, observer) {
			myImg.forEach(myImgSingle => {
				if (myImgSingle.intersectionRatio > 0) loadImage(myImgSingle.target)
			})
		}
		
		function loadImage(image) {
			image.src = image.getAttribute('data')
		}
		
		const observer = new IntersectionObserver(handleImg, options)
		images.forEach(img => observer.observe(img))
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
				let targetElement = event.target.parentElement
				targetElement.classList.add('active')

				const body = document.querySelector('body')
				body.classList.add('modal-open')
				let modal = document.createElement("div")
				modal.className = "modal"
				let form = document.createElement("div")
				form.className = "modal__form"
				let imageBlock = document.createElement("div")
				imageBlock.className = "modal__img"
				let image = document.createElement("img")
				image.src = event.target.dataset.big
				image.alt = ""
				image.className = "modal__image"
				let background = document.createElement("div")
				background.className = "modal__bg-modal"

				let arrowLeft
				let arrowRight
				let closeAppend = false
				let imageNav = targetElement.parentElement.classList.contains('imageNavigation') && targetElement.parentElement.children.length > 1
				if (imageNav) {
					function imageNavigation(sign) {
						closeAppend = false
						close.remove()
						const childrens = targetElement.parentElement.children
						let thresholdValue
						let arrow
						let newThresholdValue
						switch (sign) {
							case '+':
								thresholdValue = childrens.length - 1
								newThresholdValue = -1
								arrow = -1
								break;
							case '-':
								thresholdValue = 0
								newThresholdValue = childrens.length
								arrow = 1
								break;
						}
						for (let index = 0; index < childrens.length; index++) {
							if (childrens[index].classList.contains('active')) {
								let currentIndex = index
								if (index == thresholdValue) {
									index = newThresholdValue
									currentIndex = thresholdValue
								}
								image.src = childrens[index - arrow].querySelector('.for-the-entire-window').dataset.big
								childrens[currentIndex].classList.remove('active')
								childrens[index - arrow].classList.add('active')
								break
							}
						}
					}
					arrowLeft = document.createElement("div")
					arrowLeft.className = "modal__arrow-left"
					arrowLeft.onclick = () => imageNavigation('-')
					arrowRight = document.createElement("div")
					arrowRight.className = "modal__arrow-right"
					arrowRight.onclick = () => imageNavigation('+')
				}
				
				let close = document.createElement("div")
				close.className = "modal__close"
				close.insertAdjacentHTML('afterbegin', closeSvg)
				function closeModal(element) {
					targetElement.parentElement.querySelector('.active').classList.remove('active')
					element.closest('.modal').remove()
					body.classList.remove('modal-open')
				}
				close.onclick = () => closeModal(close)
				background.onclick = () => closeModal(background)
	
				imageBlock.append(image)
				if (imageNav) {
					form.append(background, imageBlock, arrowLeft, arrowRight)
				} else {
					form.append(background, imageBlock)
				}
				modal.append(form)
				document.body.append(modal)

				let tabletWidth = false
				if (document.documentElement.clientWidth <= 1040) {
					tabletWidth = true
					close.style.top = ''
				}
				window.onresize = () => {
					if (document.documentElement.clientWidth <= 1040) {
						tabletWidth = true
						close.style.top = ''
					} else {
						tabletWidth = false
					}
				}
				let imgSrc = document.querySelector('.modal__image').src
				let firstOpened = true
				setInterval(() => {
					if (document.querySelector('.modal__image')) {
						if (document.querySelector('.modal__image').clientHeight > 0) {
							if (!closeAppend && (imgSrc != document.querySelector('.modal__image').src || firstOpened)) {
								imageBlock.append(close)
								closeAppend = true
								firstOpened = false
							}
							if (!tabletWidth) {
								close.style.top = `${(document.querySelector('.modal__img').clientHeight - document.querySelector('.modal__image').clientHeight) / 2}px`
							}
						}
						imgSrc = document.querySelector('.modal__image').src
					}
				}, 100);
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

	rotateCategory: (target = '', arrowUpBoolean = false, arrowDownBoolean = false) => {
		let arrowUpClass = '.category__arrow-up'
		let arrowDownClass = '.category__arrow-down'
		let rotateCategoryArrow
		if (arrowUpBoolean) {
			rotateCategoryArrow = document.querySelectorAll(`${target}${arrowUpClass}`)
		}
		if (arrowDownBoolean) {
			rotateCategoryArrow = document.querySelectorAll(`${target}${arrowDownClass}`)
		}
		if (!(arrowUpBoolean && arrowDownBoolean)) {
			rotateCategoryArrow = document.querySelectorAll(`${target}${arrowUpClass}, ${target}${arrowDownClass}`)
		}
		rotateCategoryArrow.forEach(element => {
			element.onclick = () => {
				const rotateCategoryButton = element.querySelector('.form__button--category')
				rotateCategoryButton.click()
			}
		})
	},

	hamburger: () => {
		const hamburger = document.querySelector('.hamburger')
		const body = document.body
		hamburger.addEventListener('click', () => {
			const modal = document.createElement('div')
			modal.className = 'modal'
			body.append(modal)
			body.classList.add('modal-open')

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
		const tabletWidth = 1040
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
		const textareaField = document.querySelectorAll('textarea:not([name="message"]')
		textareaField.forEach(element => {
			let editor
			const config = {
				language: 'ru',
				toolbar: [ 'bold', 'italic', /*'blockQuote',*/ '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ],
				ckfinder: {
					uploadUrl: `${window.location.origin}/upload_ckfinder_image`
				}
			}
			let uploadImage
			let ckFinder
			if (element.classList.contains('ckfinder')) {
				uploadImage = [ 'bold', 'italic', /*'blockQuote',*/ '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo', '|', 'uploadImage' ]
				ckFinder = {
					uploadUrl: `${window.location.origin}/upload_ckfinder_image`
				}
				config.toolbar = uploadImage
				config.ckfinder = ckFinder
			}
			ClassicEditor
				.create(element, config)
				.then(newEditor => editor = newEditor)
				.catch(error => console.error(error))
			setTimeout(() => {
				if (document.querySelector('.ck .ck-editor__editable')) {
					const editedText = element.parentElement.querySelector('.ck .ck-editor__editable')
					// if (editedText.querySelector('img')) {
					// 	const images = editedText.querySelectorAll('img')
					// 	const re = /.*?\/{2}.*?\/(?<linkPath>.*?\/).*/
					// 	images.forEach(image => {
					// 		const imageSrc = image.src
					// 		let match = re.exec(imageSrc)
					// 		image.src = imageSrc.replace(match.groups.linkPath, '')
					// 	})
					// }
					editedText.addEventListener('DOMSubtreeModified', () => {
						setTimeout(() => { element.value = editor.getData() })
					})
				}
			})
		})
		const Balloon = document.querySelectorAll('.baloon')
		let id = 1
		Balloon.forEach(element => {
			const config = {
				language: 'ru',
				toolbar: [ 'bold', 'italic', /*'blockQuote',*/ '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ]
			}
			BalloonEditor
				.create(element, config)
				.then(newEditor => {
					if (!(element.classList.contains('baloon_contacts') || element.classList.contains('baloon_footer_contacts'))) {
						change_main_page_inf(element, id, newEditor, window.location.origin + '/api/' + 'change_main_page_inf')
						id += 1
					} else {
						change_contacts(element, element.id, newEditor, window.location.origin + '/api/' + 'change_contacts')
					}
				})
				.catch(error => console.error(error))
		})
	},

	changeImage: () => {
		const defaultImages = document.querySelectorAll('.change-image__button')
		defaultImages.forEach(element => {
			element.addEventListener('click', () => {
				const form = element.closest('.form')
				const choiceImage = form.querySelector('[type="file"]')
				function change() {
					choiceImage.removeEventListener('change', change)
					const btn = form.querySelector('button')
					btn.click()
				}
				choiceImage.addEventListener('change', change)
				choiceImage.click()
				function focus() {
					setTimeout(() => {
						choiceImage.removeEventListener('change', change)
					}, 100);
				}
				window.addEventListener('focus', focus);
			})
		})
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
			if (pageYOffset < document.documentElement.clientHeight) {
				upBtn.style.opacity = 0
				upBtn.style.visibility = 'hidden'
			}
			else {
				upBtn.style.opacity = 1
				upBtn.style.visibility = 'unset'
			}
		})
	},


	ajax: {
		
		// HTML
		patent_item_add: data => {
			return `
				<div class="patents__item">
					<div class="patents__thumbnail">
						<div class="patents__thumbnail-image for-the-entire-window"><img class="patents__thumbnail-img" src="${data.patent.patent_preview_small}" data="${data.patent.patent_preview_small}" data-big="${data.patent.patent_preview_big}" alt=""></div>
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
						<img class="developments__thumbnail-img for-the-entire-window" src="${data.development.development_preview_small}" data="${data.development.development_preview_small}" data-big="${data.development.development_preview_big}" alt="">
					</div>
					<span class="developments__name">${data.development.name}</span>
					<span class="caption">Категория</span>
					<div class="dropdown dropdown--select-category">
						<form class="form form--dropdown" action="${window.location.origin}/api/change_category" method="POST">
							<input type="hidden" name="id" value="${data.development.id}">
							<select class="dropdown__list dropdown__list--select-category dropdown__list--change-category" name="category">
								<option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
								${categories}
							</select>
						</form>
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
					<form class="form" class="delete_development" action="${window.location.origin}/api/delete_development" method="POST">
						<input type="hidden" name="id" value="${data.development.id}">
						<button class="form__button">Удалить</button>
					</form>
					<hr>
					<a class="link button" href="${window.location.origin}/development/${data.development.id}">Подробнее</a>
				</div>
			`
		},

		development_images_add: data => {
			return `
				<div class="development__thumbnail-image">
					<img class="development__thumbnail-img for-the-entire-window" src="${window.location.origin}/${data.development_preview_small}" data="${window.location.origin}/${data.development_preview_small}" data-big="${window.location.origin}/${data.development_preview_big}" alt="">
					<div class="delete-image">
						<svg class="delete-image__svg" viewBox="0 0 352 512">
							<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
							</path>
						</svg>
					</div>
					<form class="form form--development__thumbnail" action="${window.location.origin}/api/delete_image_development" method="POST">
						<input type="hidden" name="path" value="${data.development_preview_small}">
						<button class="form__button">Удалить изображение</button>
					</form>
				</div>
			`
		},

		category_add: (data, withoutCategory = false, firstCategory = false, latestCategory = false, rotatingCategory = false, arrowUpBlock = false, arrowDownBlock = false) => {
			let arrowUp = ''
			let arrowDown = ''
			let changedCategory = ''
			let rotatingCategoryClass = ''
			if (!firstCategory || arrowUpBlock) {
				arrowUp = `
					<div class="category__arrow-up">
						<form class="form form--category" action="${window.location.origin}/api/up_rotate_category" method="POST">
							<input type="hidden" name="rotating_id" value="${data.rotating_id}">
							<input type="hidden" name="category" value="${data.category}">
							<button class="form__button form__button--category">Изменить</button>
						</form>
						<svg viewBox="0 0 512 512">
							<path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z">
							</path>
						</svg>
					</div>
				`
				if (arrowUpBlock) {
					return arrowUp
				}
			}

			if (!latestCategory || arrowDownBlock) {
				arrowDown = `
					<div class="category__arrow-down">
						<form class="form form--category" action="${window.location.origin}/api/down_rotate_category" method="POST">
							<input type="hidden" name="rotating_id" value="${data.rotating_id}">
							<input type="hidden" name="category" value="${data.category}">
							<button class="form__button form__button--category">Изменить</button>
						</form>
						<svg viewBox="0 0 512 512">
							<path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z">
							</path>
						</svg>
					</div>
				`
				if (arrowDownBlock) {
					return arrowDown
				}
			}

			if (!withoutCategory) {
				changedCategory = `
					<form class="form form--admin" action="${window.location.origin}/api/change_category_name" method="POST">
						<input type="hidden" value="${data.id}" name="id">
						<div class="form-box form-box--admin">
							<input class="form-box__input-text" type="text" value="${data.category}" name="category">
						</div>
						<button class="form__button button">Изменить</button>
					</form>
					<form class="form form--admin" action="${window.location.origin}/api/delete_category" method="POST">
						<input type="hidden" value="${data.id}" name="id">
						<button class="form__button button">Удалить</button>
					</form>
				`
			}

			if (rotatingCategory) {
				rotatingCategoryClass = 'rotating-category'
			}

			return `
				<div class="category ${rotatingCategoryClass}">
					${arrowUp}
					${arrowDown}
					<div class="category__right-block">
						<span class="category__name">${data.category}</span>
						${changedCategory}
					</div>
				</div>
			`
		},

		article_add: data => {
			return `
				<div class="article">
					<span class="article__name">${data.name}</span>
					<div class="article__buttons">
						<form action="${window.location.origin}/api/delete_article" method="POST">
							<input type="hidden" name="id" value="${data.id}">
							<button class="form__button article__button">Удалить</button>
						</form>
						<a class="link button article__button" href="${window.location.origin}/article/${data.id}">Читать далее...</a>
					</div>
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
				if (document.querySelector('meta[name="api_token"]')) xhr.setRequestHeader('Authorization', `Bearer ${document.querySelector('meta[name="api_token"]').content}`)
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
			input_name.addEventListener('input', () => {
				input_name.defaultValue = input_name.value
				const formData = new FormData(event)
				if (execution == true) clearTimeout(time)
				execution = true
				time = setTimeout(() => {
					sendRequest('POST', request, formData).catch(err => console.log(err))
					execution = false
				}, 500)
			})
		},

		// change text AboutUs
		changedTextAboutUs: (event, request) => {
			const textAboutUs = document.querySelector('.form-box__textarea--about-us')
			let execution = false
			let time
			let textarea_value = textAboutUs.value;
			(setInterval(() => {
				if (textAboutUs.value != textarea_value) {
					const formData = new FormData(event)
					if (execution == true) clearTimeout(time)
					execution = true
					time = setTimeout(() => {
						sendRequest('POST', request, formData).catch(err => console.log(err))
						execution = false
					}, 500)
				}
				textarea_value = textAboutUs.value
			}, 500))
		},

		// change_main_page_inf
		change_main_page_inf: (editor, id, text, request) => {
			editor.addEventListener('DOMSubtreeModified', () => {
				const formData = new FormData()
				formData.append('id', id)
				formData.append('text', text.getData())
				sendRequest('POST', request, formData).catch(err => console.log(err))
			})
		},

		// change_contacts
		change_contacts: (editor, id, text, request) => {
			editor.addEventListener('DOMSubtreeModified', () => {
				const formData = new FormData()
				formData.append('id', id)
				formData.append('contact', text.getData())
				sendRequest('POST', request, formData).catch(err => console.log(err))
			})
		},

		changedNameAndDescDev: (event, request) => {
			let text_fields
			if (document.querySelector('.development__input-text, .development__textarea')) {
				text_fields = document.querySelectorAll('.development__input-text, .development__textarea')
			} else if (document.querySelector('.form-box__input-text--article, .article__text')) {
				text_fields = document.querySelectorAll('.form-box__input-text--article, .article__text')
			}
			text_fields.forEach(element => {
				let execution = false
				let time
				if (element.type == 'textarea') {
					let textarea_value = element.value;
					(setInterval(() => {
						if (element.value != textarea_value) {
							const formData = new FormData(event)
							if (execution == true) clearTimeout(time)
							execution = true
							time = setTimeout(() => {
								sendRequest('POST', request, formData).catch(err => console.log(err))
								execution = false
							}, 500)
						}
						textarea_value = element.value
					}, 500))
				}
				element.addEventListener('input', () => {
					const formData = new FormData(event)
					if (execution == true) clearTimeout(time)
					execution = true
					time = setTimeout(() => {
						sendRequest('POST', request, formData).catch(err => console.log(err))
						execution = false
					}, 500)
				})
			})
		},

		changeCategory: (event, request) => {
			const selectCategory = event.parentElement.querySelector('.dropdown__list--change-category')
			selectCategory.addEventListener('change', () => {
				const formData = new FormData(event)
				sendRequest('POST', request, formData).catch(err => console.log(err))
			})
		},

		// request
		requestBtn: (event, request) => {
			const btn = event.querySelector('button')
			btn.addEventListener('click', e => {
				e.preventDefault()
				const formData = new FormData(event)
				event.classList.add('formSend')
				event.querySelector('.form__button').classList.add('sendFormButton')
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
			
			if (event.querySelector('[type="file"]')) {
				const inputImg = event.querySelectorAll('[type="file"]')
				inputImg.forEach(element => element.value = null)
			}

			switch (request) {
				case window.location.origin + '/api/' + 'upload_patent':
					const patents = document.querySelector('.grid--patents')
					patents.insertAdjacentHTML('beforeend', patent_item_add(data))
					event.querySelector('[name="name"]').value = ''
					event.querySelector('.preview').remove()
					forTheEntireWindow('.patents__item:nth-last-child(1) ')
					uploadFiles('.patents__item:nth-last-child(1) ')
					const formsPatentAdd = document.querySelectorAll('.patents__item:nth-last-child(1) .form')
					formsPatentAdd.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					const form = document.querySelector('.patents__item:nth-last-child(1) [name="name"]').closest('form')
					changedNamePatent(form, form.action, '.patents__item:nth-last-child(1) ')
					break;
				case window.location.origin + '/api/' + 'delete_patent':
					const patent_item_delete = event.closest('.patents__item')
					patent_item_delete.classList.add('removing')
					patent_item_delete.addEventListener('transitionend', () => patent_item_delete.remove())
					break;
				case window.location.origin + '/api/' + 'change_patent':
					const patent_item_change = event.closest('.patents__item')
					patent_item_change.querySelector('.patents__thumbnail-img').src = data.patent.patent_preview_small
					patent_item_change.querySelector('.for-the-entire-window img').dataset.big = data.patent.patent_preview_big
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
					const formCategoryChange = document.querySelector('.developments__item:nth-last-child(1) form[action*="change_category"]')
					changeCategory(formCategoryChange, formCategoryChange.action)
					const formsDevAdd = document.querySelectorAll('.developments__item:nth-last-child(1) .form')
					formsDevAdd.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					event.querySelector('[name="name"]').value = ''
					const previewAll = event.querySelectorAll('.preview')
					previewAll.forEach(preview => preview.remove())
					break;
				case window.location.origin + '/api/' + 'delete_development':
					const development_item_delete = event.closest('.developments__item')
					development_item_delete.classList.add('removing')
					development_item_delete.addEventListener('transitionend', () => development_item_delete.remove())
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
					let formsImgAdd
					if (document.querySelector('.development__thumbnail').children.length > 1) {
						forTheEntireWindow(`.development__thumbnail-image:nth-last-child(${size + 1}) ~ .development__thumbnail-image `)
						deleteImage(`.development__thumbnail-image:nth-last-child(${size + 1}) ~ .development__thumbnail-image `)
						formsImgAdd = document.querySelectorAll(`.development__thumbnail-image:nth-last-child(${size + 1}) ~ .development__thumbnail-image .form`)
					} else {
						forTheEntireWindow('.development__thumbnail-image ')
						deleteImage('.development__thumbnail-image ')
						formsImgAdd = document.querySelectorAll(`.development__thumbnail-image .form`)
					}
					formsImgAdd.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					break;
				case window.location.origin + '/api/' + 'delete_image_development':
					const development_image = event.closest('.development__thumbnail-image')
					development_image.classList.add('removing')
					development_image.addEventListener('transitionend', () => development_image.remove())
					break;
				
				case window.location.origin + '/api/' + 'add_article':
					event.querySelector('.form-box__input-text').value = ''
					// event.querySelector('.form-box__textarea').value = ''
					const articles = document.querySelector('.articles .grid')
					articles.insertAdjacentHTML('beforeend', article_add(data))
					const formsArticle = document.querySelectorAll('.article:nth-last-child(1) .form')
					formsArticle.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					break;
				case window.location.origin + '/api/' + 'delete_article':
					const article = event.closest('.article')
					article.classList.add('removing')
					article.addEventListener('transitionend', () => article.remove())
					break;

				case window.location.origin + '/api/' + 'add_category':
					const categoriesBlock = document.querySelector('.categories')
					event.querySelector('.form-box__input-text').value = ''
					categoriesBlock.insertAdjacentHTML('beforeend', category_add(data, false, false, true))
					const formsCategory = document.querySelectorAll('.categories:nth-last-child(1) .form')
					formsCategory.forEach(form => {
						if (form.querySelector('button')) requestBtn(form, form.action)
					})
					break;
				case window.location.origin + '/api/' + 'change_category_name':
					const categoryName = event.parentElement.querySelector('.category__name')
					categoryName.textContent = data.category
					const category_name = event.closest('.category').querySelectorAll('.category__arrow-down [name="category"], .category__arrow-up [name="category"]')
					console.log(category_name);
					category_name.forEach(element => {
						element.value = data.category
					})
					break;
				case window.location.origin + '/api/' + 'delete_category':
					const category = event.closest('.category')
					category.classList.add('removing')
					category.addEventListener('transitionend', () => category.remove())
					break;

				case window.location.origin + '/api/' + 'up_rotate_category':
					const categoriesBlockUp = event.closest('.categories')
					const categoryBlockUp = event.parentElement.parentElement
					const categoryBlockPrevious = event.parentElement.parentElement.previousElementSibling
					let categoryBlockUpIDTarget
					for (let index = 0; index < categoriesBlockUp.children.length; index++) {
						if (categoryBlockUp == categoriesBlockUp.children[index]) {
							categoryBlockUpIDTarget = index + 1
						}
					}
					let categoryBlockUpIDPrevious
					for (let index = 0; index < categoriesBlockUp.children.length; index++) {
						if (categoryBlockPrevious == categoriesBlockUp.children[index]) {
							categoryBlockUpIDPrevious = index + 1
						}
					}

					categoryBlockUp.remove()
					categoryBlockPrevious.insertAdjacentHTML('beforebegin', category_add(data, data.withoutCategory, data.min, data.max, true, false, false))
					categoryBlockPrevious.querySelectorAll('[name="rotating_id"]').forEach(element => {
						element.value = data.rotate_id
					})
					if (data.max || data.maximalTarget) {
						categoryBlockPrevious.querySelector('.category__arrow-down').remove()
					}
					if (data.min) {
						categoryBlockPrevious.insertAdjacentHTML('afterbegin', category_add(data, data.withoutCategory, false, false, false, data.min, false))
						const formArrowUpBlock = categoryBlockPrevious.querySelector('.category__arrow-up .form')
						formArrowUpBlock.querySelector('[name="rotating_id"]').value = data.rotate_id
						formArrowUpBlock.querySelector('[name="category"]').value = data.category_rotate
						requestBtn(formArrowUpBlock, formArrowUpBlock.action)
						rotateCategory(`.category:nth-child(${categoryBlockUpIDPrevious}) `, true, false)
					}
					const targetCategoryFormsUp = categoriesBlockUp.querySelectorAll('.rotating-category .form')
					targetCategoryFormsUp.forEach(form => {
						requestBtn(form, form.action)
					});
					rotateCategory(`.category:nth-child(${categoryBlockUpIDTarget}) `, false, false)
					categoriesBlockUp.querySelector('.rotating-category').classList.remove('rotating-category')
					break;
				case window.location.origin + '/api/' + 'down_rotate_category':
					const categoriesBlockDown = event.closest('.categories')
					const categoryBlockTarget = event.parentElement.parentElement
					const categoryBlockNext = event.parentElement.parentElement.nextElementSibling
					let categoryBlockDownIDTarget
					for (let index = 0; index < categoriesBlockDown.children.length; index++) {
						if (categoryBlockTarget == categoriesBlockDown.children[index]) {
							categoryBlockDownIDTarget = index + 1
						}
					}
					let categoryBlockDownIDNext
					for (let index = 0; index < categoriesBlockDown.children.length; index++) {
						if (categoryBlockNext == categoriesBlockDown.children[index]) {
							categoryBlockDownIDNext = index + 1
						}
					}

					categoryBlockTarget.remove()
					categoryBlockNext.insertAdjacentHTML('afterend', category_add(data, data.withoutCategory, data.min, data.max, true, false, false))
					categoryBlockNext.querySelectorAll('.category [name="rotating_id"]').forEach(element => {
						element.value = data.rotate_id
					})
					if (data.min || data.minimalTarget) {
						categoryBlockNext.querySelector('.category__arrow-up').remove()
					}
					if (data.max) {
						categoryBlockNext.insertAdjacentHTML('beforeend', category_add(data, data.withoutCategory, false, false, false, false, data.max))
						const formArrowDownBlock = categoryBlockNext.querySelector('.category__arrow-down .form')
						formArrowDownBlock.querySelector('[name="rotating_id"]').value = data.rotate_id
						formArrowDownBlock.querySelector('[name="category"]').value = data.category_rotate
						requestBtn(formArrowDownBlock, formArrowDownBlock.action)
						rotateCategory(`.category:nth-child(${categoryBlockDownIDNext}) `, false, true)
					}
					if (data.min) {
						categoryBlockNext.querySelector('.category__arrow-up').remove()
					}
					const targetCategoryFormsDown = categoriesBlockDown.querySelectorAll('.rotating-category .form')
					targetCategoryFormsDown.forEach(form => {
						requestBtn(form, form.action)
					});
					rotateCategory(`.category:nth-child(${categoryBlockDownIDTarget}) `, false, false)
					categoriesBlockDown.querySelector('.rotating-category').classList.remove('rotating-category')
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
export const rotateCategory = func.rotateCategory
export const hamburger = func.hamburger
export const textEditor = func.textEditor
export const changeImage = func.changeImage
// export const textEdited = func.textEdited
export const sortCategory = func.sortCategory
export const upButton = func.upButton
export const dragAndDrop = func.dragAndDrop

export const patent_item_add = func.ajax.patent_item_add
export const development_item_add = func.ajax.development_item_add
export const development_images_add = func.ajax.development_images_add
export const category_add = func.ajax.category_add
export const article_add = func.ajax.article_add
export const sendRequest = func.ajax.sendRequest
export const changedNamePatent = func.ajax.changedNamePatent
export const changedTextAboutUs = func.ajax.changedTextAboutUs
export const change_main_page_inf = func.ajax.change_main_page_inf
export const change_contacts = func.ajax.change_contacts
export const changedNameAndDescDev = func.ajax.changedNameAndDescDev
export const changeCategory = func.ajax.changeCategory
export const response = func.ajax.response
export const requestBtn = func.ajax.requestBtn