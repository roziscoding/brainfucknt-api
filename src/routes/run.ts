import { bf } from 'brainscript';
import rescue from 'express-rescue';
import { validate } from '@expresso/validator';
import type { Request, Response } from 'express';

import { transpile } from '../lib/transpiler';

export default [
  validate({
    type: 'object',
    properties: {
      script: {
        type: 'string',
      },
    },
    required: ['script'],
  }),
  rescue(async (req: Request, res: Response) => {
    const { script } = req.body;

    const result = bf(transpile(script));

    res.json({ result });
  }),
];
