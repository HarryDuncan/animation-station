import os
from os import listdir
from os.path import isfile, join
from pathlib import Path

def getImmediateSubdirectories(a_dir):
    return [name for name in os.listdir(a_dir)
        if os.path.isdir(os.path.join(a_dir, name))]


def getTracksInDirectory(pathName):
    return [f for f in listdir(pathName) if isfile(join(pathName, f))]
