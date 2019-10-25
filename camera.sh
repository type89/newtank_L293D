#!/bin/sh
sudo systemctl start webiopi
cd /home/pi/mjpg-streamer/mjpg-streamer/mjpg-streamer-experimental/
./mjpg_streamer -o "./output_http.so -w ./www -p 8080" -i "./input_raspicam.so -fps 30 -x 320 -y 240 -vf -hf"
