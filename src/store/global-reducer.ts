import {
  SET_APP_LOADING,
  SHOW_MENU,
  SHOW_MODAL,
  SHOW_ALERT
} from './global-actions'

const initialState = {
  appIsLoad: false,
  showMenu: '',
  showModal: '',
  modalParams: {},
  showAlert: false,
  alertMessage: ' ',
  alertSuccess: true
}

const reducer = (state = initialState, action = {}) => {
  // @ts-ignore: Unreachable code error
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        // @ts-ignore: Unreachable code error
        appIsLoad: action.value
      }

    // Menu burger
    case SHOW_MENU:
      return {
        ...state,
        // @ts-ignore: Unreachable code error
        showMenu: action.name
      }

    case SHOW_MODAL:
      return {
        ...state,
        // @ts-ignore: Unreachable code error
        showModal: action.name,
        // @ts-ignore: Unreachable code error
        modalParams: action.params
      }

    case SHOW_ALERT:
      return {
        ...state,
        // @ts-ignore: Unreachable code error
        alertMessage: action.message,
        // @ts-ignore: Unreachable code error
        alertSuccess: action.success,
        showAlert: !state.showAlert
      }

    default:
      return state
  }
}

export default reducer