<p align="center">
  <a href="https://github.com/actovos-consulting-group/LnchBx/"><img src="./client/src/assets/images/lnchbx-logo.png" width="400" alt="Lnchbx Logo"></a>
</p>

<p align="center">
   LnchBx UI & API Mono Repo
</p>

<p align="center">
  <a href="#badge"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="styled with prettier"></a>
  <a href="#badge"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
</p>

### Onboarding steps

This project was bootstrapped with <a href="https://github.com/facebook/create-react-app" alt="Create React App">Create React App </a>.

- Clone repo
- Ensure you have Docker, Node/npm, and PHP installed
- run `npm i` to install root dependencies
- Copy `server/.env.example` to `server/.env`
- in project root run `npm run dev` to initiate the container and build the database and seed it. Check out `deploy/build_run_app.sh` to see whats happening under the hood

### Helpful info

- from project root `npm run dev` to start the up
- `docker-compose exec app php ./server/artisan` will give you a list of all your standard laravel commands
- `docker-compose exec app php ./server/artisan migrate:fresh` to drop all the tables and re-run all migrations
- `docker-compose exec app php ./server/artisan db:seed --class=DevSeeder` to reseed the db

### Database Info

- The db configs are located in `server/config/database.php` or your can overwrite them in the `server/.env` file. If you change anything in the `.env`, kill the container and restart it.

### Troubleshooting

- `docker ps`, then `docker kill {3-4 digits of container ID}`
- issues with your db? Easiest way to reset is `php artisan migrate:refresh` within the `/server` directory
- if changes in your `server/.env` dont seem to be taking place. kill the container then run `docker-compose build --no-cache`. Once done, kill it and run `npm run dev`
- also check out the handy <a href="https://github.com/jlemm45/handler">Handler</a> tools that @Jaden created.
