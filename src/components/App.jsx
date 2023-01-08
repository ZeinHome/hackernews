import { useEffect, useState } from 'react';
import axios from 'axios';

import Search from './Search';
import Tablet from './Tablet';
import { GlobalStyle } from './GlobalStyle';
import { Page, Interactions } from './App.styled';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

function App() {
  const [listArr, setListArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState(DEFAULT_QUERY);

  const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`;

  // useEffect(() => {
  //   axios.get(url).then((result) => setListArr(result.data.hits));
  // }, [url]);

  const fetchSearchTopStories = () =>
    axios.get(url).then((result) => setListArr(result.data.hits));

  const onSearchSubmit = (event) => {
    event.preventDefault();
    fetchSearchTopStories();
  };

  const removeList = (id) => {
    const filterList = listArr.filter((item) => item.objectID !== id);
    console.log(listArr);
    setListArr(filterList);
  };

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        <Interactions>
          <Search
            onSearchChange={onSearchChange}
            value={searchTerm}
            onSubmit={onSearchSubmit}
          >
            Поиск
          </Search>
          <Tablet
            listArr={listArr}
            searchTerm={searchTerm}
            removeList={removeList}
          />
        </Interactions>
      </Page>
    </>
  );
}

export default App;
