import { validate } from '@expresso/validator';
import rescue, { Request, Response } from 'express-rescue';
import { transpile } from '../lib/transpiler';

export default [
  validate({
    type: 'object',
    properties: {
      script: { type: 'string' },
    },
    required: ['script'],
  }),
  rescue(async (req: Request, res: Response) => {
    const { script } = req.body;

    const result = transpile(script);

    res.json({
      result,
    });
  }),
];
