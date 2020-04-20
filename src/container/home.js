import axios from '../axios';

export function handleOnCreateCourse(userId,title,description){
    const course = {
        "title":title,
        "description":description
    }
    return axios.post(`/users/${userId}/course`,course)
}
//find all course
export function handleAllCourses(userId){
    return axios.get(`users/${userId}/course`)
}

export function handleOnDeleteCourse(userId,courseId){
    return axios.put(`users/${userId}/course/${courseId}`)
}

export function handleOnUpdateCourseTitle(userId,courseId,title){
    const payload = {
        "title" : title
    }
    return axios.put(`users/${userId}/course/${courseId}/update`,payload)
}