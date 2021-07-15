# syntax=docker/dockerfile:1

FROM python:3
WORKDIR /audioNode

 COPY requirements.txt requirements.txt
 RUN pip install -r requirements.txt
 RUN pip install ipython numpy matplotlib pyyaml

RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get install -y python3-numpy python3-six \
    && apt-get install -y libfftw3-3 libyaml-0-2 libtag1v5 libsamplerate0 python3-yaml \
    && apt-get install -y ffmpeg


RUN apt-get update \
    && apt-get install -y build-essential python3-dev git \
    libfftw3-dev libavcodec-dev libavformat-dev libavresample-dev \
    libsamplerate0-dev libtag1-dev libyaml-dev \
    && mkdir /essentia && cd /essentia && git clone https://github.com/MTG/essentia.git \
    && cd /essentia/essentia && git checkout v2.1_beta5 && python3 waf configure --with-python --with-examples --with-vamp \
    && python3 waf && python3 waf install && ldconfig \
    &&  apt-get remove -y build-essential libyaml-dev libfftw3-dev libavcodec-dev \
        libavformat-dev libavutil-dev libavresample-dev python-dev libsamplerate0-dev \
        libtag1-dev python-numpy-dev \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* \
    && cd / && rm -rf /essentia/essentia


ENV PYTHONPATH /usr/local/lib/python3/dist-packages
ENV PYTHONUNBUFFERED=1

# Run Program
WORKDIR /audioNode

COPY . .
CMD ["python3", "audioNode.py"]
