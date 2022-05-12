import { call, Effect, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { getTeamMatchesAction } from '@store/actions/team-matches';
import * as TeamsService from '@core/services/teams.service';

export class TeamMatchesSagaWorker {
  static *fetchTeamMatches({ payload: { id } }: ActionType<typeof getTeamMatchesAction.request>) {
    try {
      const matches: SagaReturnType<typeof TeamsService.getTeamMatches> = yield call(TeamsService.getTeamMatches, id);
      yield put(getTeamMatchesAction.success({ matches, teamId: id }));
    } catch (error: any) {
      // TODO: handle error
      yield put(getTeamMatchesAction.failure(error?.message));
    }
  }
}

export function* teamMatchesSaga(): Generator<Effect, void> {
  yield takeLatest(getTeamMatchesAction.request, TeamMatchesSagaWorker.fetchTeamMatches);
}
