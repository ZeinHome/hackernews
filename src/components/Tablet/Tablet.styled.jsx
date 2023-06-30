import styled from 'styled-components';

export const Table = styled.ul`
  margin: 20px 0;
`;
export const TableRow = styled.li`
  display: flex;
  line-height: 24px;
  white-space: nowrap;
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
`;

export const Titles = styled.h2`
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: #fff;
`;

export const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
`;

export const TableHeader = styled.div`
  line-height: 24px;
  font-size: 16px;
  padding: 0 10px;
  justify-content: space-between;
`;
export const TableEmpty = styled.div`
  margin: 200px;
  text-align: center;
  font-size: 16px;
`;
