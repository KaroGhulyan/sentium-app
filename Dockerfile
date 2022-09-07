FROM node:latest
WORKDIR /sentium-app
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./
COPY . .
RUN npm run build
CMD ["npm","start"]