# Sound
from soundfile import SoundFile

## Performs all the analysis and returns the data back to main - to be streamed to client
class AudioController():

    def __init__(self):
        self.sound = None

    def setUpTrack(self, filePath):
        
        # self.audioFileURLS[self.trackIndex]
        self.sound = SoundFile(filePath)


    def getDuration(self):
        print(self.sf)
