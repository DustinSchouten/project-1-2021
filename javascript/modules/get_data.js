import { renderDataToHTML } from './render_data_to_html.js';
import { voeding_data } from './voeding_data.js';
import { sport_data } from './sport_data.js';

export async function getData(query) {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  // const query = 'tolkien';
  const key = '1e19898c87464e239192c8bfe422f280';
  const secret = '4289fec4e962a33118340c888699438d';

  // ffbc1ededa6f23371bc40df1864843be
  const detail = 'Default';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  const config = {
    Authorization: `Bearer ${secret}`
  };

  const response = await fetch(url, config)
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderDataToHTML(data);
    })
    .catch(err => {
      console.log(err);
      if (query == 'voeding') {
        renderDataToHTML(voeding_data);
      }
      else if (query == 'sport') {
        renderDataToHTML(sport_data);
      }
    })

    .finally(() => { // Always executed
      console.log('Program finished')
    })
}
