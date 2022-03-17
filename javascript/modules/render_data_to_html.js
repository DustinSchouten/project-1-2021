import { setAmountOfSearchResults } from './search_results.js'

export function renderDataToHTML(data,query,url_type) {
  let book_items_list = document.querySelector('#book_items_list');

  // If the ul book_items_list doesn't exist;
  if (book_items_list == null) { // If the loader doesn't exist at the beginning;
    book_items_list = document.createElement('ul');
    book_items_list.id = 'book_items_list';
    const main_section = document.querySelector('#main_section');
    main_section.appendChild(book_items_list)
  }

  const results = data.results;
  results.forEach((book_item, idx) => {

    // Create new elements for each book item
    let li_book_item = document.createElement('li');
    let book_cover_img = document.createElement('img');
    let div_wrapper = document.createElement('div');
    let category = document.createElement('p');
    let book_title = document.createElement('h2');
    let authors = document.createElement('p');
    let details = document.createElement('details');
    let summary_wrapper = document.createElement('summary');
    let summary = document.createElement('p');
    let languages = document.createElement('p');

    // Give all these elements a class if they needed;
    li_book_item.classList.add('book_item');
    div_wrapper.classList.add('book_info');
    category.classList.add('category');
    authors.classList.add('authors');
    languages.classList.add('languages');

    // Filter all the data an display it in the created elements;
    book_title.textContent = book_item.titles[0];
    book_title.ariaLabel = book_item.titles[0];
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
    summary_wrapper.textContent = 'Lees beschrijving';
    summary.textContent = (book_item.summaries || 'Geen beschrijving beschikbaar');
    summary.ariaLabel = (book_item.summaries || 'Geen beschrijving beschikbaar');

    //  The data sources have a different data structure;
    if (url_type == 'normal_oba_url') {
      book_cover_img.src = book_item.coverimages[1];
      book_cover_img.alt = 'Coverafbeelding van het boek: ' + book_item.titles[0];
      let languages_string = '';
      book_item.languages.forEach((language,idx) => {
        languages_string += language + ', ';
      });
      languages.textContent = 'Taal: ' + languages_string.slice(0, -2);
    }

    if (url_type == 'staging_url') {
      book_cover_img.src = 'https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/047048069&token=c1322402'; // The staging data has no book cover images;
      book_cover_img.alt = 'Coverafbeelding van het boek: ' + book_item.titles[0];
      const languages_dict = {'nl':'Nederlands','en':'Engels','x-none':'Onbekend'};
      languages.textContent = 'Taal: ' + languages_dict[book_item.languages[0]];
    }


    // Add all the book items to the DOM
    div_wrapper.appendChild(category)
    div_wrapper.appendChild(book_title)
    div_wrapper.appendChild(authors)
    details.appendChild(summary_wrapper)
    details.appendChild(summary)
    div_wrapper.appendChild(languages)
    div_wrapper.appendChild(details)
    li_book_item.appendChild(book_cover_img)
    li_book_item.appendChild(div_wrapper)
    book_items_list.appendChild(li_book_item)
  });

  setAmountOfSearchResults()

  window.location.href = '#overzicht';
}
