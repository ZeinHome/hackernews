import { useEffect, useState } from 'react';

import Search from './Search';
import Tablet from './Tablet';
import Button from './Button';
import { GlobalStyle } from './GlobalStyle';
import fetchSearchTopStories from '../helpres/Server';
import { Page, Interactions } from './App.styled';

function App() {
  const [listArr, setListArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const news = fetchSearchTopStories(searchTerm, page);
    if (!searchTerm) {
      return;
    }

    news.then((res) => setListArr((prev) => [...prev, ...res.hits]));
    news.then((res) =>
      setResult((prev) => {
        const oldHits =
          prev && prev[searchTerm] ? prev[searchTerm].hits : [];

        return {
          ...prev,
          [searchTerm]: {
            hits: [...oldHits, ...res.hits],
            page,
          },
        };
      })
    );
  }, [searchTerm, page]);

  const removeList = (id) => {
    const filterList = listArr.filter((item) => item.objectID !== id);

    setListArr(filterList);
  };

  const onSearchSubmit = (value) => {
    setSearchTerm(value);
    setListArr([]);
    setPage(0);
  };

  const loadMore = () => setPage((prev) => prev + 1);

  const needsToSearchTopStories = (searchTerm) => {
    setListArr(result[searchTerm].hits);
    setPage(result[searchTerm].page);
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        <Interactions>
          <Search
            onSubmit={onSearchSubmit}
            needsToSearchTopStories={needsToSearchTopStories}
            result={result}
          >
            Поиск
          </Search>
          <Tablet listArr={listArr} removeList={removeList} />
          {listArr.length ? (
            <Button onClick={() => loadMore()}>Больше историй</Button>
          ) : null}
        </Interactions>
      </Page>
    </>
  );
}

export default App;
