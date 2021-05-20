import { tableRow } from '../shared/models/tableRow.model';

export function createDictHeadingObject(letter: string): tableRow {
  return { id: -1, name: letter.toUpperCase() };
}
