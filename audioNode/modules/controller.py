from concurrent import futures
import logging
import sys



 ## Performs all the analysis and returns the data back to main - to be streamed to client

class TrackController():

    #Track Controller STATE
    def __init__(self):
        self.controllerStatus = ''
        self.trackName = ''
        self.audioFileUrls = []

    # called when audio node is initialized and mode is tracks
    def setUpTrackController(self, initRequest):
        print(initRequest)
        self.audioFileUrls = initRequest.audioFileNames

    # <------------ Status Functions -------------->

    def getControllerStatus(self):
        return self.controllerStatus

    def setPlaying(self):
        self.controllerStatus = 'playing'

    def setPaused(self):
        self.controllerStatus = 'paused'

    # <----- General Functions -------------->
    def clearController(self):
        self.controllerStatus = ''
        self.trackName = ''
        self.audioFileUrls = []

    # gets the duration of the track
    def getDuration():
        return 0
