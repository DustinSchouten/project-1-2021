import { getData } from './modules/get_data.js';
import { setFilters } from './modules/filters.js';

function loadAllData() {
  getData('voeding','staging_url')
  getData('voeding','normal_oba_url')
  getData('sport','staging_url')
  getData('sport','normal_oba_url')
  getData('fitness','staging_url')
  getData('conditie','staging_url')
}

function main() {
  loadAllData()
  console.log('All data loaded')
}

main()
