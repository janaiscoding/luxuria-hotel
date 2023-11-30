# Luxuria Hotel

Full-stack hotel acommodation booking website

## Tech stack

Next.js | TypeScript | PostgreSQL | NextAuth.js | React | Jest Testing Library | TailwindCSS | shadcn/ui |  

## API Reference



## To do

- [x] add postgresql backend to nextjs
- [x] create bookings table
- [x] create route for placing a new booking
- [x] validate submitted user dates arrival must be lower than departure
- [x] validate number of persons to be between 1 and 4
- [x] display errors and success messages when placing a new booking
- [x] replaced auth0 with next-auth
- [x] created user table and linked bookings with foreign keys to it

https://panjeh.medium.com/git-status-fatal-bad-object-head-af22724f48b9
* must see how to add all my users to the db   
* must create login for adding new user with a hashed password
* must validate the hashed pw in the credentials authorize next-auth function

- [ ] create user dashboard to see their own bookings
- [ ] link session user to booking post requests
- [ ] pop-up for booking form on mobile maybe an ui element that opens up from bottom
- [ ] think about rooms structure, will i allow users to push to rooms db / will i make a db / do i create pages for each room etc.
- [ ] user page with history and room and possibility to update (?) the reservation 