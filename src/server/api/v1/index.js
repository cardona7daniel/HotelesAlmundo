import { Router } from 'express';
import { userRouter, hotelRouter } from './routes';

const api = Router();

api.use("/users", userRouter);
api.use("/hotels", hotelRouter);

export default api;

