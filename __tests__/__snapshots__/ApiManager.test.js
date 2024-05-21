import APIManager from '../../src/network/http/ApiManager';
import mockAxios from 'axios';
import { GenericResponse } from '../../src/network/http/GenericResponse';
import { GenericRequest } from '../../src/network/http/GenericRequest';
import axios from 'axios';

// const mockAxios = jest.genMockFromModule('axios');
// mockAxios.create = jest.fn(() => mockAxios);

it('APIManager get should return empty generic response', async () => {
	let genericResponse = new GenericResponse();
	genericResponse.isSuccess = false;

	mockAxios.get.mockResolvedValue(genericResponse);

	const request = new GenericRequest();
	request.apiName = 'http://test.api.com';
	const result = await APIManager.get(request);
	console.log('mock result', result);
	expect(result).toStrictEqual(genericResponse);
});
