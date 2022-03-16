import { setAmountOfSearchResults } from './search_results.js'

const datalist = [] // Used in the filters
export function renderDataToHTML(data) {
  datalist.push(data)
  const book_items_list = document.querySelector('#book_items_list');
  const results = data.results;

  results.forEach((item, idx) => {
    console.log(item)
    let li_book_item = document.createElement('li');
    li_book_item.classList.add('book_item');
    li_book_item.setAttribute('onclick','showPopup('+idx+')');
    let book_cover_img = document.createElement('img');
    if (typeof(item.coverimages) == 'undefined') {
      book_cover_img.src = item.coverimages[0];
    }
    else {
      book_cover_img.src = item.coverimages[1];
    }
    let div_wrapper = document.createElement('div');
    div_wrapper.classList.add('book_info');
    let book_title = document.createElement('h2');
    book_title.textContent = item.titles[0];
    let authors = document.createElement('p');
    authors.classList.add('authors')
    let authors_string = '';
    if (typeof(item.authors) != 'undefined') { // If the book has an author
      item.authors.forEach((element, i) => {
        authors_string += item.authors[i] + ', '
      })
      authors.textContent = 'Auteurs: ' + authors_string.slice(0, -2);
    }
    else {
      authors.textContent = 'Auteurs: onbekend';
    }

    let type = document.createElement('p'); //Boek, film, tijdschrift etc...
    type.textContent = 'Type: ' + item.formats[0].text;
    type.classList.add('type');
    let year = document.createElement('p');
    year.textContent = 'Jaar: ' + item.year;
    let languages = document.createElement('p');
    languages.classList.add('languages');
    let languages_string = '';
    item.languages.forEach((element, i) => {
      languages_string += item.languages[i] + ', '
    })
    languages.textContent = 'Taal: ' + languages_string.slice(0, -2);;

    div_wrapper.appendChild(book_title)
    div_wrapper.appendChild(authors)
    div_wrapper.appendChild(type)
    div_wrapper.appendChild(year)
    div_wrapper.appendChild(languages)
    li_book_item.appendChild(book_cover_img)
    li_book_item.appendChild(div_wrapper)

    book_items_list.appendChild(li_book_item)


    // const html = `
    //         <li>
    //           <img src="${
    //             item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
    //           }">
    //           <div class='book_info'>
    //             <h2>${item.titles[0]}</h2>
    //             <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
    //           </div>
    //
    //         </li>
    //       `;
    // ul.insertAdjacentHTML('beforeend', html);
  });
  setAmountOfSearchResults()

  console.log('------------------')
}

export {datalist}
