import {
	uploadFiles,
	lazyLoadImage,
	animateEmergence,
	forTheEntireWindow,
	deleteImage,
	hamburger,
	textEditor,
	textEdited,
	selectCategory,
	sortCategory,
	upButton,
	mobileHeightAutoResize,
} from './func.js'

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('[enctype="multipart/form-data"]')) uploadFiles()
	
	if (document.querySelector('img')) lazyLoadImage()
	
	if (document.querySelector('.animate-emergence')) animateEmergence()
	
	if (document.querySelector('.for-the-entire-window')) forTheEntireWindow()
	
	if (document.querySelector('.delete-image')) deleteImage()

	if (document.querySelector('.hamburger')) hamburger()

	if (document.querySelector('textarea')) textEditor()

	if (document.querySelector('pre')) textEdited()

	if (document.querySelector('.dropdown--select-category')) selectCategory()

	if (document.querySelector('.dropdown__list--sort')) sortCategory()

	if (document.querySelector('#upButton')) upButton()

	// if (document.querySelector('.upper-preview')) mobileHeightAutoResize()

	// validation email
	// preg_match('/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u', $item)
})