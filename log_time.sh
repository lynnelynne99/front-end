#!/bin/sh

LOG_FILE="/home/ubuntu/workspace/test/frontEnd/aa.txt"
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")
echo $CURRENT_TIME >> $LOG_FILE
git add .
git commit -m "현석"
git push
