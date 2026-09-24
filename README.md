\# 🏠 PG Finder



PG Finder is a web application that helps users discover and explore Paying Guest (PG) accommodations. Users can browse available PGs, view detailed information, check rent and room details, and contact the PG owner directly.



\## 🚀 Features



\* 🔍 Browse available PG accommodations

\* 🏠 View PG details

\* 💰 View monthly rent

\* 🛏️ View room type

\* ⭐ View PG ratings

\* 📍 View PG location

\* 👤 View PG owner details

\* 📞 Call the PG owner directly

\* ✉️ Contact the owner through email

\* 💬 Contact the owner through WhatsApp

\* 🔙 Easy navigation between PG details and owner contact pages

\* 📱 Responsive user interface



\## 🛠️ Tech Stack



\### Frontend



\* React.js

\* Vite

\* JavaScript

\* HTML5

\* CSS3



\### Backend



\* Node.js

\* Express.js

\* CORS

\* JSON data



\### Development Tools



\* VS Code

\* Git

\* GitHub

\* npm



\## 📁 Project Structure



```text

pg-finder/

│

├── backend/

│   ├── data.json

│   ├── package.json

│   ├── package-lock.json

│   └── server.js

│

├── frontend/

│   ├── public/

│   ├── src/

│   ├── db.json

│   ├── index.html

│   ├── package.json

│   ├── package-lock.json

│   └── vite.config.js

│

├── .gitignore

├── README.md

└── package files

```



\## ⚙️ Installation



\### 1. Clone the repository



```bash

git clone https://github.com/chan1407/pgfinder.git

```



\### 2. Navigate to the project



```bash

cd pgfinder

```



\### 3. Install Backend Dependencies



```bash

cd backend

npm install

```



\### 4. Start the Backend Server



```bash

node server.js

```



The backend server will run on:



```text

http://localhost:3000

```



\### 5. Install Frontend Dependencies



Open another terminal and navigate to the frontend:



```bash

cd frontend

npm install

```



\### 6. Start the Frontend



```bash

npm run dev

```



Vite will provide a local development URL, usually:



```text

http://localhost:5173

```



\## 🔌 API Endpoints



\### Get API Status



```http

GET /

```



Returns:



```text

PG Finder API is running

```



\### Get All Data



```http

GET /api/data

```



Returns the available PG and user data.



\### Get All PGs



```http

GET /api/pgs

```



Returns all PG listings.



\### Get PG by ID



```http

GET /api/pgs/:id

```



Example:



```http

GET /api/pgs/1

```



Returns the details of the PG with the specified ID.



\## 📱 Contact PG Owner



The application provides direct communication options for PG owners:



\* 📞 \*\*Call\*\* – Opens the phone dialer

\* ✉️ \*\*Email\*\* – Opens the default email application

\* 💬 \*\*WhatsApp\*\* – Opens WhatsApp chat with the owner



\## 🎨 UI \& Design



The application uses a clean and responsive design with:



\* Modern card-based layouts

\* Responsive navigation

\* PG listing cards

\* PG details page

\* Owner contact page

\* Responsive mobile layouts

\* Consistent typography and colors



\## 🔄 Application Flow



```text

Home Page

&#x20;   ↓

PG Listings

&#x20;   ↓

PG Details

&#x20;   ↓

Contact PG Owner

&#x20;   ↓

Call / Email / WhatsApp

```



\## 🔮 Future Improvements



Some possible future improvements:



\* 🔐 User authentication

\* 👤 User profile management

\* 🏠 PG owner dashboard

\* 🔎 Advanced search and filtering

\* 📍 Google Maps integration

\* ❤️ Save/favorite PGs

\* ⭐ User reviews and ratings

\* 💳 Online booking and payment

\* 🗄️ MongoDB or PostgreSQL database

\* ☁️ Deployment to a cloud platform



\## 📌 Notes



This project currently uses JSON-based data for development and testing.



For production use, sensitive information such as passwords and personal contact details should be securely stored and handled through a proper authentication and database system.



\## 👨‍💻 Author



\*\*Chanduru\*\*



GitHub:

https://github.com/chan1407



\## 📄 License



This project is created for learning and development purposes.



