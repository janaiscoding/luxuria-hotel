# Luxuria Hotel

Full-stack hotel acommodation booking website with authentication

## Tech stack

Next.js | TypeScript | PostgreSQL | NextAuth.js | React | Jest Testing Library | TailwindCSS | shadcn/ui

# API Documentation

## Users

### `POST api/users`

> Create a new user. Checks for valid unique email. Will hash the user password before storing to the database table.

| API Endpoint | HTTP Method | Request Body JSON     |
| :----------- | :---------- | :-------------------- |
| /api/users   | POST        | name, email, password |

Success Response

```js
HTTP/1.1 201 Created
  {
    "message": "Your account was created successfully!"
  }
```

## Bookings

### `GET` `/api/bookings`

> Fetch session user's bookings. This is a server protected route.

| API Endpoint  | HTTP Method |
| :------------ | :---------- |
| /api/bookings | GET         |

Success Response

```js
HTTP/1.1 200 OK
  {
    "message": "Fetched the session user's bookings!",
    "bookings": [
      {
        booking_id: 1,
        arrival_date: "2023-12-05T22:00:00.000Z",
        departure_date: "2023-12-17T22:00:00.000Z",
        guests_number: 2,
      },
      ...bookings,
    ]
  }
```

### `POST` `/api/bookings`

> Create a new booking. This is a server protected route. Will use the user's session.`

| API Endpoint  | HTTP Method | Request Body JSON                        |
| :------------ | :---------- | :--------------------------------------- |
| /api/bookings | POST        | guestsNumber, arrivalDate, departureDate |

```js
HTTP/1.1 201 Created
  {
    "message": "Your booking was created!"
  }
```

### `DELETE` `/api/bookings/:id`

> Delete a booking. This is a server protected route. Will use the user's session to match user_id and booking_id.

| API Endpoint      | HTTP Method | Request Params |
| :---------------- | :---------- | :------------- |
| /api/bookings/:id | DELETE      | id             |

```js
HTTP/1.1 202 Accepted
  {
    "message": "The booking was successfully canceled."
  }
```

# Getting started and Installation

`git clone git@github.com:janaiscoding/luxuria-hotel.git`

`cd luxuria-hotel`

`npm install`

Create a `.env.local` file at the root of the directory and complete it as per the following instructions:

```
# Database setup - Follow this link https://vercel.com/docs/storage/vercel-postgres/quickstart
# You will need a Vercel account in order to create the project and the SQL storage

# NextAuth.js Authentication setup will look like this
NEXTAUTH_SECRET=yoursecret https://next-auth.js.org/configuration/options#nextauth_secret
NEXTAUTH_URL=http://localhost:3000

Reference for OAuth provider with GitHub setup: https://next-auth.js.org/providers/github if you want to use the GitHub button
GITHUB_ID=yourgithubappid
GITHUB_SECRET=yourgithubappsecret

Create a new account and store it here if you want to use the demo button
NEXT_PUBLIC_DEMO_EMAIL=youremail
NEXT_PUBLIC_DEMO_PASSWORD=yourpassword
```

## My ToDo list and notes while developing.

- [x] add postgresql backend to nextjs
- [x] create bookings table
- [x] create route for placing a new booking
- [x] validate submitted user dates arrival must be lower than departure
- [x] validate number of persons to be between 1 and 4
- [x] display errors and success messages when placing a new booking
- [x] replaced auth0 with next-auth
- [x] created user table and linked bookings with foreign keys to it
- [x] add hashing and comparing hashing with bcryptjs for newly created users
- [x] create user dashboard to see their own bookings
- [x] link session user to booking post requests
- [x] added navigation on mobile
- [x] added bookings to current user dashboard
- [x] added information about rooms being under construction
- [x] fix homescreen button not having smooth-scrolling
- [ ] move github project pointing to localhost to point to normal app url
- [x] allow users to delete their records
  - for this, i had to validate user session to be correct on the client and server in order to allow deletion
  - i get my auth session, and i only delete the same record where the booking id matches with the user id taken from session user email
- [ ] reworking endpoints
  - must secure all of them server side
- [ ] add maybe sorting posibilities on each row column
- [ ] pop-up for booking form on mobile maybe an ui element that opens up from bottom
- [ ] think about rooms structure, will i allow users to push to rooms db / will i make a db / do i create pages for each room etc.
- [x] user page with history and room and possibility to update (?) the reservation

### Useful links for this project
