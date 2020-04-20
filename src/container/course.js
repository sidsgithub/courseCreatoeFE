import axios from '../axios';

//topics

export function handleListTopics(userId,courseId){
    return axios.get(`users/${userId}/course/${courseId}/topic`);
}

export function handleOnAddTopic(userId,courseId,title){
    const payload ={
        "title":title
    }
    return axios.post(`users/${userId}/course/${courseId}/topic`,payload);
}

export function handleOnDeleteTopic(userId,courseId,topicId){
    return axios.put(`/users/${userId}/course/${courseId}/topic/${topicId}`);
}

export function handleOnUpdateTopic(userId,courseId,topicId,title){
    const updatePayload={
        "title":title
    }
    return axios.put(`/users/${userId}/course/${courseId}/topic/${topicId}/update`,updatePayload)

}

// sub topics

export function handleListSubTopics(userId,courseId,topicId){
    return axios.get(`users/${userId}/course/${courseId}/topic/${topicId}/sub-topic`);
}

export function handleOnAddSubTopic(userId,courseId,topicId,title,url){
    const payload ={
        "title":title,
        "url":url
    }
    return axios.post(`users/${userId}/course/${courseId}/topic/${topicId}/sub-topic`,payload);
}

export function handleOnClickTopic(userId,courseId,topicId,subtopicId){
    return axios.get(`/users/${userId}/course/${courseId}/topic/${topicId}/sub-topic/${subtopicId}`);
}

//watched topic

export function handleListWatchedTopics(userId,courseId){
    return axios.get(`/users/${userId}/course/${courseId}/watched`);
}

export function handleOnClickWatchTopics(userId,courseId,topicId){
    const payloadwatched={
        "watched":true
    }
    return axios.put(`/users/${userId}/course/${courseId}/topic/${topicId}/watched`,payloadwatched);
}