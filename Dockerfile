FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /tic-tac-toe/dist/tic-tac-toe/browser/ /usr/share/nginx/html
