#include <Servo.h>
#include <AFMotor.h>
 
//create a motor instance
AF_DCMotor right_motor(4);
AF_DCMotor left_motor(1);
 
Servo servo_H;
Servo servo_V;

const int servo_hpwm = 9;
const int servo_vpwm = 10;

const int LED_PIN = 19;

void setup(){
  // Serial Setting0
  Serial.begin(9600);
  servo_H.attach(servo_hpwm); 
  servo_V.attach(servo_vpwm); 
  
  // turn on motor
  //right_motor.setSpeed(0);
  //left_motor.setSpeed(0);
  
  left_motor.run(RELEASE); 
  right_motor.run(RELEASE);

  pinMode(LED_PIN,OUTPUT);
}

void loop(){
  if(Serial.available() > 0){  
    String str = Serial.readStringUntil(';');
  
    if(str.substring(0,1) == "F"){
      String arg1 = str.substring(1,4);
      String arg2 = str.substring(4,7);
      int L_duty = arg1.toInt();
      int R_duty = arg2.toInt();
      tank_forward(L_duty, R_duty);
    }

    if(str.substring(0,1) == "B"){
      String arg1 = str.substring(1,4);
      String arg2 = str.substring(4,7);
      int L_duty = arg1.toInt();
      int R_duty = arg2.toInt();
      tank_back(L_duty, R_duty);
    }

    if(str.substring(0,1) == "R"){
      String arg1 = str.substring(1,4);
      String arg2 = str.substring(4,7);
      int L_duty = arg1.toInt();
      int R_duty = arg2.toInt();
      tank_right(L_duty, R_duty);
    }

    if(str.substring(0,1) == "L"){
      String arg1 = str.substring(1,4);
      String arg2 = str.substring(4,7);
      int L_duty = arg1.toInt();
      int R_duty = arg2.toInt();
      tank_left(L_duty, R_duty);
    }
    
    if(str.substring(0,1) == "S"){
      tank_stop();
    }

    if(str.substring(0,1) == "H"){
      String arg1 = str.substring(1,4);
      int H_tilt = arg1.toInt();
      servo_H.write(H_tilt);
    }

    if(str.substring(0,1) == "V"){
      String arg1 = str.substring(1,4);
      int V_tilt = arg1.toInt();
      servo_V.write(V_tilt);
    }
      
    if(str.substring(0,1) == "X"){
      String arg1 = str.substring(1,2);
      int led_switch = arg1.toInt();
      light_led(led_switch);
    }
  }
}

void tank_forward(int L_duty, int R_duty){
  left_motor.setSpeed(L_duty);
  right_motor.setSpeed(R_duty);
  left_motor.run(FORWARD);
  right_motor.run(FORWARD);
}

void tank_back(int L_duty, int R_duty){
  left_motor.setSpeed(L_duty);
  right_motor.setSpeed(R_duty);
  left_motor.run(BACKWARD);
  right_motor.run(BACKWARD);
}

void tank_right(int L_duty, int R_duty){
  left_motor.setSpeed(L_duty);
  right_motor.setSpeed(R_duty);
  left_motor.run(FORWARD);
  right_motor.run(BACKWARD);
}

void tank_left(int L_duty, int R_duty){
  left_motor.setSpeed(L_duty);
  right_motor.setSpeed(R_duty);
  left_motor.run(BACKWARD);
  right_motor.run(FORWARD);
}

void tank_stop(){
  left_motor.run(RELEASE);
  right_motor.run(RELEASE);
}

void light_led(int led_switch){
  if(led_switch == 1){
    digitalWrite(LED_PIN, HIGH);
  }else{
        digitalWrite(LED_PIN, LOW);
        }
}
