import os
from os import listdir
from os.path import isfile, join
from pathlib import Path
from modules.fileHelpers import getImmediateSubdirectories, getTracksInDirectory


class DirectoryManager():
    def __init__(self):
        # audioPlayMode - type of playback track|live
        self.rootDir = 'audio'
        self.currentDir = ''
        self.currentIndex = 0
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

    def setCurrentTrack(self, playlistIndex, index):
        self.currentDir = self.playlists[playlistIndex]
        self.currentIndex = index

    def getCurrentTrackPath(self):
        return self.rootDir+'/'+self.currentDir+'/'+self.playlistDictionary[self.currentDir][self.currentIndex]

    def newTrack(self, newIndex):
        if newIndex > self.playlistDictionary[self.currentDir].len():
            self.currentIndex = 0
        elif newIndex < 0:
            self.currentIndex = self.playlistDictionary[self.currentDir].len()
        else:
            self.currentIndex = newIndex
        return self.getCurrentTrackPath()
