#!/bin/bash

kill $(lsof -t -i :8000)

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Please add your api keys to the .env file."
fi
./xvfb_startup.sh
export DISPLAY=:99
poetry shell
poetry install
./run_alembic_check.sh
poetry run python3 -m skyvern.forge
