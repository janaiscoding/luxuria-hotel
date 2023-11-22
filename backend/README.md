# Backend server for Luxuria

To do:

## 1. Authentication for users

    - admin users {admin: true, name, email, password }
        - will see all bookings
        - will verify and confirm bookings
    - normal users {admin: false, name, email, password, reservations: [] }
        - will create bookings if possible

## 2. Reservation { id, startDate, endDate, roomType, persons }


Setting up db: 
have postgresql installed
psql postgres to open
put all commands to create db
\q to exit
