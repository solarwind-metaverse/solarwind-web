# Base image
FROM vhalme/solarwind-nodejs-server

# Set working directory
WORKDIR /app

# Copy app source code
RUN git clone https://github.com/solarwind-metaverse/solarwind-web.git

WORKDIR /app/solarwind-web

# Install app dependencies
RUN npm install

# Build app
RUN npm run build

# Expose port 3003
EXPOSE 3003

# Start the app
CMD [ "npm", "start" ]