export default interface ICredit {
  id: number;
  summOfCredit: number; // summ of the credit
  term: number; // 30, 20, 10 days
  dateStart: number; // date of the issue credit
  summPaid: number; // a paid summ
  remainder: number; // remainder
  fine: number; // пеня
  userId: number;
  isAllPaid: boolean; // is everything paid
}
