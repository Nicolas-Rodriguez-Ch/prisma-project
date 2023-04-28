1. primer paso npm init - y // inicializar el proyecto
2. npm i express cors morgan @prisma/client // instalar dependencias de producción
3. npm i -D // instalar los tipos y versiones de TS
4. crear scripts en el package json // npm run dev, npm start
5. npx tsc --init // crear configuración de ts config
6. Crear src/
7. crear src/app.ts
8. crear src/configExpress.ts
9. Crear src/api
10. crear endpoint healthcheck

## prisma
1. npx prisma init // en una terminal por aparte se crea en el proyecto varios archivos y carpetas
2. instalar prisma y configurar formato .vscode/setting.json
3. npx prisma migrate dev
4. npx prisma studio
5. npx prisma migrate reset // resetea desde 0 la base de datos