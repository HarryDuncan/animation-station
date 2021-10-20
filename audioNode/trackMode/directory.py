import os
from os import listdir
from os.path import isfile, join
from pathlib import Path
from modules.fileHelpers import getImmediateSubdirectories, getTracksInDirectory

class DirectoryManager():
    def __init__(self):
        # audioPlayMode - type of playback track|live
        self.rootDir = 'audio'
        self.playlists = []
        self.playlistDictionary = {}




    # module for getting managing playlists and track file paths
    def getPlaylists(self):
      self.playlists = []
      self.playlists = getImmediateSubdirectories(self.rootDir)
      for p in self.playlists:
          newPath = self.rootDir + "/" + p
          tracks = getTracksInDirectory(newPath)
          self.playlistDictionary[p] = tracks
      return self.playlists

    def getTracksInPlaylist(self, playlistName):
        return self.playlistDictionary[playlistName]

    def getCurrentTrackPath():
        print('getting track path')
