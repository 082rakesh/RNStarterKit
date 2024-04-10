import {createAsyncThunk} from '@reduxjs/toolkit';
import {Root} from '../model/Restaurants';
import ApiManager from '../network/http/ApiManager';
import {GenericRequest} from '../network/http/GenericRequest';
import {GenericResponse} from '../network/http/GenericResponse';
import {
  ALL_RESTURANTS,
  CATAGORY,
  RESTUARANTS_DETAILS,
} from '../utils/Constants';
import {FETCH_RESTAURANTS, FETCH_RESTAURANTS_DETAIL} from './actions';
import {MenuCard} from '../model/MenuCard';

const getRestraunts = async () => {
  const request = new GenericRequest();
  request.apiName = ALL_RESTURANTS;

  const response = (await ApiManager.get(request)) as GenericResponse<Root>;
  if (response.isSuccess) {
    const jsonResponse = response.data as Root;
    const resturants =
      jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    return resturants;
  } else {
    response.isSuccess = false;
    console.log(`response.isSuccess: ${response.isSuccess}`);
    return response;
  }
};

const getMenuList = async (resID: string) => {
  const request = new GenericRequest();
  request.apiName = RESTUARANTS_DETAILS + resID;
  const response = (await ApiManager.get(request)) as GenericResponse<MenuCard>;
  const jsonResponse = response.data as MenuCard;

  const filteredCardList =
    jsonResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.filter(
      card => card.card?.card['@type'] === CATAGORY,
    );

  const cardList = filteredCardList.map(item => item.card.card);
  return cardList;
};

export const fetchRestaurants = createAsyncThunk(
  FETCH_RESTAURANTS,
  getRestraunts,
);

export const fetchMenuList = createAsyncThunk(
  FETCH_RESTAURANTS_DETAIL,
  getMenuList,
);
