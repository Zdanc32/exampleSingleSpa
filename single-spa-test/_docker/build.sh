#!/bin/bash

docker build --no-cache -t 10.10.78.93:5000/sots_frontend_root_config_gui --squash -f _docker/Dockerfile .
