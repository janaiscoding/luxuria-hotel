# Luxuria Hotel

Full-stack hotel acommodation booking website

## Tech stack

Next.js | TypeScript | PostgreSQL | NextAuth.js | React | Jest Testing Library | TailwindCSS | shadcn/ui |

## REST API Reference

- `GET` `/api/bookings` (get all existing bookings) `protected. session-specific. will only fetch signed in user's bookings`
- `POST` `/api/bookings` `(created a new hotel booking)` `body: { guests, arrivalDate, departureDate }` `server-side session protected`
- `DELETE` `/api/bookings/:id` (deletes an existing booking) `protected`

## Tasks

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
