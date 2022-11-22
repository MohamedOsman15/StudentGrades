import Client from './api'

export const GetAllStudents = async () => {
  try {
    const res = Client.get('/api/students')

    return res
  } catch (err) {
    throw err
  }
}

export const GetAllClasses = async () => {
  try {
    const res = Client.get('/api/classes')

    return res
  } catch (err) {
    throw err
  }
}

export const GetStudentDetails = async (id) => {
  try {
    const res = Client.get(`/api/studentclasslist/${id}`)

    return res
  } catch (err) {
    throw err
  }
}
