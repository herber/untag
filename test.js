import test from 'ava';
import untag from '.';

test('removes indents', t => {
  const str1 = untag`  test`;
  const str2 = untag`  test1
  test2
  test3`;
  const str3 = untag`  test1
    test2
  test3`;

  t.is(str1, 'test');
  t.is(str2, 'test1\ntest2\ntest3');
  t.is(str3, 'test1\n  test2\ntest3');
});

test('removes empty first and last lines', t => {
  const str1 = untag`
test
`;

  const str2 = untag`
test1
test2
test3
`;

  const str3 = untag`
test1
  test2
test3
`;

  t.is(str1, 'test');
  t.is(str2, 'test1\ntest2\ntest3');
  t.is(str3, 'test1\n  test2\ntest3');
});

test('removes indents, empty first and last lines', t => {
  const str1 = untag`
  test
  `;

  const str2 = untag`
    test1
    test2
    test3
    `;

  const str3 = untag`
  test1
    test2
  test3
  `;

  t.is(str1, 'test');
  t.is(str2, 'test1\ntest2\ntest3');
  t.is(str3, 'test1\n  test2\ntest3');
});
