import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import CourseItem from './CourseItem';
import { useHttpClient } from '../security/hooks/axiosProvider';
import { KTSVG } from '../shared/helpers/KTSVG';

function ListCourses() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const httpClient = useHttpClient(true);

  const [courses, setCourses] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [isAll, setIsAll] = useState(true);
  const [isOnlyFree, setIsOnlyFree] = useState(false);
  const [isOnlyPremium, setIsOnlyPremium] = useState(false);

  const getCourses = useCallback(async () => {
    if (keyword) setIsAll(false);
    httpClient.current
      ?.get(`/courses?keyword=${keyword}&page=${pageNumber}`)
      .then((response) => {
        const data = response.data;
        setPageData(data);
        setCourses(data.content);
        console.log(data);
        setIsOnlyPremium(false);
        setIsOnlyFree(false);
      });
  }, [httpClient, keyword, pageNumber]);

  const getCoursesByPriceType = (type) => {
    httpClient.current
      ?.get(`/courses/filter?priceType=${type}&page=${pageNumber}`)
      .then((response) => {
        const data = response.data;
        setCourses(data.content);
        console.log(data.content);
      });
  };

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const onSubmit = (data) => {
    const key = data.search.trim();
    setKeyword(key);
    getCourses();
  };

  return (
    <>
      <form
        className='w-100 position-relative my-5'
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}>
        <KTSVG
          path='/media/icons/duotune/general/gen021.svg'
          className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
        />

        <input
          type='text'
          name='search'
          id='search'
          placeholder="Search by course's name..."
          {...register('search', {
            required: true,
          })}
          className={`form-control form-control-solid px-15 ${
            errors.search ? 'is-invalid' : ''
          }`}
        />
        {errors.search && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{errors.search?.message}</span>
            </div>
          </div>
        )}
      </form>

      {/* here is the tabs */}
      <div className='d-flex overflow-auto h-55px'>
        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
          <li className='nav-item'>
            <span
              className={
                `nav-link text-active-primary me-6 ` + (isAll && 'active')
              }
              onClick={() => {
                setIsAll(true);
                setIsOnlyPremium(false);
                setIsOnlyFree(false);
                setKeyword('');
                getCourses();
              }}>
              Browse All
            </span>
          </li>
          <li className='nav-item'>
            <span
              className={
                `nav-link text-active-primary me-6 ` +
                (isOnlyPremium && 'active')
              }
              onClick={() => {
                setIsOnlyPremium(true);
                setIsAll(false);
                setIsOnlyFree(false);
                getCoursesByPriceType('PREMIUM');
              }}>
              Premium
            </span>
          </li>
          <li className='nav-item'>
            <span
              className={
                `nav-link text-active-primary me-6 ` + (isOnlyFree && 'active')
              }
              onClick={() => {
                setIsOnlyFree(true);
                setIsAll(false);
                setIsOnlyPremium(false);
                getCoursesByPriceType('FREE');
              }}>
              Free
            </span>
          </li>
        </ul>
      </div>
      {/* end of tabs */}
      <div className='d-flex justify-content-center flex-wrap'>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            name={course.name}
            description={course.description}
            instructorName={course.instructorDto.name}
            courseLevel={course.courseLevel}
            priceType={course.priceType}
          />
        ))}
      </div>

      <ul className='pagination'>
        <li className='page-item previous'>
          <a href='#' className='page-link'>
            <i className='previous'></i>
          </a>
        </li>
        {new Array(pageData?.totalPages).fill(0).map((_, i) => (
          <li
            className={`page-item ${
              pageData?.pageable.pageNumber === i && 'active'
            }`}
            key={i}>
            <span
              className='page-link'
              onClick={() => {
                setPageNumber(i);
                if (!isOnlyPremium && !isOnlyFree) {
                  getCourses();
                } else {
                  const type = isOnlyFree ? 'FREE' : 'PREMIUM';
                  getCoursesByPriceType(type);
                }
              }}>
              {i + 1}
            </span>
          </li>
        ))}

        <li className='page-item next'>
          <a href='#' className='page-link'>
            <i className='next'></i>
          </a>
        </li>
      </ul>
    </>
  );
}
export default ListCourses;
