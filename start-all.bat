@echo off
REM Uruchamia backend (NestJS) w nowym oknie terminala
start cmd /k "cd backend && npm run start:dev"
REM Uruchamia frontend (Vite + React) w nowym oknie terminala
start cmd /k "cd frontend && npm run dev"
