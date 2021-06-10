import { app, BrowserWindow, protocol} from 'electron';
import * as path from 'path';
import * as url from 'url';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
//
// var messages = require('../analyzer_pb2_grpc');
// var services = require('../analyzer_pb2');

var grpc = require('@grpc/grpc-js');

const protoDef = protoLoader.loadSync(path.join(__dirname, '../proto/analyzer.proto'))
const packageObject = grpc.loadPackageDefinition(protoDef);
const server = new grpc.Server();

server.addService(packageObject.HelloService.service, {});
let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  createPyProc()
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
  });

  if (process.env.NODE_ENV === 'development') {

    mainWindow.loadURL(`http://localhost:4000`);
  } else {
    mainWindow.loadURL(
      url.format({
          pathname: path.join(__dirname, '../index.html'),
          protocol: 'file:',
          slashes: true
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// add these to the end or middle of main.js


let pyProc = null
let pyPort = null

const selectPort = () => {
  pyPort = 4242
  return pyPort
}

const createPyProc = () => {
  let port = '' + selectPort()
  let script = path.join(__dirname, '../proto/hello.py')
  pyProc = require('child_process').spawn('python', [script, port])

  if (pyProc != null) {
    console.log('child process success')
  }
}

const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}


app.whenReady().then(() => {
  protocol.registerFileProtocol('file', (request, callback) => {
    const pathname = decodeURI(request.url.replace('file:///', ''));
    callback(pathname);
  });
   protocol.registerFileProtocol('atom', (request, callback) => {
    const url = request.url.substr(7)
    callback({ path: path.normalize(`${__dirname}/${url}`) })
  })
});

app.on('ready', createPyProc)
app.on('will-quit', exitPyProc)
app.on('ready', createWindow);

app.allowRendererProcessReuse = true;
