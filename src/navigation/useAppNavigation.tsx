import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './Navigator';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
