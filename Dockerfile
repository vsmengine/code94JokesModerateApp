FROM node:22.3.0

# Set the working directory
WORKDIR /usr/src/app

# Copy the application files
COPY . .

# Install dependencies
RUN npm install

# Start the application
CMD ["node", "./src/index.js"]
