import './index.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import ICredit from '../../types/interfaces/ICredit';
import CreditItem from '../creditItem';

const CreditList = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);
  const { cards } = useAppSelector((state) => state.usercards);
  const { getCreditsByUserId } = useActions();
  const [credits, setCredits] = useState<ICredit[]>([]);

  console.log('credits: ', credits);

  useEffect(() => {
    if (user !== null) {
      getCreditsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

  return (
    <div className="creditList-container">
      <h3 className="creditList__title">My credits list:</h3>
      <div className="creditList__content">
        {credits.map((creditItem: ICredit) => (
          <CreditItem
            id={creditItem.id}
            key={creditItem.id}
            credits={credits}
            credit={creditItem}
            cards={cards}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditList;
