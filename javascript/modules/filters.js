import { setAmountOfSearchResults } from './search_results.js'

const input_filter = document.querySelector('#input');
input_filter.addEventListener('keyup',setFilters);

const category_filter = document.querySelector('#categorie');
category_filter.addEventListener('change',setFilters);

const language_filter = document.querySelector('#taal');
language_filter.addEventListener('change',setFilters);

export function setFilters() {
  const input_filter_value = input_filter.value;
  const language_filter_value = language_filter.value;
  const category_filter_value = category_filter.value;
  const book_items = document.querySelectorAll('.book_item');

  book_items.forEach((book_item,idx) => {
    book_item.classList.remove('invisible') // By default, make all the book items visible;
  });

  if (input_filter_value != '') { // If the filter is activated;
    book_items.forEach((book_item,idx) => {
      const title = book_item.querySelector('h2').textContent.toUpperCase();
      if (title.includes(input_filter_value.toUpperCase()) == false) { // If the title doesn't match with the selected filter;
        book_item.classList.add('invisible');
      }
    });
  }

  if (language_filter_value != 'leeg') { // If the filter is activated
    book_items.forEach((book_item,idx) => {
      const languages = book_item.querySelector('.languages').textContent.split(': ')[1];
      if (languages.includes(language_filter_value) == false) { // If the language doesn't match with the selected filter
        book_item.classList.add('invisible');
      }
    });
  }

  if (category_filter_value != 'leeg') { // If the filter is activated
    book_items.forEach((book_item,idx) => {
      const category = book_item.querySelector('.category').textContent.split(': ')[1];
      if (category != category_filter_value) {
        book_item.classList.add('invisible');
      }
    });
  }

  setAmountOfSearchResults()
}
