import webiopi
import serial
import time

webiopi.setDebug()

ser = serial.Serial('/dev/arduino_uno', 9600)
#ser = serial.Serial('/dev/arduino_mega', 9600)
#ser = serial.Serial('/dev/ttyACM0', 9600)
#シンボリックリンクでデバイス名称指定

@webiopi.macro
def serial_send(arg):
    arg_byte=arg.encode('utf-8')
    ser.write(arg_byte)
    return
