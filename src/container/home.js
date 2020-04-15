import axios from '../axios';

export function handleOnCreateCourse(userId,title,description){
    const course = {
        "title":title,
        "description":description
    }
    return axios.post(`/users/${userId}/course`,course)
}

export function handleAllCourses(userId){
    return axios.get(`users/${userId}/course`)
}

export function handleOnDeleteCourse(userId,courseId){
    return axios.put(`users/${userId}/course/${courseId}`)

}