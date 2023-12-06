# 🏨 Luxuria Hotel

Full-stack hotel acommodation website with authentication. Users can create and manage their bookings with ease. [Live Demo](https://luxuria-hotel.vercel.app/). See app preview gif below 👀

[![Luxuria Hotel Preview](/public/luxuria-preview.gif)]

## 🧰 Built with

[![My Skills](https://skillicons.dev/icons?i=ts,react,nextjs,postgres,jest,postman,tailwind)](https://skillicons.dev)

`TypeScript | React | Next.js | PostgreSQL | Jest Testing Library | Postman | TailwindCSS`

## 🧑‍🤝‍🧑 Users

### `POST api/users`

> Create a new user. Hashing the password before storing.

| API Endpoint  | HTTP Method |      Request Body       | Protected |
| :------------ | :---------: | :---------------------: | :-------: |
| ` /api/users` |   `POST`    | `name, email, password` |    ❌     |

Success Response

```js
HTTP/1.1 201 Created
  {
    "message": "Your account was created successfully!"
  }
```

## 📚 Bookings

### `GET` `/api/bookings`

> Fetch session user's bookings.

| API Endpoint    | HTTP Method | Request Params | Protected |
| :-------------- | :---------: | :------------: | :-------: |
| `/api/bookings` |    `GET`    |    ?sort_by    |    ✅     |

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

> Create a new booking

| API Endpoint    | HTTP Method |                Request Body                | Protected |
| :-------------- | :---------- | :----------------------------------------: | :-------: |
| `/api/bookings` | `POST`      | `guestsNumber, arrivalDate, departureDate` |    ✅     |

```js
HTTP/1.1 201 Created
  {
    "message": "Your booking was created!"
  }
```

### `DELETE` `/api/bookings/:id`

> Delete a booking

| API Endpoint        | HTTP Method | Request Params | Protected |
| :------------------ | :---------- | :------------: | :-------: |
| `/api/bookings/:id` | `DELETE`    |      `id`      |    ✅     |

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
# For database setup please follow the instructions in this link:
# https://vercel.com/docs/storage/vercel-postgres/quickstart
# You will need a Vercel account in order to create the project and the SQL storage

# NextAuth.js Authentication setup will look like this
NEXTAUTH_SECRET=yoursecret (see more: https://next-auth.js.org/configuration/options#nextauth_secret)
NEXTAUTH_URL=http://localhost:3000

Reference for OAuth provider with GitHub setup: https://next-auth.js.org/providers/github if you want to use the GitHub button
GITHUB_ID=yourgithubappid
GITHUB_SECRET=yourgithubappsecret

Create a new account and store it here if you want to use the demo button
NEXT_PUBLIC_DEMO_EMAIL=youremail
NEXT_PUBLIC_DEMO_PASSWORD=yourpassword
```

<details>
<summary>

## My ToDo list and notes while developing.

</summary>

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
- [x] reworking endpoints to be restful
  - [x] api/bookings get, post
  - [x] api/bookings/:id delete
  - [x] api/users post
  - [ ] api/bookings/:id put
- [ ] add pagination for excessive bookings sessions
- [ ] write tests
- [x] add maybe sorting posibilities on each row column
- [x] fix responsive screen
- [x] pop-up for booking form on mobile maybe an ui element that opens up from bottom - for now it's just the same element but also visible on mobile
- [ ] think about rooms structure, will i allow users to push to rooms db / will i make a db / do i create pages for each room etc.
- [x] user page with history and room and possibility to update (?) the reservation

</details>

### Useful links for this project

I will be adopting Angular commit messages linting from now on because ofc they look nice
https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum
