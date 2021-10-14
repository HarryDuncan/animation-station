# Sound
from soundfile import SoundFile

## Performs all the analysis and returns the data back to main - to be streamed to client
class AudioController():

    def __init__(self):
        self.sf = None

    def setUpTrack(self):
        filePath ='audio/heliotropic.aiff'
        # self.audioFileURLS[self.trackIndex]
        self.sf = SoundFile(filePath)


    def getDuration(self):
        print(self.sf)
