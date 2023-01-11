import axios from 'axios';

// const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '3';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

async function fetchSearchTopStories(searchTerm, page) {
  const res = await axios.get(
    `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
  );

  return res.data;
}

export default fetchSearchTopStories;
