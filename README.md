# Foody - Technical Challenge Web App

## Introduction

Foody is a simple web application built to help developer candidates demonstrate practical skills with:

* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)
* [MySQL 8](https://www.mysql.com/)
* [PHP 8](https://php.net/)
* [TypeScript](https://www.typescriptlang.org/)
* [Composer](https://getcomposer.org/)
* [npm](https://www.npmjs.com/)
* [Laravel 8](https://laravel.com/)
* [React](https://reactjs.org/)
* [NestJS](https://nestjs.com/)
* [VS Code](https://code.visualstudio.com/)

By using foody in our interviews we hope to:

* **Reduce bias:** Candidates complete the same set of steps and problems as other candidates with the same experience for the same role.  Each problem has specific evaluation criteria.

* **Reduce the (unrealistic!) need for memorization:** Most developers can't memorize the names of every function, their arguments, and the precise details of how they behave, or recall them during an interview.  Candidates are free to use Google, Stack Overflow, man pages, documentation, tutorials, etc during their interview as they would normally.

* **Make interviews more comfortable:** Candidates can complete their tasks on their own schedule and without needing to install & configure a dev environment.

* **Provide realistic problems:** Candidates are given realistic problems to solve rather than trivia, logic puzzles, or trivial problems that can be introduced and set up entirely during the interview.

## Getting Started

Foody is built on Docker, using MySQL, NestJS, Laravel and React.  The project is divided into four main subdirectories.

* **database**: a set of SQL files to create the database.
* **private-api**: a NestJS API to query the database (in a production environment this API would not be publicly accessile).
* **public-api**: a Laravel API used by the web layer.
* **web-ui**: a React application to interact with the public API.

### Dev Environment

1. You will need a personal [Github](https://github.com) account in order to complete and submit the challenge.  Once you have an account, go to [Gitpod](https://gitpod.io) and create an account there using your Github account.

2. Create a copy of this template repo in your own Github account.

3. Start a Gitpod workspace based on your repo.  You can do this either by prepending "https://gitpod.io#" to your repo URL or by installing the Gitpod extension in your browser which will give you a Gitpod button in Github.

4. Wait for the project to initialize (10-15 minutes).  Once all of the Docker containers have started, a browser preview window will open.  You are now ready to start your challenge tasks.

5. You can use the Source Control tab to interact with your Git repo.  When you are finished with your tasks, make sure you push all of your commits back to Github.

### Data Model

Foody is a simple web application for tracking the consumptions of foods and nutrients of a set of users.

![Data model](./database/data-model.png)

## Disclaimer

Foody is not by any means a finished product. It's not intended to run on a production server, and it's sole purpose is to run in Gitpod in development mode.
