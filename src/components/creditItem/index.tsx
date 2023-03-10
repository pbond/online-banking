import './index.css';
import React, { useEffect, useState } from 'react';
import ICredit from '../../types/interfaces/ICredit';
import { getStringDate } from '../../utils/formateDateTime';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { toggleActiveCreditButtonAllPay } from '../../utils/toggleActiveCreditButtonAllPay';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';
import ICreditPayment from '../../types/interfaces/ICreditPayment';
import CreditPaymentItem from '../creditPaymentItem';
import ICard from '../../types/interfaces/ICard';
import { defineNumberCard } from '../../utils/defineNumberCard';

interface CreditItemProps {
  credit: ICredit;
  credits: ICredit[];
  cards: ICard[];
  id: number;
}

const CreditItem: React.FC<CreditItemProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);
  const { cards: userCards } = useAppSelector((state) => state.usercards);

  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();
  const { payAllCredit, decreaseTheBalanceForCredit } = useActions();
  const [cards, setCards] = useState<ICard[]>(props.cards);
  const [credits, setCredits] = useState<ICredit[]>(props.credits);
  const [cardNumber, setCardNumber] = useState<number>(
    defineNumberCard(props.cards, props.credit.cardId),
  );

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      getCreditsByUserId(user.id, cards);
    }
  }, [user]);

  const payPaymentAll = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (user !== null) {
      decreaseTheBalanceForCredit(
        props.id,
        props.credits,
        props.cards,
        props.credit,
      );
      payAllCredit(props.id, props.credits, props.cards, props.credit);

      // decreaseTheBalance(props.id, props.credits, props.cards, props.credit);
    }
  };

  return (
    <div className="credit-item" id={`${props.id}`}>
      <h4 className="credit-item__title">
        {props.credit.id}. Credit: {props.credit.entity}
      </h4>
      <div className="credit-item__description">
        <div className="credit-description__info">
          <h5 className="credit-description__title">A credit desciption:</h5>
          <div className="credit-description__content">
            <div className="credit-description credit-description__sum">
              <div className="credit-description__text credit-description__sum-text">
                Credit sum ({CardCurrencyEnum.BYN}):
              </div>
              <div className="credit-description__value credit-description__sum-value">
                {props.credit.summOfCredit}
              </div>
            </div>

            <div className="credit-description credit-description__paid-sum">
              <div className="credit-description__text credit-description__paid-sum-text">
                Paid sum ({CardCurrencyEnum.BYN}):
              </div>
              <div className="credit-description__value credit-description__paid-sum-value">
                {props.credit.summPaid}
              </div>
            </div>

            <div className="credit-description credit-description__remainder">
              <div className="credit-description__text credit-description__remainder-text">
                Remainder ({CardCurrencyEnum.BYN}):
              </div>
              <div className="credit-description__value credit-description__remainder-value">
                {props.credit.remainder}
              </div>
            </div>

            <div className="credit-description credit-description__fine">
              <div className="credit-description__text credit-description__fine-text">
                Fine ({CardCurrencyEnum.BYN}):
              </div>
              <div className="credit-description__value credit-description__fine-value">
                {props.credit.fine}
              </div>
            </div>

            <div className="credit-description credit-description__term">
              <div className="credit-description__text credit-description__term-text">
                A credit term (DAY/DAYS):
              </div>
              <div className="credit-description__value credit-description__term-value">
                {props.credit.term}
              </div>
            </div>

            <div className="credit-description credit-description__start-date">
              <div className="credit-description__text credit-description__start-date-text">
                A credit start date:
              </div>
              <div className="credit-description__value credit-description__start-date-value">
                {getStringDate(props.credit.dateStart)}
              </div>
            </div>

            <div className="credit-description credit-description__card-number">
              <div className="credit-description__text credit-description__card-number-text">
                A credit card number:
              </div>
              <div className="credit-description__value credit-description__card-number-value">
                {cardNumber}
              </div>
            </div>

            <div className="credit-description credit-description__status">
              <div className="credit-description__text credit-description__status-text">
                A CREDIT STATUS:
              </div>
              <div className="credit-description__value credit-description__status-value">
                {props.credit.status}
              </div>
            </div>
          </div>
        </div>
        <div className="credit-description__button">
          <button
            onClick={(event) => {
              payPaymentAll(event);
            }}
            className={'button button-pay-all ' + props.credit.statusOfButton}
          >
            Pay all
          </button>
        </div>
      </div>

      <div className="credit-item__payments">
        <h5 className="credit-payments__title">Credits payments:</h5>
        <div className="credit-payments__content">
          <table className="credit-payments__table">
            <thead className="credit-payments__head">
              <tr>
                <th>???</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Status type</th>
                <th>Fine</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {props.credit.arrOfPayments.map((paymentItem: ICreditPayment) => (
                <CreditPaymentItem
                  key={paymentItem.id}
                  id={paymentItem.id}
                  payment={paymentItem}
                  cards={props.cards}
                  credits={props.credits}
                  credit={props.credit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditItem;
