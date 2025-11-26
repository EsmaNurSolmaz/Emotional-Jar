<p float="left">
  <img src="./client/src/assets/screenshots/emo-jar-ss-0.png" alt="Image 1" width="320" />
  <img src="./client/src/assets/screenshots/emo-jar-ss-1.png" alt="Image 2" width="320" />
  <img src="./client/src/assets/screenshots/emo-jar-ss-2.png" alt="Image 3" width="320" />
  <img src="./client/src/assets/screenshots/emo-jar-ss-3.png" alt="Image 4" width="320" />
</p>

# Emotional Reservoir

Emotional Reservoir is a web app that lets users capture their joyful moments and store them safely. At any time, users can randomly revisit these moments, reliving the happiness they’ve collected over time. It’s a personal space to preserve and rediscover positivity.

## Features

* User registration and authentication
* Add, edit, and delete emotional entries
* View past entries in a list format
* Secure data storage using MongoDB
* Responsive and user-friendly interface

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EsmanurSolmaz/emotional-reservoir.git
   ```
2. Navigate to the project folder:

   ```bash
   cd emotional-reservoir
   ```
3. Install backend dependencies:

   ```bash
   cd server
   npm install
   ```
4. Install frontend dependencies:

   ```bash
   cd ../client
   npm install
   ```
5. Create a `.env` file in the server folder with your keys:

   ```
   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=your_mongodb_connection_string
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   PORT=5000
   ```

6. Start the backend server:

   ```bash
   cd server
   npm start
   ```
7. Start the frontend:

   ```bash
   cd client
   npm start
   ```

## Usage

* Register a new account or log in with an existing one.
* Add your emotional entries for the day.
* Edit or delete entries as needed.
* Navigate through past entries to review your emotional history.


## Contact

For any questions or feedback, feel free to reach out:
**Email:** [esmanursolmaz@outlook.com](mailto:esmanursolmaz@outlook.com)

