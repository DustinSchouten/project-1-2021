import { datalist } from './render_data_to_html.js';
import { setAmountOfSearchResults } from './search_results.js'

// const searchbar = document.querySelector('#search')
// searchbar.addEventListener('keyup',showSearchbarResults);
//
// function showSearchbarResults(e) {
//   let userinput = searchbar.value;
//   console.log(userinput)
// }

const language_filter = document.querySelector('#taal');
language_filter.addEventListener('change',setFilters);

// const language_filter = document.querySelector('#taal');
// language_filter.addEventListener('change',setFilters);

const type_filter = document.querySelector('#type');
type_filter.addEventListener('change',setFilters);

export function setFilters() {
  const language_filter_value = language_filter.value;
  const type_filter_value = type_filter.value;
  const book_items = document.querySelectorAll('.book_item')

  book_items.forEach((book_item,idx) => {
    book_item.classList.remove('invisible') // By default, make all the book items visible;
  });

  if (language_filter_value != 'leeg') { // If the filter is activated
    book_items.forEach((book_item,idx) => {
      const languages = book_item.querySelector('.languages').textContent.split(': ')[1];
      if (languages != language_filter_value) { // If the language doesn't match with the selected filter
        book_item.classList.add('invisible');
      }
    });
  }

  if (type_filter_value != 'leeg') {
    book_items.forEach((book_item,idx) => {
      const type = book_item.querySelector('.type').textContent.split(': ')[1];
      if (type_filter_value != 'Overige') {
        if (type != type_filter_value) {
          book_item.classList.add('invisible');
        }
      }
      else { // If the filter is set to overige;
        const most_important_types = ['Boek','Schooltv','Tijdschrift','Film','Uittreksel'];
        if (most_important_types.includes(type)) {
          book_item.classList.add('invisible');
        }
      }
    });
  }
  setAmountOfSearchResults()
}
