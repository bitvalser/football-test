import { PlayerModel } from './player.interface';

export interface TeamModel {
  id: number;
  name: string;
  shortName: string;
  crestUrl: string;
  squad?: PlayerModel[];
}
