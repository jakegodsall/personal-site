# Personal Site

## Overview
This repository contains the source code for my personal site, which is currently under development.
The backend is built using Django and Django REST framework, with data stored in a MySQL database.

The purpose of this site is to have a single location where I can express myself not only as a developer, 
but in all of those domains which are important to me. I have always had a wide range of interests and hobbies. This site
is designed to both reflect and promote my journey.

### Technology Stack

#### Frontend

#### Backend
[Django](https://www.djangoproject.com/) | [Django REST Framework](https://www.django-rest-framework.org/) 
| [MySQL](https://www.mysql.com/)

#### Tools
[Docker](https://www.docker.com/)

### Features

#### Implemented Features
- **API Endpoints**: Custom API endpoints to manage blog posts, portfolio items, and user inquiries efficiently.
- **Authentication and Authorization**: Implemented JWT-based authentication to secure endpoints and ensure data protection.
- **Dynamic Content Management**: Users can dynamically manage blog and portfolio content via admin panel or API, providing flexibility in content updates.
- **Email Integration**: Automatic email notifications for new user inquiries or comments, facilitating prompt responses.
- **Data Modeling**: Complex data models to represent relationships between different types of content (e.g., blog posts, portfolio projects, comments).

#### Planned Features
- **Frontend Development**: A React.js frontend that consumes the REST API, providing a dynamic user experience.
- **User Dashboard**: For managing personal information, blog posts, and portfolio projects directly from the frontend.
- **Interactive UI Components**: Advanced UI components like dynamic filters for the portfolio, real-time comment sections, and more.

### Django Apps Explanation

#### `portfolio`
The portfolio app manages completed software projects, with sorting, filtering, and pagination functionality.

#### `blog`
Manages all blog-related functionality, including creating, updating, and deleting blog posts. Also handles comments and tagging.

#### `daily_log`
A small app that allows for logging of daily progress in different domains.

Allows for generating a bullet point list for each skill representing _what I've done_
_what I've learned_.

#### `contacts`
Handles user inquiries and contact form submissions. It integrates with email backend for notifications.


## Getting Started

### Prerequisites
- Python 3.12+
- pip
- Virtualenv (optional)
- Docker

### Installation

1. Clone the repository to your local machine.

```shell
git clone https://github.com/jakegodsall/personal-site
```

2. Navigate to the root directory of the project.

```shell
cd personal-site
```

3. **Environment Variables**: Ensure you have an `.env` file with the necessary environment variables for your Django application and MySQL database. This `.env` file will be used by Docker Compose to set the database credentials and provide a `SECRET_KEY` for Django.

```shell
DJANGO_SECRET_KEY
DB_NAME
DB_USER
DB_PASSWORD
DB_HOST
DB_PORT
```

4. Build the images and run the containers with Docker Compose

```shell
docker compose up --build
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions, queries or the like, please contact me at [jake.edward.godsall@gmail.com](mailto:jake.edward.godsall@gmail.com).