import { combineReducers } from 'redux';
import app from './app/app.reducer';
import musicPlayer from './player/player.reducer';

const reducer = combineReducers({
    app, musicPlayer
});

export default reducer;
