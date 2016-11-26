#EagleEye - Server Edition


#!/usr/bin/env python
# -*- coding: utf-8 -*-



import os, sys, thread, time
import spidev
import RPi.GPIO as GPIO

#External Libraries
sys.path.insert(0, "libs")
from lib_nrf24 import NRF24


GPIO.setmode(GPIO.BCM)
print("HELLO!")


pipes = [[0xE8, 0xe8, 0xF0, 0xF0, 0xE1], [ 0xF0, 0xF0, 0xF0, 0xF0, 0xE1]]

radio = NRF24(GPIO, spidev.SpiDev()) #Creates instans of Radio
radio.begin(0, 17) #Defines the pins to be used

radio.setPayloadSize(32) #Size of pakages, 32 = max
radio.setChannel(0x76) #Channel that is used to talk over, now 76
radio.setDataRate(NRF24.BR_1MBPS) #Dataspeed, 1mbps, slow but reliable. slower = longer range
radio.setPALevel(NRF24.PA_MIN) #Sets powerlevel, now on lowest.


radio.setAutoAck(True) #Turing on auto ack
radio.enableDynamicPayloads() #Different package sizes
radio.enableAckPayload() #sso you know you get the packages

radio.openReadingPipe(1, pipes[1]) #Picks a pipe
radio.printDetails() #Prints it all
radio.startListening() #Starts listening

while True:
	while not radio.available(0):
		time.sleep(1/100) #sleep until message is recived

	recivedMessage = []
	radio.read(recivedMessage, radio.getDynamicPayloadSize())
	print("Recived: {}".format(recivedMessage)) #The message in Unicode

	print("Translating our recived message into unicode characters...")
	string = ""

	for n in recivedMessage:
		if(n >= 32 and n <= 126): # If the recived byte is a null-byte
			string += chr(n)

	print("Our recived message decodes to: {}".format(string))














