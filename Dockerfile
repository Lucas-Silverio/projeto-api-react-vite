# Start your image with a node base image
FROM node:18

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

RUN npm install 
# Copy local directories to the current local directory of our docker image (/app)
COPY . .

RUN npm run build

RUN npm install -g vite

EXPOSE 10000

# Start the app using serve command
CMD [ "vite", "preview", "--host", "0.0.0.0"]