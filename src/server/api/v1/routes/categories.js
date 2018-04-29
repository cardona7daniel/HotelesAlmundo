import {
    Router
} from 'express';
import * as controller from '../controllers/categories';

/*
 * /api/categories/     GET    - READ ALL
 * /api/categories/     POST   - CREATE
 * /api/categories/:id  GET    - READ ONE
 * /api/categories/:id  PUT    - UPDATE
 * /api/categories/:id  DELETE - DELETE
 */


    const router = Router();

    router.route("/")
        .get(controller.all)
        .post(controller.post);

    router.route("/:id")
        .get(controller.get)
        .put(controller.put)
        .delete(controller.delete);

export default router;