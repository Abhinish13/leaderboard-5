import {AudioService} from './services/audio.service';
import {StorageService} from './services/storage.service';
import {GameService} from './services/game.service';
import {ExportService} from './services/export.service';
import {Run} from './config/run';
import {Config} from './config/config';
import './vendor';

angular.module('usabilla.leaderboard', [
    'ui.router',
    'LocalStorageModule',
    'ngMessages',
    'timer',
    'cfp.hotkeys',
    'angucomplete-alt',
    'ngAudio'
  ])
  .config(Config)
  .run(Run)
  .service('StorageService', StorageService)
  .service('GameService', GameService)
  .service('ExportService', ExportService)
  .service('AudioService', AudioService)
  .directive('available', require('./directives/available.directive.ts'))
  .directive('freeEmail', require('./directives/freeEmail.directive.ts'))
  .filter('ordinal', require('./filters/ordinal.filter.ts'));