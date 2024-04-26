#!/bin/bash

START_CMD="bin/start-solo.sh"
exec $START_CMD &

tail -f /dev/null
