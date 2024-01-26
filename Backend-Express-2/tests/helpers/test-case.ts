/** Test case for unit tests */
export interface ITestCase<V = any, R = any> {
  description?: string;
  value: V;
  expectedResult?: R;
  verifyResult?: (result: R) => void;
}
