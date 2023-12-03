# Luxuria Hotel

Full-stack hotel acommodation booking website with authentication

## Tech stack

Next.js | TypeScript | PostgreSQL | NextAuth.js | React | Jest Testing Library | TailwindCSS | shadcn/ui

# REST API Documentation

### Create a new user: `POST` `/api/users` `body: {name, email, password}`

Not a protected route. Checks for valid unique email. Will hash the user password before storing to the database table.

<details>

<summary>API Response Examples</summary>

Success Response

```js
HTTP/1.1 201 Created
  {
    "message": "Your account was created successfully!"
  }
```

Error Response

```js

HTTP/1.1 500 Internal Server Error
  {
    "error": "An unexpected error has occured."
  }

HTTP/1.1 400 Bad Request
  {
    "error": "An account with this email already exists."
  }
```

</details>

### Bookings

- `GET` `/api/bookings` `(get all existing bookings)` `protected. session-specific. will only fetch signed in user's bookings`
- `POST` `/api/bookings` `(created a new hotel booking)` `body: { guests, arrivalDate, departureDate }` `server-side session protected`
- `DELETE` `/api/bookings/:id` `(deletes an existing booking)` `server-side session protected`

# Getting started and Installation

`git clone git@github.com:janaiscoding/luxuria-hotel.git`

`cd luxuria-hotel`

`npm install`

Create a `.env.local` file at the root of the directory and complete it as per the following instructions:

```
# Database setup - Follow this link https://vercel.com/docs/storage/vercel-postgres/quickstart
# You will need a Vercel account, you will have to create the project in your dashboard, and create the SQL storage

# NextAuth.js Authentication setup will look like this
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
- [] reworking endpoints
  - must secure all of them server side
  - users/id/bookings doesnt work
- [ ] add maybe sorting posibilities on each row column
- [ ] pop-up for booking form on mobile maybe an ui element that opens up from bottom
- [ ] think about rooms structure, will i allow users to push to rooms db / will i make a db / do i create pages for each room etc.
- [x] user page with history and room and possibility to update (?) the reservation

### Useful links for this project
