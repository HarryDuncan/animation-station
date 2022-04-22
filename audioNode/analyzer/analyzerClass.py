import essentia
from essentia.streaming import *
from essentia import Pool, run, array, reset
import queue
import sys
import threading
import numpy as np
from struct import unpack

class Analyzer():

    def __init__(self):
        self.sampleRate = 16000
        self.frameSize = 1024
        self.hopSize = 512
        self.numberBands = 96

        # analysis parameters
        self.patchSize = 64
        self.displaySize = 10

        self.bufferSize = self.patchSize * self.hopSize



        self.q = queue.Queue(maxsize=self.bufferSize)
        self.event = threading.Event()



        # Essentia stuff
        self.buffer = np.zeros(4096,dtype='float32')
        self.vimp = VectorInput(self.buffer)
#        self.peak = PeakDetection()

        self.fc = FrameCutter(frameSize=self.frameSize, hopSize=self.hopSize)
        self.mean = Mean()
        self.median = Median()
        self.frameCutter = FrameCutter(frameSize = 1024, hopSize = 512)
        self.w = Windowing(type = 'hann')
        self.spec = Spectrum()
        self.mfcc = MFCC(inputSize=513)
        self.pool = Pool()

    def connectAlgorithms(self):

        self.vimp.data >> self.frameCutter.signal


        self.frameCutter.frame >> self.w.frame >> self.spec.frame
        self.spec.spectrum >> self.mfcc.spectrum
        self.mfcc.bands >> None
        self.spec.spectrum >> self.mean  >> (self.pool, 'bufferMean')

        self.spec.spectrum >> self.median >> (self.pool, 'bufferMedian')

        self.mfcc.mfcc >> (self.pool, 'lowlevel.mfcc')

    def analyzeFrame(self, data):

        try:
            self.buffer[:] = np.reshape(data, -1)
            #
            # # generate predictions
            reset(self.vimp)
            run(self.vimp)



            # update mel and activation buffers
            # print(self.spec.spectrum)
            # print(self.mfcc.bands)
            fMean = self.pool['bufferMean']
            fMedian = self.pool['bufferMedian']


            return {"mean" : fMean[len(fMean) - 1], "median" : fMedian[len(fMedian) - 1]}

        except Exception as e:
            print('line')
            print(e)



        return [12, 12]
# self.aggPool = PoolAggregator(defaultStats = ['mean', 'var'])
# self.aggPool(self.pool)
# print(self.aggPool['lowlevel.mfcc'])
