import {
	patent_item_add,
	development_item_add,
	development_images_add,
	sendRequest,
	changedNamePatent,
	changedNameAndDescDev,
	changeCategory,
	response,
	requestBtn,
} from './func.js'

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelectorAll(`form:not([action="/login"])`)
	form.forEach(event => {
		const request = event.action
		if (event.querySelector('.form-box__input-text--patents')) changedNamePatent(event, request)
		if (event.querySelector('textarea')) changedNameAndDescDev(event, request)
		if (event.querySelector('.dropdown__input-text--change-category')) changeCategory(event, request)

		if (event.querySelector('button')) requestBtn(event, request)
	})
})
