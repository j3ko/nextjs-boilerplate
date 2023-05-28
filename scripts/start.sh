#!/bin/bash
set -x

# Build the Docker image
docker build -t nextjs-boilerplate .

echo "running docker at $PWD"

# Run the Docker container
docker run -d --name nextjs-boilerplate --restart unless-stopped -p 3000:3000 nextjs-boilerplate

# Prune unused images
docker image prune -a --force
