import { HttpHeader } from './httpHeader.model';

export interface RequestHeader extends HttpHeader {
  Authorization: string;
  Accept: string;
}
