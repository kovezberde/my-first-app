FROM node:18

WORKDIR /app

# Copy package.json first
COPY package*.json ./

# Install dependencies (this installs express)
RUN npm install

# Copy rest of app
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]