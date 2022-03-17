import { setAmountOfSearchResults } from './search_results.js'

export function renderDataToHTML(data,query,url_type) {
  let book_items_list = document.querySelector('#book_items_list');

  const results = data.results;
  results.forEach((book_item, idx) => {
    // Create new elements for each book item
    let li_book_item = document.createElement('li');
    let book_cover_img = document.createElement('img');
    let div_wrapper = document.createElement('div');
    let category = document.createElement('p');
    let book_title = document.createElement('h2');
    let authors = document.createElement('p');
    let languages = document.createElement('p');

    // Give all these elements a class
    li_book_item.classList.add('book_item');
    div_wrapper.classList.add('book_info');
    category.classList.add('category');
    authors.classList.add('authors');
    languages.classList.add('languages');

    // Filter all the data an display it in the created elements;
    book_title.textContent = book_item.titles[0];
    category.textContent = 'Categorie: ' + query;
    if (typeof(book_item.authors) != 'undefined') {
      let authors_string = '';
      book_item.authors.forEach((author,idx) => {
        authors_string += author + ', ';
      })
      authors.textContent = 'Auteurs: ' + authors_string.slice(0, -2);
    }
    else {
      authors.textContent = 'Auteurs: onbekend';
    }

    if (url_type == 'normal_oba_url') {
      book_cover_img.src = book_item.coverimages[1];
      let languages_string = '';
      book_item.languages.forEach((language,idx) => {
        languages_string += language + ', ';
      });
      languages.textContent = 'Taal: ' + languages_string.slice(0, -2);
    }

    // li_book_item.setAttribute('onclick','showPopup('+idx+')');
    if (url_type == 'staging_url') {
      book_cover_img.src = 'https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/047048069&token=c1322402'; // The staging data has no book cover images;

      const languages_dict = {'nl':'Nederlands','en':'Engels','x-none':'Onbekend'};
      languages.textContent = 'Taal: ' + languages_dict[book_item.languages[0]];
    }


    // Add all the book items to the DOM
    div_wrapper.appendChild(category)
    div_wrapper.appendChild(book_title)
    div_wrapper.appendChild(authors)
    div_wrapper.appendChild(languages)
    li_book_item.appendChild(book_cover_img)
    li_book_item.appendChild(div_wrapper)

    book_items_list.appendChild(li_book_item)
  });
  setAmountOfSearchResults()
}
