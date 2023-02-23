#!/bin/bash

# Check if user is root (UE, the user #, is 0 if root)
if [ "$EUID" -ne 0 ]
  then echo "You must be root to run podman!"
  exit
fi

# if user is root, go ahead and build "website test" image
podman build -t website_test .

# run with local .env file after built
# podman run -it --rm --env-file .env localhost/website_test .