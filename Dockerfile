# Use an existing docker image as a base
FROM node:alpine as builder

# to prevent overriding existing files by stating the location of the app files
WORKDIR /usr/app

# Copy the package json file into the image
COPY package.json .

# Download and install a dependency
RUN npm install

# Copy the package json file into the image
COPY . .

# build code
RUN npm run build:prod

# FROM nginx
# COPY --from=builder /usr/app /usr/share/nginx/html

CMD ["npm", "run", "start"]

