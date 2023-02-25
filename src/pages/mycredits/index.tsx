import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import ClientLayout from '../../layouts/client';
import PageTitle from '../../components/pageTitle';
import CreditList from '../../components/creditList';
import { useAppSelector } from '../../hooks/useAppSelector';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';

const MyCreditsPage = () => {
  const { user } = useAppSelector((state) => state.authuser);

  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);

  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();

  const [cards, setCards] = useState<ICard[]>([]);
  const [credits, setCredits] = useState<ICredit[]>([]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
      //console.log('cards in useeffect cardList: ', cards);
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      //console.log('cards in useeffect cardList: ', cards);
      getCreditsByUserId(user.id, cards);
    }
  }, [user]);

  console.log('cards in my-credits page: ', cards);
  console.log('credits in my-credits page: ', credits);
  return (
    <ClientLayout>
      <PageTitle title={'My credits'} />
      <CreditList credits={credits} cards={cards}></CreditList>
    </ClientLayout>
  );
};

export default MyCreditsPage;
