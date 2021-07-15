import {
	changedNamePatent,
	changedTextAboutUs,
	changedNameAndDescDev,
	changeCategory,
	requestBtn,
} from './func.js'

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelectorAll(`form:not([action="/login"])`)
	form.forEach(event => {
		const request = event.action
		if (event.querySelector('.form-box__input-text--patents')) changedNamePatent(event, request)
		if (event.querySelector('.form-box__textarea--about-us')) changedTextAboutUs(event, request)
		if (event.querySelector('.development__input-text, .form-box__input-text--article')) changedNameAndDescDev(event, request)
		if (event.querySelector('.dropdown__list--change-category')) changeCategory(event, request)

		if (event.querySelector('button')) requestBtn(event, request)
	})
})
