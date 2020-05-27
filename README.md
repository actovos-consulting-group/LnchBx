<p align="center">
  <a href="https://github.com/actovos-consulting-group/LnchBx/"><img src="./client/assets/lnchbx-logo.png" width="400" alt="Lnchbx Logo"></a>
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
- Ensure you have Docker, Node/npm, PHP, and AWS CLI installed
- in project root run `docker-compose up -d database` to initiate the db (running `docker ps` will show active containers); then run `npm i` to load root dependencies
- Ensure you have an AWS profile with your ittybam AWS keys
- run `export AWS_REGION=us-west-2`
- run `npm run bootstrap development` in the root directory
- run the command `php artisan key:generate` in the `server` directory - this will generate a key in your `.env` file on line 3
- in the `server` directory you'll need to run `php artisan migrate` to run migrations
- from the `server` directory still, run `composer install` and then `php artisan serve` - this will start up the server
- in a new terminal window cd into `client` and run `npm run start` to open the hot reload view or `npm run build` to build files

### Daily User

- from project root `docker-compose up -d database`
- from /server: `php artisan serve`
- from /client: `npm run start`

### Database Info

- To seed your dev database run `php artisan db:seed --class=DevSeeder` within `/server`

### Production

Info coming soon

### Troubleshooting

- when starting the docker database, make sure you kill other existing docker containers.
- `docker ps`, then `docker kill {3-4 digits of container ID}`
- issues with your db? Easiest way to reset is `php artisan migrate:refresh` within the `/server` directory
- also check out the handy <a href="https://github.com/jlemm45/handler">Handler</a> tools that @Jaden created.

### So, you wanna use Postman

Info coming soon

### Full list of commands

coming soon
