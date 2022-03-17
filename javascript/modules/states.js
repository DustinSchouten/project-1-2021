export function showLoadingState() {
  let loading_state_text = document.querySelector('#loading_state_text');
  if (loading_state_text == null) { //If the loader doesn't exist at the beginning;
    loading_state_text = document.createElement('p');
    loading_state_text.id = 'loading_state_text';
    loading_state_text.textContent = 'Gegevens ophalen...';
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
  let error_state_text = document.querySelector('#error_state_text');
  if (error_state_text == null) { //If there is no error state text;
    let error_state_text = document.createElement('p');
    error_state_text.id = 'error_state_text';
    error_state_text.textContent = 'Error! Data kan niet worden opgehaald';
    const main_section = document.querySelector('#main_section');
    main_section.appendChild(error_state_text);
  }

  // Remove the remainding results if not all the results can be loaded;
  const book_items_list = document.querySelector('#book_items_list');
  book_items_list.classList.add('invisible');
  const amount_of_search_results_text = document.querySelector('#aantal_zoekresultaten');
  amount_of_search_results_text.classList.add('invisible');
}
