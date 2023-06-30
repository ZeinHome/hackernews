import Button from '../Button';
import PropTypes from 'prop-types';

import { Table, TableRow, Titles, Text } from './Tablet.styled';

export default function Tablet({ listArr = [], removeList }) {
  return listArr.length ? (
    <Table>
      <TableRow style={{ background: '#000' }}>
        <Titles style={{ width: '40%' }}>Title</Titles>
        <Titles style={{ width: '30%' }}>author</Titles>
        <Titles style={{ width: '20%' }}>Comments</Titles>
        <Titles style={{ width: '10%' }}>Points</Titles>
        <Titles
          style={{
            width: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Delet
        </Titles>
      </TableRow>
      {listArr.map(
        ({
          title,
          url,
          author,
          num_comments: numComments,
          points,
          objectID,
        }) => (
          <TableRow key={objectID}>
            <a style={{ width: '40%' }} href={url}>
              {title}
            </a>
            <Text style={{ width: '30%' }}>{author}</Text>
            <Text style={{ width: '20%' }}>{numComments}</Text>
            <Text style={{ width: '10%' }}>{points}</Text>
            <div style={{ width: '10%' }}>
              <Button
                onClick={() => removeList(objectID)}
                styled={{
                  width: '100%',
                  color: 'inherit',
                  padding: 0,
                }}
              >
                Отбросить
              </Button>
            </div>
          </TableRow>
        )
      )}
    </Table>
  ) : null;
}

Tablet.propTypes = {
  listArr: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  removeList: PropTypes.func.isRequired,
};
