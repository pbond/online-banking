import CardCurrencyEnum from '../enums/CardCurrencyEnum';
import { generateCardNumber } from '../../utils/formateCardData';
import dayjs from 'dayjs';

export default interface ICard {
  id: number; // internal
  number: number; // 5454 1234 1234 1234
  expired: number; // Date.now() 08/25
  currency: CardCurrencyEnum; // BYN/RUB/USD
  account: string; // IBAN BY134678484000000154501
  userid: number;
  balance: number;
  background: string;
  isShown: boolean;
}
