import os

# module for getting managing playlists and track file paths
def getPlaylists():
  arr = os.listdir('audio')
  print(arr)
  for item in arr:
      print(item)
  print('getting playlists')


def getCurrentTrackPath():
    print('getting track path')
