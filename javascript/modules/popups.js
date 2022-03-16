export function showPopup() {
  const popup = document.querySelector('#details_popup');
  popup.classList.add('visible');
  const popup_background_overlay = document.querySelector('#popup_background_overlay');
  popup_background_overlay.classList.add('visible')
}

export function hidePopup() {
  const popup = document.querySelector('#details_popup');
  popup.classList.remove('visible');
  const popup_background_overlay = document.querySelector('#popup_background_overlay');
  popup_background_overlay.classList.remove('visible')
}
