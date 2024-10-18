import express from 'express';

export const ParameterizedRouter = (options) => {
  return express.Router({ mergeParams: true, ...options});
}