import {
    Router
} from 'express';
import * as controller from '../controllers/posts';

/*
 * /api/posts/     GET    - READ ALL
 * /api/posts/     POST   - CREATE
 * /api/posts/:id  GET    - READ ONE
 * /api/posts/:id  PUT    - UPDATE
 * /api/posts/:id  DELETE - DELETE
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