#!/bin/sh

LOG_FILE="/workspace/frontEnd/aa.txt"
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")
echo $CURRENT_TIME >> $LOG_FILE

