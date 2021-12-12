import { AxiosAdapter } from './AxiosAdapter';
import axios from 'axios';

jest.mock('axios');

const fakeAxiosResult = { data: { name: 'any_name' } };
jest.spyOn(axios, 'get').mockResolvedValue(fakeAxiosResult);

const makeSut = () => {
  const sut = new AxiosAdapter();

  return { sut };
};

describe('Tests', () => {
  describe('make', () => {
    it('should call axios.get with url when method is called', async () => {
      const { sut } = makeSut();
      const url = 'any_url';
      const getSpy = jest.spyOn(axios, 'get');

      await sut.get(url);

      expect(getSpy).toBeCalledWith(url);
    });
  });
});
