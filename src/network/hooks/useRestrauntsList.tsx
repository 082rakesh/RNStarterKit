import {useEffect, useState} from 'react';
import {ALL_RESTURANTS} from '../../utils/Constants';
import {Restaurant, Root} from '../../model/Restaurants';
import ApiManager from '../http/ApiManager';
import {GenericRequest} from '../http/GenericRequest';
import {GenericResponse} from '../http/GenericResponse';

export const useRestrauntsList = () => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getRestraunts = async () => {
      const request = new GenericRequest();
      request.apiName = ALL_RESTURANTS;

      const response = (await ApiManager.get(request)) as GenericResponse<Root>;
      if (response.isSuccess) {
        const jsonResponse = response.data as Root;
        const resturants =
          jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestrauntList(resturants);
      } else {
        // setIsError(true);
        console.log(`response.isSuccess: ${response.isSuccess}`);
        // return isError;
      }
    };

    getRestraunts();
  }, [setRestrauntList]);

  return restrauntList;
};
