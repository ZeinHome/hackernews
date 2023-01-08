import Button from '../Button';
import { Table, TableRow, Text } from './Tablet.styled';

export default function Tablet({ listArr = [], removeList }) {
  return (
    <Table>
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
  );
}
