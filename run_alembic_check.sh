#!/bin/sh
# first apply migrations
$(/home/ubuntu/.local/bin/poetry env info -p)/bin/python3 -m alembic upgrade head
# then check if the database is up to date with the models
$(/home/ubuntu/.local/bin/poetry env info -p)/bin/python3 -m alembic check
