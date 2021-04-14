// input [type="file"]
export function upload(selector) {
	let files = []
	const btn_img = selector
	const input_img = btn_img.previousSibling.previousSibling
	input_img.value = ""
	
	event.stopPropagation()
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
		preview.innerHTML = ""
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
						<img src="${src}" alt="${file.name}"/>
					</div>
				`)
			}
			reader.readAsDataURL(file)
		})
	}
	
	const remove = event => {
		if (!event.target.dataset.name) return
		const {name} = event.target.dataset
		files = files.filter(file => {
			
		console.log(file.name + ' ' + name)
			file.name !== name})
		const block = document.querySelector(`[data-name="${name}"]`).closest('.preview-image')
		block.classList.add('removing')
		if (block.parentElement.childElementCount == 1) {
			const preview = block.parentElement

			// сделать асинхронное выполнение синхронным
			setTimeout(() => block.addEventListener('transitionend', () => block.remove()))
			preview.remove()
		} else {
			setTimeout(() => block.addEventListener('transitionend', () => block.remove()))
		}
	}
	
	input_img.addEventListener('change', change)
	preview.addEventListener('click', remove)
}