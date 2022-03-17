export function showLoadingState() {
  let loading_state_text = document.querySelector('#loading_state_text');
  if (loading_state_text == null) { //If the loader doesn't exist at the beginning;
    loading_state_text = document.createElement('p');
    loading_state_text.id = 'loading_state_text';
    loading_state_text.textContent = 'Loading...';
    const main_section = document.querySelector('#main_section');
    main_section.appendChild(loading_state_text)
  }
  loading_state_text.classList.remove('invisible');
}

export function hideLoadingState() {
  const loading_state_text = document.querySelector('#loading_state_text');
  loading_state_text.classList.add('invisible');
}

export function showErrorState() {
  console.log('ERROR: Data kon niet geladen worden')
}
