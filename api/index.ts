
import express from 'express';
import cookieParser from 'cookie-parser';

import { authRouter } from '../server/authRoutes.ts';
import { userRouter } from '../server/userRoutes.ts';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'NAPS LASUSTECH backend is running.',
  });
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

export default app;
