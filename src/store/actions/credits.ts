import { Dispatch } from 'redux';
import { CreditsActionTypes, CreditsManagementActions } from '../types/credits';
import creditsAPI from '../../api/creditsAPI';
import ICredit from '../../types/interfaces/ICredit';
import ICard from '../../types/interfaces/ICard';

export const getCreditsByUserId = (userid: number, userCards: ICard[]) => {
  return (dispatch: Dispatch<CreditsManagementActions>) => {
    try {
      dispatch({ type: CreditsActionTypes.FETCH_CREDITS });
      const response = creditsAPI.getCreditsByUserId(userid, userCards);
      dispatch({
        type: CreditsActionTypes.FETCH_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: CreditsActionTypes.FETCH_CREDITS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const addUserCredit = (newCredit: ICredit) => {
  return (dispatch: Dispatch<CreditsManagementActions>) => {
    try {
      dispatch({ type: CreditsActionTypes.UPDATE_CREDITS });
      const response = creditsAPI.addUserCredit(newCredit);
      dispatch({
        type: CreditsActionTypes.UPDATE_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: CreditsActionTypes.FETCH_CREDITS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const payCreditPayment = (
  idPayment: number,
  credits: ICredit[],
  cards: ICard[],
  credit: ICredit,
) => {
  return (dispatch: Dispatch<CreditsManagementActions>) => {
    try {
      dispatch({ type: CreditsActionTypes.UPDATE_CREDITS });
      const response = creditsAPI.payCreditPayment(
        idPayment,
        credits,
        cards,
        credit,
      );
      dispatch({
        type: CreditsActionTypes.UPDATE_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: CreditsActionTypes.FETCH_CREDITS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const payAllCredit = (
  idPayment: number,
  credits: ICredit[],
  cards: ICard[],
  credit: ICredit,
) => {
  return (dispatch: Dispatch<CreditsManagementActions>) => {
    try {
      dispatch({ type: CreditsActionTypes.UPDATE_CREDITS });
      const response = creditsAPI.payAllCredit(
        idPayment,
        credits,
        cards,
        credit,
      );
      dispatch({
        type: CreditsActionTypes.UPDATE_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: CreditsActionTypes.FETCH_CREDITS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const updateCredits = (userCredits: ICredit[]) => {
  return (dispatch: Dispatch<CreditsManagementActions>) => {
    try {
      dispatch({ type: CreditsActionTypes.UPDATE_CREDITS });
      const response = creditsAPI.updateCredits(userCredits);
      dispatch({
        type: CreditsActionTypes.UPDATE_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        dispatch({
          type: CreditsActionTypes.UPDATE_CREDITS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
