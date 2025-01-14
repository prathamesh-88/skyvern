#!/bin/bash

kill $(lsof -t -i :8000)

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Please add your api keys to the .env file."
fi
export DISPLAY=:99
source "$(poetry env info --path)/bin/activate"
poetry install
./run_alembic_check.sh
poetry run python3.11 -m skyvern.forge
