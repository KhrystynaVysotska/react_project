import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  INIT_SWEATERS,
  LOADING_SWEATERS,
  FAILED_SWEATERS,
} from "./actionTypes";
import { getAllSweaters, getFilteredSweaters } from "../api/api";

export const getSweaters = () => (dispatch) => {
  dispatch(loadingSweaters());
  getAllSweaters()
    .then((res) => {
      setTimeout(() => {
        dispatch(getSweatersSuccess(res.data));
      }, 500);
    })
    .catch((err) => {
      dispatch(failedSweaters(err.message));
    });
};

export const applyFilter = (params) => (dispatch) => {
  dispatch(loadingSweaters());
  getFilteredSweaters(params)
    .then((res) => {
      setTimeout(() => {
        dispatch(getSweatersSuccess(res.data));
      }, 500);
    })
    .catch((err) => {
      dispatch(failedSweaters(err.message));
    });
};

const getSweatersSuccess = (sweaters) => ({
  type: INIT_SWEATERS,
  payload: sweaters,
});

const loadingSweaters = () => ({
  type: LOADING_SWEATERS,
});

const failedSweaters = (error) => ({
  type: FAILED_SWEATERS,
  payload: error,
});

export const addFavorite = (sweaterId) => (dispatch) => {
  dispatch(markFavorite(sweaterId));
};

const markFavorite = (sweaterId) => ({
  type: ADD_FAVORITE,
  payload: sweaterId,
});

export const removeFavorite = (sweaterId) => (dispatch) => {
  dispatch(removeMarkFavorite(sweaterId));
};

const removeMarkFavorite = (sweaterId) => ({
  type: REMOVE_FAVORITE,
  payload: sweaterId,
});
