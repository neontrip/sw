import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_PEOPLE_DATA,
  FETCH_PLANET_DATA,
  SHOW_PLANET_ERROR,
  HIDE_PLANET_ERROR,
  SHOW_PEOPLE_ERROR,
  HIDE_PEOPLE_ERROR,
  SHOW_SEARCH_ERROR,
  HIDE_SEARCH_ERROR,
  SET_SEARCH_RESPONSE,
  CLEAR_SEARCH_RESPONSE
} from './types';

const initialState = {
  people: [],
  planet: [],
  favorites: [],
  id: [],
  peopleError: null,
  planetError: null,
  searchResponse: null,
  searchError: null
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PEOPLE_DATA: {
      const newState = {
        ...state,
        people: payload
      }
      return newState
    }
    case FETCH_PLANET_DATA: {
      const newState = {
        ...state,
        planet: payload
      }
      return newState
    }
    case ADD_TO_FAVORITES: {
      const newState = {
        ...state,
        favorites: [...state.favorites, payload],
        id: [...state.id, payload.id],
      };
      return newState;
    }
    case REMOVE_FROM_FAVORITES: {
      const newState = {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== payload),
        id: state.id.filter((id) => id !== payload),
      };
      return newState;
    }
    case SHOW_PEOPLE_ERROR: {
      const newState = {
        ...state,
        peopleError: payload
      }
      return newState
    }
    case HIDE_PEOPLE_ERROR: {
      const newState = {
        ...state,
        peopleError: null
      }
      return newState
    }
    case SHOW_PLANET_ERROR: {
      const newState = {
        ...state,
        planetError: payload
      }
      return newState
    }
    case HIDE_PLANET_ERROR: {
      const newState = {
        ...state,
        planetError: null
      }
      return newState
    }
    case SET_SEARCH_RESPONSE: {
      const newState = {
        ...state,
        searchResponse: payload
      }
      return newState
    }
    case CLEAR_SEARCH_RESPONSE: {
      const newState = {
        ...state,
        searchResponse: null
      }
      return newState
    }
    case SHOW_SEARCH_ERROR: {
      const newState = {
        ...state,
        searchError: payload
      }
      return newState
    }
    case HIDE_SEARCH_ERROR: {
      const newState = {
        ...state,
        searchError: null
      }
      return newState
    }
    default:
      return state;
  }
};
