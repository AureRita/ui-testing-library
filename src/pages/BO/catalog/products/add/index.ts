import type {BOCreateProductPageInterface} from '@interfaces/BO/catalog/products/add';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOCreateProductPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/add');
  }
  return require('@versions/develop/pages/BO/catalog/products/add');
}
/* eslint-enable global-require */

export default requirePage();
