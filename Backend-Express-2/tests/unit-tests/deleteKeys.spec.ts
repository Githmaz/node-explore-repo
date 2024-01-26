import 'jest';
import { deleteKeys } from '../../src/utils/data-utils';

describe('deleteKeys', () => {

  it('should remove specified object keys', () => {
    const obj = {
      p0: 1,
      p1: {
        p11: {
          p111: 1,
          p112: 1
        },
        p12: 1
      },
      p2: {
        p21: 1
      }
    };
    const result = deleteKeys(obj, ['p0', 'p1.p11.p112', 'p2.p21']);
    expect(result?.p0 || result?.p1?.p11?.p112 || result?.p2?.p21).toBeFalsy();
  });
});
