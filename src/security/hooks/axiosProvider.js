import { useKeycloak } from '@react-keycloak/web';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { spinnerActions } from '../../store/redux/spinnerSlice';

export const useHttpClient = (secure = true, isBlob = false) => {
  const axiosInstance = useRef();
  const { keycloak, initialized } = useKeycloak();
  const kcToken = keycloak?.token ?? '';
  const API_URL = process.env.REACT_APP_API_URL;

  const dispath = useDispatch();

  useEffect(() => {
    const headers = {
      Authorization: initialized ? `Bearer ${kcToken}` : undefined,
    };

    axiosInstance.current = axios.create({
      baseURL: API_URL,
      headers: secure ? headers : {},
      ...(isBlob && { responseType: 'blob' }),
    });

    axiosInstance.current.interceptors.request.use(
      function (config) {
        dispath(spinnerActions.incrementPendingRequests());
        return config;
      },
      function (error) {
        dispath(spinnerActions.decrementPendingRequests());
        return Promise.reject(error);
      }
    );

    axiosInstance.current.interceptors.response.use(
      function (response) {
        dispath(spinnerActions.decrementPendingRequests());
        return response;
      },
      function (error) {
        dispath(spinnerActions.decrementPendingRequests());
        // TODO: Adding intercepter actions by code error
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.current = undefined;
    };
  }, [API_URL, initialized, kcToken, secure, dispath, isBlob]);

  return axiosInstance;
};
