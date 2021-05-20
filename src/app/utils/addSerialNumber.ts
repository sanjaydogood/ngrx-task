import { tableRow } from '../shared/models/tableRow.model';

export function addSerialNumber(tableData: tableRow[]): tableRow[] {
  return tableData.map((row, index) => {
    return { ...row, id: index + 1 };
  });
}
