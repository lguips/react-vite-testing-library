const mockResponse = {
  data: {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}