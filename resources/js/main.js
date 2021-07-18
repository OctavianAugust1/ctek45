import {
	uploadFiles,
	lazyLoadImage,
	animateEmergence,
	forTheEntireWindow,
	deleteImage,
	rotateCategory,
	hamburger,
	textEditor,
	changeImage,
	// textEdited,
	sortCategory,
	upButton,
	dragAndDrop,
} from './func.js'

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('[enctype="multipart/form-data"]:not(.change-image)')) uploadFiles()
	
	if (document.querySelector('img')) lazyLoadImage()
	
	if (document.querySelector('.animate-emergence')) animateEmergence()
	
	if (document.querySelector('.for-the-entire-window')) forTheEntireWindow()
	
	if (document.querySelector('.delete-image')) deleteImage()

	if (document.querySelector('.rotate-categories')) rotateCategory()

	if (document.querySelector('.hamburger')) hamburger()

	if (document.querySelector('textarea') || (document.querySelector('.baloon') && document.querySelector('#balloon'))) textEditor()

	if (document.querySelector('.change-image')) changeImage()

	// if (document.querySelector('pre')) textEdited()

	// if (document.querySelector('.dropdown--select-category')) selectCategory()

	if (document.querySelector('.dropdown__list--sort')) sortCategory()

	if (document.querySelector('#upButton')) upButton()

	if (document.querySelector('.dragdrop')) dragAndDrop()

	// validation email
	// preg_match('/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u', $item)
})