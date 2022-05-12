import { fork } from 'redux-saga/effects';
import { teamMatchesSaga } from './team-matches';
import { teamsSaga } from './teams';

export function* sagas(): Generator {
  yield fork(teamsSaga);
  yield fork(teamMatchesSaga);
}
