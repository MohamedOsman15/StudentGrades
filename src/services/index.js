import Client from './api'

export const GetAllStudents = async () => {
  try {
    const res = Client.get('/api/students')

    return res
  } catch (err) {}
}
