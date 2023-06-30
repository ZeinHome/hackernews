import { useEffect, useState } from 'react';

import Search from './Search';
import Tablet from './Tablet';
import Button from './Button';
import Loading from './Loading';
import { GlobalStyle } from './GlobalStyle';
import fetchSearchTopStories from '../helpres/Server';
import { Page, Interactions } from './App.styled';

function App() {
  const [listArr, setListArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [notFetch, setNotFetch] = useState(false);
  const [loding, setLoading] = useState(false);

  useEffect(() => {
    const news = fetchSearchTopStories(searchTerm, page);

    news.then((res) => (!!res ? setError(false) : setError(true)));

    if (!searchTerm || error || (notFetch && page === 0)) {
      return;
    }
    setLoading(true);

    news.then((res) =>
      setResult((prev) => {
        const oldHits =
          prev && prev[searchTerm] ? prev[searchTerm].hits : [];

        const newKeys = res?.hits.map((item) => item.objectID);

        if (prev) {
          const oldState = prev[searchTerm]?.hits.filter(
            (item) => item !== newKeys?.includes(item.objectID)
          );

          const filters = prev[searchTerm]?.hits.filter((item) =>
            newKeys?.includes(item.objectID)
          );

          if (filters?.length) {
            return {
              ...prev,
              [searchTerm]: {
                hits: [...oldState],
                page,
              },
            };
          }
        }
        setLoading(false);
        return {
          ...prev,
          [searchTerm]: {
            hits: [...oldHits, ...res.hits],
            page,
          },
        };
      })
    );

    if (notFetch) {
      return;
    }

    news.then((res) => setListArr((prev) => [...prev, ...res?.hits]));
  }, [searchTerm, page, error, notFetch]);

  const removeList = (id) => {
    const filterList = listArr.filter((item) => item.objectID !== id);

    setListArr(filterList);
  };

  const onSearchSubmit = (value) => {
    setSearchTerm(value);
    setListArr([]);
    setPage(0);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const needsToSearchTopStories = (searchTerm) => {
    setSearchTerm(searchTerm);
    setNotFetch(true);
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
            setNotFetch={setNotFetch}
          >
            Поиск
          </Search>
          {loding ? (
            <Loading />
          ) : error ? (
            <div
              style={{
                padding: '20px',
                backgroundColor: '#f44336',
                color: 'white',
                marginTop: '30px',
              }}
            >
              <strong>Danger!</strong> Indicates a dangerous or
              potentially negative action.
            </div>
          ) : (
            <Tablet listArr={listArr} removeList={removeList} />
          )}
          {loding ? null : listArr.length ? (
            <Button onClick={() => loadMore()}>Больше историй</Button>
          ) : null}
        </Interactions>
      </Page>
    </>
  );
}

export default App;
