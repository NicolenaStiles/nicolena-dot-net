#!/bin/bash

# Check if user is root (UE, the user #, is 0 if root)
if [ "$EUID" -ne 0 ]
  then echo "You must be root to run podman!"
  exit
fi

# if user is root, go ahead and build "website test" image
podman build -t website_test .

# run container
podman run -it --rm --network host localhost/website_test