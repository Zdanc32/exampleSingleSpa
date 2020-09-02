#!/bin/bash

docker build --no-cache -t 10.10.78.93:5000/sots-study-plan-gui --squash -f _docker/Dockerfile .
