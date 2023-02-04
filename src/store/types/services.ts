import IService from "../../types/interfaces/IService";

export interface ServicesState {
  loadingServices: boolean,
  services: IService[],
  errorLoadingServices: string,
  errorAddNewService: string
}

export enum ServicesActionTypes {
  FETCH_SERVICES = 'FETCH_SERVICES',
  FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS',
  FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR',
  ADD_NEW_SERVICE_ERROR = 'ADD_NEW_SERVICE_ERROR',
  DELETE_SERVICE = "DELETE_SERVICE"
}

interface FetchServicesAction {
  type: ServicesActionTypes.FETCH_SERVICES,
}

interface FetchServicesActionSuccess {
  type: ServicesActionTypes.FETCH_SERVICES_SUCCESS,
  payload: IService[]
}

interface FetchServicesActionError {
  type: ServicesActionTypes.FETCH_SERVICES_ERROR,
  payload: string
}

interface AddNewServiceErrorAction {
  type: ServicesActionTypes.ADD_NEW_SERVICE_ERROR,
  payload: string
}

interface DeleteServiceAction {
  type: ServicesActionTypes.DELETE_SERVICE,
  payload: number
}



export type ServicesActions = FetchServicesAction
  | FetchServicesActionSuccess
  | FetchServicesActionError
  | AddNewServiceErrorAction
  | DeleteServiceAction



