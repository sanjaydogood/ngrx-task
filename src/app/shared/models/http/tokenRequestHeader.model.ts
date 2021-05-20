import { HttpHeader } from './httpHeader.model';

export interface TokenRequestHeader extends HttpHeader {
  Accept: string;
  'api-token': string;
  'user-email': string;
}
