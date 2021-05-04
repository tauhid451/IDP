from flask import Flask 
import RPi.GPIO as GPIO
from flask import request

#Lock 1
lock_1_red_led = 11
lock_1_yellow_led = 12
lock_1_green_led = 13
lock_1_en = 15

GPIO.setmode(GPIO.BOARD)     # enable BOARD pin numberings
GPIO.setup(lock_1_red_led,GPIO.OUT)
GPIO.setup(lock_1_yellow_led,GPIO.OUT)
GPIO.setup(lock_1_green_led,GPIO.OUT)
GPIO.setup(lock_1_en,GPIO.OUT)

GPIO.output(lock_1_en,1)

app = Flask(__name__)


def unlock_gun(gun_no):
  if(gun_no==1 or gun_no=='1'):
    GPIO.output(lock_1_en,0)
  else:
    GPIO.output(lock_1_en,1)

def turn_light(light_no):
  #1st gun
  if(light_no==11 or light_no=='11'):
    GPIO.output(lock_1_red_led,1)
  else:
    GPIO.output(lock_1_red_led,0)
  if(light_no==12 or light_no=='12'):
    GPIO.output(lock_1_yellow_led,1)
  else:
    GPIO.output(lock_1_yellow_led,0)
  if(light_no==13 or light_no=='13'):
    GPIO.output(lock_1_green_led,1)
  else:
    GPIO.output(lock_1_green_led,0)

@app.route('/')
def index():
  return "Success"

@app.route('/gun-lock')
def get_locker():
  gun_no = request.args.get('gun_no', '')
  light_no = request.args.get('light_no', '')
  unlock_gun(gun_no)
  turn_light(light_no)
  return "Success"


if __name__=="__main__":
  app.run(host='0.0.0.0',port=5000,threaded=True)
