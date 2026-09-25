# API

## Auth
POST `/api/auth/register`
POST `/api/auth/login`
GET `/api/auth/me`

## Resume
POST `/api/resumes/analyze` — multipart field `resume`, optional `targetRole`
GET `/api/resumes/history`
GET `/api/resumes/:id`

## Health
GET `/api/health`
