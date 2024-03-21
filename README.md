# angular-tic-tac-toe

# Requirements
* https://nodejs.org/ using 20.11.1 LTS
* npm install -g @angular/cli

# Windows Requirement
```ps
# In Powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

```sh
ng new tick-tac-toe
```

## If the application already created and pulled, run this instead
```sh
npm install
```

# Test Angular Scaffolding
```sh
cd tick-tac-toe
ng serve --open
```

# Visual Code maybe useful extensions
* Angular Essentials (Version 16)

# Notes on angular cli
```sh
# quick start to generate components.  Squares are kinda the base object in tick tac toe
ng generate component square

# parent called 'game' to run the game
ng generate component game
```

# Notes on Angular
https://angular.io/extended-diagnostics/NG8103, the CommonModule is what makes ngFor works for an example.

# Notes on CSS library, Material UI
[Getting Started](https://material.angular.io/guide/getting-started)
```sh
ng add @angular/material
#  I got an issue with no terminal detected.  Maybe because of cygwin?
#  Below should be a fix
ng add @angular/material --skip-confirmation
```

# Docker Container/App
## I did this on a raspberry pi, don't hack me
```sh
# from the root directory of angular-tic-tack-toe
sudo docker build -t name-image .
# To check your image
sudo docker image ls 
# ideally a port that's not well known.
sudo docker run --name name-container -d -p XXXX:80 name-image 
```
