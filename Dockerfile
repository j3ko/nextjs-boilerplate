# Use the official Node.js 14 image as the base
FROM node:lts-alpine3.16

# Set the working directory inside the container
WORKDIR /app

# Copy source code
COPY . /app

# Install dependencies
RUN yarn install

# Build the Next.js app
RUN yarn build

# Set the command to start the Next.js server
CMD ["yarn", "start"]
