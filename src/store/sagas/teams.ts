import { ActionType } from 'typesafe-actions';
import { getTeamDetailAction, getTeamsAction } from '@store/actions/teams';
import { call, Effect, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import * as TeamsService from '@core/services/teams.service';

export class TeamsSagaWorker {
  static *fetchTeams() {
    try {
      const teams: SagaReturnType<typeof TeamsService.getTeams> = yield call(TeamsService.getTeams);
      yield put(getTeamsAction.success(teams));
    } catch (error: any) {
      // TODO: handle error
      yield put(getTeamsAction.failure(error?.message));
    }
  }

  static *fetchTeam({ payload: { id } }: ActionType<typeof getTeamDetailAction.request>) {
    try {
      const team: SagaReturnType<typeof TeamsService.getTeam> = yield call(TeamsService.getTeam, id);
      yield put(getTeamDetailAction.success(team));
    } catch (error: any) {
      // TODO: handle error
      yield put(getTeamDetailAction.failure(error?.message));
    }
  }
}

export function* teamsSaga(): Generator<Effect, void> {
  yield takeLatest(getTeamsAction.request, TeamsSagaWorker.fetchTeams);
  yield takeLatest(getTeamDetailAction.request, TeamsSagaWorker.fetchTeam);
}
