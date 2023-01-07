import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import CardCourse from "../cards/CardCourse";
import { useHttpClient } from "../../security/hooks/axiosProvider";
const ProfileCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const user = useSelector((state) => state.user.user);
  const httpClient = useHttpClient(true);
  const getMyCourses = useCallback(
    (user_id) => {
      httpClient.current
        ?.get(`/users/course/${user_id}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          const listCourses = [
            {
              id: 1,
              name: "Figma Course",
              description: "Figma design end of studies rapport efficiency",
              image: "/media/svg/brand-logos/figma-1.svg",
              lastUpdated: "Mar 14, 2021",
              noStudents: 5,
              courseLevel: "INTERMEDIATE",
              instructorDto: {
                id: "1",
                name: "hamid ba7mdan",
              },
            },
            {
              id: 1,
              name: "Figma Course",
              description: "Figma design end of studies rapport efficiency",
              image: "/media/svg/brand-logos/figma-1.svg",
              lastUpdated: "Mar 14, 2021",
              noStudents: 5,
              courseLevel: "INTERMEDIATE",
              instructorDto: {
                id: "1",
                name: "hamid ba7mdan",
              },
            },
            {
              id: 1,
              name: "Figma Course",
              description: "Figma design end of studies rapport efficiency",
              image: "/media/svg/brand-logos/figma-1.svg",
              lastUpdated: "Mar 14, 2021",
              noStudents: 5,
              courseLevel: "INTERMEDIATE",
              instructorDto: {
                id: "1",
                name: "hamid ba7mdan",
              },
            },
            {
              id: 1,
              name: "Figma Course",
              description: "Figma design end of studies rapport efficiency",
              image: "/media/svg/brand-logos/figma-1.svg",
              lastUpdated: "Mar 14, 2021",
              noStudents: 5,
              courseLevel: "INTERMEDIATE",
              instructorDto: {
                id: "1",
                name: "hamid ba7mdan",
              },
            },
          ];
          setMyCourses(listCourses);
        });
    },
    [httpClient]
  );
  useEffect(() => {
    getMyCourses(user.id);
  }, [getMyCourses]);

  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-6">
        <h3 className="fw-bolder my-2">My Courses</h3>
        <div className="d-flex flex-wrap my-2">
          <div className="me-4">
            <select
              name="status"
              data-control="select2"
              data-hide-search="true"
              className="form-select form-select-sm form-select-white w-125px"
              defaultValue="Active"
            >
              <option value="Approved">In Progress</option>
              <option value="In Progress">Completed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row g-6 g-xl-9">
        {myCourses.map((course) => (
          <div className="col-md-6 col-xl-4">
            <CardCourse
              image={course.image}
              badgeColor="primary"
              courseLevel={course.courseLevel}
              statusColor="primary"
              name={course.name}
              description={course.description}
              lastUpdated={course.lastUpdated}
              instructor={course.instructorDto.name}
              progress={50}
              id={4}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileCourses;
