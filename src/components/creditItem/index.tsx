import './index.css';
import React from 'react';
import ICredit from '../../types/interfaces/ICredit';
import { getStringDate } from '../../utils/formateDateTime';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';

interface CreditItemProps {
  credit: ICredit;
}

const CreditItem: React.FC<CreditItemProps> = (props) => {
  return (
    <div className="credit-item">
      <h4 className="credit-item__title">
        {props.credit.id}. Credit: {props.credit.entity}
      </h4>
      <h5 className="credit-description__title">A credit desciption:</h5>
      <div className="credit-item__description">
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
      </div>
    </div>
  );
};

export default CreditItem;
