#!/bin/bash

# Check for updates and upgrade packages
apt-get update
apt-get upgrade

# Install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash

# Install nodejs and latest NPM
nvm install node
npm update -g npm


# Install npm packages
npm install -g forever
