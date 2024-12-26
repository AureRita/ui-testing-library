import type {SelectionPageInterface} from '@interfaces/BO/modules/modulesAndServices/selection';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): SelectionPageInterface {
  if (semver.gte(psVersion, '7.5.0')) {
    return require('@versions/mock/pages/BO/modules/modulesAndServices/selection');
  }
  if (semver.lt(psVersion, '7.1.0')) {
    return require('@versions/1.7.0/pages/BO/modules/modulesAndServices/selection').selectionPage;
  }
  if (semver.lt(psVersion, '7.2.0')) {
    return require('@versions/1.7.1/pages/BO/modules/modulesAndServices/selection').selectionPage;
  }
  if (semver.lt(psVersion, '7.3.0')) {
    return require('@versions/1.7.2/pages/BO/modules/modulesAndServices/selection').selectionPage;
  }
  return require('@versions/1.7.4/pages/BO/modules/modulesAndServices/selection').selectionPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
