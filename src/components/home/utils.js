import {
  handleOnCreateCourse,
  handleOnDeleteCourse,
  handleOnUpdateCourseTitle,
} from "../../container/home";
//for opening the create course modal
export const handleOpenCreateCourseCard = (setModalOpenCreateCourse) => {
  setModalOpenCreateCourse(true);
};

//creating a new course
export const handleSubmitCourse = (
  userId,
  title,
  description,
  courses,
  setCourses,
  setModalOpenCreateCourse
) => {
  handleOnCreateCourse(userId, title, description).then((response) => {
    const courseList = [...courses, response.data.course];
    setCourses(courseList);
  });
  setModalOpenCreateCourse(false);
};

//for opening the update title modal
export const handleEditCourse = (setCourseId, setModalOpen, courseid) => {
  setCourseId(courseid);
  setModalOpen(true);
};

//editing course title
export const handleSubmitTitle = (
  userId,
  courseId,
  courseTitle,
  courses,
  setCourses,
  setModalOpen
) => {
  handleOnUpdateCourseTitle(userId, courseId, courseTitle).then((response) => {
    const newCourses = [...courses];
    const foundIndex = courses.findIndex((x) => x.id === courseId);
    newCourses[foundIndex] = response.data;
    setCourses(newCourses);
  });
  setModalOpen(false);
};

//deleting a course
export const handleDeleteCourse = (id, userId, courses, setCourses) => {
  handleOnDeleteCourse(userId, id).then((response) => {
    if (response) {
      const newCourses = [...courses];
      const foundIndex = courses.findIndex((x) => x.id === id);
      newCourses.splice(foundIndex, 1);
      setCourses(newCourses);
    }
  });
};

//closing modal
export const handleClose = (setModalOpen) => {
  setModalOpen(false);
};

export const handleCreateCourseClose = (setModalOpenCreateCourse) => {
  setModalOpenCreateCourse(false);
};
