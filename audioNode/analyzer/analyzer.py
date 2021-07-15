from concurrent import futures
import logging
import sys



import essentia
from essentia.streaming import *


 ## Performs all the analysis and returns the data back to main - to be streamed to client

class Analyzer():
