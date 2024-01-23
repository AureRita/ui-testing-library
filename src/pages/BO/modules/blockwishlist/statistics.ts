import type {ModuleBlockwishlistStatisticsPageInterface} from '@interfaces/BO/modules/blockwishlist/statistics';
import semver from 'semver';

const psVersion = global.getPSVersion();

/* eslint-disable global-require */
function requirePage(): ModuleBlockwishlistStatisticsPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/BO/modules/blockwishlist/statistics');
  }
  return require('@versions/8.0.0/pages/BO/modules/blockwishlist/statistics');
}
/* eslint-enable global-require */

export default requirePage();