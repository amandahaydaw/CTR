from node

WORKDIR /app

copy . .

expose 8080

run npm install
run npm install cors --save

CMD [ "echo", "hello world!" ]

CMD [ "node", "server.js" ]