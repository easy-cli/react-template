import * as actionTypes from '../constants/count';

// 加
export function increase(payload) {
  return {
    type: actionTypes.INCREASE,
    payload
  };
}

// 减
export function decrease(payload) {
  return {
    type: actionTypes.DECREASE,
    payload
  };
}
