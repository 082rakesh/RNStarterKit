import {useCallback, useEffect, useState} from 'react';
import {Card4, MenuCard} from '../../model/MenuCard';
import {RESTUARANTS_DETAILS, CATAGORY} from '../../utils/Constants';
import ApiManager from '../http/ApiManager';
import {GenericRequest} from '../http/GenericRequest';
import {GenericResponse} from '../http/GenericResponse';

export const useRestaunrantsDetails = (resID: string) => {
  const [menuList, setMenuList] = useState<Card4[]>([]);

  const fetchMenuList = useCallback(async () => {
    const request = new GenericRequest();
    request.apiName = RESTUARANTS_DETAILS + resID;
    const response = (await ApiManager.get(
      request,
    )) as GenericResponse<MenuCard>;
    const jsonResponse = response.data as MenuCard;

    const filteredCardList =
      jsonResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards?.filter(
        card => card.card?.card['@type'] === CATAGORY,
      );

    const cardList = filteredCardList.map(item => item.card.card);
    setMenuList(cardList);
  }, [resID]);

  useEffect(() => {
    fetchMenuList();
  }, [fetchMenuList]);

  return menuList;
};
