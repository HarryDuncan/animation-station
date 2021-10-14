# Callback for sd stream
def standardSDCallback(outdata, frames, time, status):
    assert frames == blockS
    if status.output_underflow:
        print('Output underflow: increase blocksize?', file=sys.stderr)
        raise sd.CallbackAbort
    assert not status
    try:
        data = q.get_nowait()
    except queue.Empty as e:
        print('Buffer is empty: increase buffersize?', file=sys.stderr)
        raise sd.CallbackAbort from e
    if len(data) < len(outdata):
        outdata[:len(data)] = data
        outdata[len(data):].fill(0)
        raise sd.CallbackStop
    else:
        outdata[:] = data
