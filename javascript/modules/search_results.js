export function setAmountOfSearchResults() {
  const book_items = document.querySelectorAll('.book_item');
  let book_items_length = book_items.length;
  book_items.forEach((book_item,idx) => {
    if (book_item.classList.contains('invisible')) {
      book_items_length -= 1;
    }
  })

  const amount_of_search_results_text = document.querySelector('#aantal_zoekresultaten');
  amount_of_search_results_text.textContent = 'Aantal zoekresultaten: ' + book_items_length;
}
