import axios from 'axios';
import { ALL_POSTS } from '../utils/Constants';

export const getPosts = async () => {
	try {
		const response = axios.get(ALL_POSTS);
		const jsonResponse = (await response).data;
		return jsonResponse;
	} catch (error) {
		throw new Error('Failed to fetch post data');
	}
};

export const getPeople = async () => {
	try {
		const response = axios.get('https://swapi.dev/api/people/1');
		const jsonResponse = (await response).data;
		return jsonResponse.name;
	} catch (error) {
		throw new Error('Failed to fetch people name');
	}
};
