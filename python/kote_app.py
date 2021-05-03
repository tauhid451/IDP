from flask import Flask 
import RPi.GPIO as GPIO
from flask import request

#Lock 1
lock_1_red_led = 11
lock_1_yellow_led = 12
lock_1_green_led = 13
lock_1_en = 15

#lock 2
lock_2_red_led = 16
lock_2_yellow_led = 18
lock_2_green_led = 19
lock_2_en = 21

#lock 3
lock_3_red_led = 22
lock_3_yellow_led = 29
lock_3_green_led = 31
lock_3_en = 32

GPIO.setmode(GPIO.BOARD)     # enable BOARD pin numberings
GPIO.setup(lock_1_red_led,GPIO.OUT)
GPIO.setup(lock_1_yellow_led,GPIO.OUT)
GPIO.setup(lock_1_green_led,GPIO.OUT)
GPIO.setup(lock_1_en,GPIO.OUT)

GPIO.setup(lock_2_red_led,GPIO.OUT)
GPIO.setup(lock_2_yellow_led,GPIO.OUT)
GPIO.setup(lock_2_green_led,GPIO.OUT)
GPIO.setup(lock_2_en,GPIO.OUT)

GPIO.setup(lock_3_red_led,GPIO.OUT)
GPIO.setup(lock_3_yellow_led,GPIO.OUT)
GPIO.setup(lock_3_green_led,GPIO.OUT)
GPIO.setup(lock_3_en,GPIO.OUT)


app = Flask(__name__)

@app.route('/')
def index():
  return "Success"

@app.route('/gun-lock')
def get_locker():
  gun_no = request.args.get('gun_no', '')
  light_no = request.args.get('light_no', '')
  unlock_gun(gun_no)
  turn_light(light_no)



if __name__=="__main__":
  app.run(host='0.0.0.0',port=5000,threaded=True)


def unlock_gun(gun_no):
  if(gun_no==1):
    GPIO.output(lock_1_en,1)
  else:
    GPIO.output(lock_1_en,0)
  
  if(gun_no==2):
    GPIO.output(lock_2_en,1)
  else:
    GPIO.output(lock_2_en,0)
  
  if(gun_no==3):
    GPIO.output(lock_3_en,1)
  else:
    GPIO.output(lock_3_en,0)

def turn_light(light_no):
  #1st gun
  if(light_no==11):
    GPIO.output(lock_1_red_led,1)
  else:
    GPIO.output(lock_1_red_led,0)
  if(light_no==12):
    GPIO.output(lock_1_yellow_led,1)
  else:
    GPIO.output(lock_1_yellow_led,0)
  if(light_no==13):
    GPIO.output(lock_1_green_led,1)
  else:
    GPIO.output(lock_1_green_led,0)

  #2nd gun
    if(light_no==21):
    GPIO.output(lock_2_red_led,1)
  else:
    GPIO.output(lock_2_red_led,0)
  if(light_no==22):
    GPIO.output(lock_2_yellow_led,1)
  else:
    GPIO.output(lock_2_yellow_led,0)
  if(light_no==23):
    GPIO.output(lock_2_green_led,1)
  else:
    GPIO.output(lock_2_green_led,0)

  #3rd gun
    if(light_no==31):
    GPIO.output(lock_3_red_led,1)
  else:
    GPIO.output(lock_3_red_led,0)
  if(light_no==32):
    GPIO.output(lock_3_yellow_led,1)
  else:
    GPIO.output(lock_3_yellow_led,0)
  if(light_no==33):
    GPIO.output(lock_3_green_led,1)
  else:
    GPIO.output(lock_3_green_led,0)