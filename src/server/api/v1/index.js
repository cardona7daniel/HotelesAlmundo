import { Router } from 'express';
import categoriesRoutes from './routes/categories';
import postsRoutes from './routes/posts';
import usersRoutes from './routes/users';

const api = Router();

api.use("/categories", categoriesRoutes);
api.use("/posts", postsRoutes);
api.use("/users", usersRoutes);

export default api;

