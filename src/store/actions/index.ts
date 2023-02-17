import * as ServicesActionCreators from './services';
import * as AuthActions from './authorization';
import * as RegisterActions from './registration';
import * as TransfersActions from './transfers';
import * as CardManagement from './cardsManagement';
import * as UsersActions from './users';
import * as TransactionsActions from './transactions';

const ApplicationActions = {
  ...ServicesActionCreators,
  ...AuthActions,
  ...RegisterActions,
  ...TransfersActions,
  ...CardManagement,
  ...UsersActions,
  ...TransactionsActions,
};

export default ApplicationActions;
