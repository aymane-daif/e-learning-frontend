import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../security/hooks/axiosProvider';

function SingleCourse() {
  let { id } = useParams();

  const httpClient = useHttpClient(true);

  const getCourseById = useCallback(() => {
    httpClient.current?.get(`/courses/${id}`).then((response) => {
      const { data } = response;

      console.log(data);
    });
  }, [httpClient, id]);

  useEffect(() => {
    getCourseById();
  }, [getCourseById]);

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default SingleCourse;
