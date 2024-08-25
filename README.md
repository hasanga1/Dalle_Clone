
# InspireAI

## Screenshots

<img width="1440" alt="Screenshot 2024-08-25 at 18 37 14 (2)" src="https://github.com/user-attachments/assets/847716fa-ba30-4db8-b444-855403628155">


## Introduction

**InspireAI** is an innovative AI image generator application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to generate images based on textual prompts using the OpenAI API and share their creations with the community. Images are stored and managed using Cloudinary, ensuring efficient handling and delivery.

The application features a dynamic home page showcasing recently generated images from the community. Users can search for these community-generated images and view them in real-time. Additionally, the Create Post page enables users to generate images by inputting their own ideas or by using the "Surprise Me" button, which generates a random prompt for them. These images are then shared with the community and displayed on the home page.



## Features

- **AI-Generated Images:** Create images from text prompts using the OpenAI API.

- **Surprise Me Button:** Generate a random prompt with the "Surprise Me" button for instant creativity.

- **Community Sharing:** Share generated images with the community and view others' creations on the home page.

- **Image Storage:** Efficiently store and manage images using Cloudinary.

- **Search Functionality:** Search and discover community-generated images based on keywords or tags.

- **Responsive Design:** Optimized for an engaging user experience across various devices, including desktops, tablets, and smartphones.

- **Real-time Updates:** Instant display of newly generated and shared images on the home page.


## Tech Stack

- **Frontend**
    - React.js
    - Tailwind CSS

- **Backend**
    - Node.js
    - Express.js

- **Database**
    - MongoDB
    - Mongoose

- **Image Storage**
    - Cloudinary

- **Other Tools**
    - OpenAI API for AI-powered responses
    - Git & GitHub for version control
## Installation

- **Prerequisites**
  - Node.js (v14+)
  - npm or Yarn
  - MongoDB
  - OpenAI
  - Cloudinary Account

- **Clone the repository**
```bash
  git clone https://github.com/hasanga1/InspireAI.git
  cd InspireAI
```

- **Install frontend dependencies**
```bash
  cd client
  npm install
```

- **Install frontend dependencies**
```bash
  cd server
  npm install
```

- **Environment Variables**

```
  OPENAI_API_KEY = "your-openai-apikey"
  MONGODB_URL = "your-mongodb-cluster-url"
  CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
  CLOUDINARY_API_KEY="your-cloudinary-apikey"
  CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
```

- **Run the application(Frontend)**
```
  cd client
  npm run dev
```

- **Run the application(Backend)**
```
  cd server
  npm start
```

## Authors

- [@hasanga](https://www.github.com/hasanga1)
- dinithhasangare@gmail.com

