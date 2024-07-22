# Use Node.js base image
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Build TypeScript project
RUN npm run tsc:build

# Second stage, production image
FROM node:20-slim

WORKDIR /app

# Copy built files from the first stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Start the app
CMD ["node", "./dist/index.js"]
