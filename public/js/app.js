document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('[enctype="multipart/form-data"]')) {
		const forms = document.querySelectorAll('[enctype="multipart/form-data"]')
		forms.forEach(form => {
			form.addEventListener('click', event => {
				if(event.target.type != 'button') return
				
				let files = []
				const btn_img = event.target
				const input_img = btn_img.previousSibling.previousSibling
				// const input_files = input_img.files
				input_img.value = ''
				input_img.click()
				
				let preview
				if (btn_img.nextSibling.nodeName != 'DIV') {
					preview = document.createElement("div")
					preview.className = 'preview'
				} else preview = btn_img.nextSibling
				
				const change = event => {
					if(!event.target.files.length) return
					btn_img.insertAdjacentElement("afterend", preview)
					files = Array.from(event.target.files)
					// files = Array.from([...event.target.files, ...input_files])
					// console.log(new File(...input_files))
					// input_img.files = new File([...event.target.files, ...input_files])
					// let r = [...event.target.files, ...input_files]
					// console.log(r)
					// console.log(input_img.files)
					preview.textContent = ''
					files.forEach(file => {
						if (!file.type.match("image")) return
						const reader = new FileReader()
						reader.onload = event => {
							const src = event.target.result
							preview.insertAdjacentHTML("afterbegin", `
								<div class="preview-image">
									<div class="remove-image">
										<div class="close" data-name="${file.name}">&times;</div>
									</div>
									<img src="${src}" alt=""/>
								</div>
							`)
						}
						reader.readAsDataURL(file)
					})
					input_img.removeEventListener("change", change)
				}
				
				const remove = event => {
					if (!event.target.dataset.name) return
					const {name} = event.target.dataset
					console.log(event.target.dataset)
					files = files.filter(file => file.name !== name)
	
					const block = document.querySelector(`[data-name="${name}"]`).closest('.preview-image')
					console.log(`${name}`)
					block.classList.add('removing')
					if (block.parentElement.childElementCount == 1) {
						const preview_el = block.parentElement
	
						// сделать асинхронное выполнение синхронным
						setTimeout(() => block.addEventListener('transitionend', () => block.remove()))
						preview_el.remove()
					} else {
						setTimeout(() => block.addEventListener('transitionend', () => block.remove()))
					}
				}
				
				input_img.addEventListener('change', change)
				preview.addEventListener('click', remove)
			})
		})
	}
	
	if (document.querySelector('img')) {
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
	}
	
	if (document.querySelector('.animate_emergence')) {
		const animItems = document.querySelectorAll('.animate_emergence')
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
					animItem.classList.add('active')
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
		
	}
	
	if (document.querySelector('.changed_text')) {
		const changed_text = document.querySelectorAll('.changed_text')
		changed_text.forEach(element => {
			element.addEventListener('input', event => {
				event.target.defaultValue = event.target.value
			})
		})
	}
	
	if (document.querySelector('.for_the_entire_window')) {
		const references = document.querySelectorAll('.for_the_entire_window')
		references.forEach(reference => {
			reference.addEventListener('click', event => {
				const body = document.querySelector('body')
				body.classList.add('modal-open')
				let modal = document.createElement("div")
				modal.className = "modal"
				let form = document.createElement("div")
				form.className = "form"
				let image = document.createElement("img")
				image.src = event.target.parentElement.dataset.big
				image.className = "image"
				let background = document.createElement("div")
				background.className = "bg_modal"
				
				let close = document.createElement("img")
				close.className = "close"
				close.src = '/public/image/other/compress.svg'
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
	}
	
	if (document.querySelector('.delete_image_btn')) {
		const delete_image = document.querySelectorAll('.delete_image')
		delete_image.forEach(delete_img => {
			delete_img.addEventListener('click', event => {
				const image = event.target.closest('.image')
				image.querySelector('.delete_image_btn').click()
			})
		})
	}
	
	// validation email
	// preg_match('/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u', $item)
})