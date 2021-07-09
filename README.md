# AnimationStation
Desktop Application for music visualisation

- Built on react electron base with typescript and python server

compiled with docker and interfacing with grpc


build
- docker-compose -f docker-compose.yml build
run
- docker-compose -f docker-compose.yml up -d



docker run -ti --rm -v `pwd`:/essentia mtgupf/essentia python3 analyzer.py
~/.linuxbrew/bin:~/.linuxbrew/sbin:/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin


 docker run -ti --rm -v `pwd`:/essentia mtgupf/essentia python analyzer/analyzer.py
