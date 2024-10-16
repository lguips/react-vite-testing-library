import { act, render } from '@testing-library/react'
import App from './App'
import axiosMock from './__mocks__/axios';

describe('Teste App', () => {
  it('should work', async () =>{
    const { getByText, findByText } = render(<App/>)
    getByText('Teste');
    act(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    });
    await findByText('delectus aut autem');
  })
})