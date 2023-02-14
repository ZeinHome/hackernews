import axios from 'axios';

import {
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from '../../constants';

async function fetchSearchTopStories(searchTerm, page) {
  try {
    const res = await axios.get(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    );

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchSearchTopStories;
