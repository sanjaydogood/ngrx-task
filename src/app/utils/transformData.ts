import { tableRow } from '../shared/models/tableRow.model';

export const transformData = (data): tableRow[] => {
  const rows: tableRow[] = [];
  for (let index = 0; index < data.length; index++) {
    rows.push({ id: -404, ...data[index] });
  }
  return rows;
};
