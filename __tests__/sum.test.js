import { sum, getPeople, getPosts } from '../src/utils/sum';
import mockAxios from 'axios';
import { mockPostData } from '../src/utils/--mock--/postsMockData';

describe('get async request', () => {
	afterEach(jest.clearAllMocks);

	it('should return name of people', async () => {
		mockAxios.get.mockResolvedValue({ data: { name: 'Mock Jedi' } });
		const result = await getPeople();
		expect(result).toBe('Mock Jedi');
	});

	it('should return posts', async () => {
		mockAxios.get.mockResolvedValue({
			data: mockPostData,
		});
		const result = await getPosts();
		expect(result).toBe(mockPostData);
	});

	// it('should fail post retrieval', async () => {
	// 	mockAxios.get.mockRejectedValue({ response: { status: 404 } });

	// 	const result = await getPosts();
	// 	console.log('result', result);
	// 	await expect(result).rejects.toThrow('Failed to fetch post data');
	// });
});
