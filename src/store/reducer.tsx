import { combineReducers } from 'redux';
import app from './app/app.reducer';
import music from './music/music.reducer';

const reducer = combineReducers({
    app, music
});

export default reducer;
