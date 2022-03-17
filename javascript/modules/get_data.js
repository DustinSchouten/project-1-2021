import { renderDataToHTML } from './render_data_to_html.js';
import { voeding_data } from './voeding_data.js';
import { sport_data } from './sport_data.js';
import { showLoadingState } from './states.js'
import { hideLoadingState } from './states.js'
import { showErrorState } from './states.js'

export async function getData(query,url_type) {
  showLoadingState()
  let url;

  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '4289fec4e962a33118340c888699438d';

  if (url_type == 'normal_oba_url') {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const detail = 'Default';
    url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  }

  else if (url_type == 'staging_url') {
    const endpoint = 'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=';
    url = `${endpoint}${query}&authorization=${key}&output=json`;
  }

  const config = {
    Authorization: `Bearer ${secret}`
  };
  const response = await fetch(url, config)
    .then(response => {
      return response.json();
    })
    .then(data => {
      hideLoadingState();
      renderDataToHTML(data,query,url_type);
    })

    .catch(err => {
      console.log(err);
      try {
        const data_dict = {'voeding':voeding_data,'sport':sport_data};
        renderDataToHTML(data_dict[query],query,url_type);
      }
      catch {
        hideLoadingState();
        showErrorState();
      }
    })

    .finally(() => {
      console.log('Program finished')
    })
}
