#!/usr/bin/bash
kill $(lsof -t -i :8000)

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Please add your api keys to the .env file."
fi
export DISPLAY=:99
/home/ubuntu/.local/bin/poetry env use /home/ubuntu/.pyenv/shims/python
/home/ubuntu/.local/bin/poetry install
./run_alembic_check.sh
/home/ubuntu/.local/bin/poetry run python3 -m skyvern.forge
