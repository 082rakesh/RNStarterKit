import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useAppNavigation = () => {
	return useNavigation<NativeStackNavigationProp<ParamListBase>>();
};
