import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import FormTransfer from '../../components/formTransfer';
import { ITransferData } from '../../types/interfaces/ITransaction';
import FormTransferSkeleton from '../../components/formTransferSkeleton';
import FormTransferResult from '../../components/formTransferResult';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TransferStatus } from '../../types/enums/TransferStatus';
import EmptyBox from '../../components/enptyBox';

const TransfersPage = () => {
  const { transferStatus, errorTransfer } = useAppSelector(
    (state) => state.transfers,
  );
  const { cards } = useAppSelector((state) => state.usercards);
  const { user } = useAppSelector((state) => state.authuser);
  const { makeATransferByNumberCard, createNewTransfer } = useActions();

  useEffect(() => {
    createNewTransfer();
  }, []);

  const handleTransfer = (transferData: ITransferData) => {
    if (user) {
      makeATransferByNumberCard(transferData);
    }
  };
  return (
    <ClientLayout>
      <PageTitle
        title={'Transfers from card to card'}
        description={
          'Online service for money transfers from card to card of any bank'
        }
      />

      {!user?.isDisabledOperations ? (
        <>
          <div className="bg-white py-6 sm:py-8 lg:py-18">
            {transferStatus === TransferStatus.CREATE && (
              <FormTransfer
                cards={cards}
                idUser={user?.id}
                handleTransfer={handleTransfer}
              />
            )}
            {transferStatus === TransferStatus.LOADING && (
              <FormTransferSkeleton />
            )}
            {transferStatus === TransferStatus.RESULT_SUCCESS && (
              <FormTransferResult
                icon={faCheck}
                text={'Translation completed successfully'}
                handlerResult={createNewTransfer}
              />
            )}
            {transferStatus === TransferStatus.RESULT_ERROR && (
              <FormTransferResult
                icon={faXmark}
                text={'Translation failed'}
                handlerResult={createNewTransfer}
                description={errorTransfer}
              />
            )}
          </div>
        </>
      ) : (
        <EmptyBox text={'Operations for this user are disabled'} />
      )}
    </ClientLayout>
  );
};

export default TransfersPage;
