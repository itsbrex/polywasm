
// local_get.wast:3
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xb6\x80\x80\x80\x00\x0a\x60\x00\x01\x7f\x60\x00\x01\x7e\x60\x00\x01\x7d\x60\x00\x01\x7c\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x60\x05\x7e\x7d\x7c\x7f\x7f\x00\x60\x05\x7e\x7d\x7c\x7f\x7f\x01\x7c\x03\x94\x80\x80\x80\x00\x13\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x04\x04\x04\x04\x04\x04\x04\x04\x04\x07\xb3\x82\x80\x80\x00\x13\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x69\x33\x32\x00\x00\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x69\x36\x34\x00\x01\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x33\x32\x00\x02\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x36\x34\x00\x03\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x69\x33\x32\x00\x04\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x69\x36\x34\x00\x05\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x66\x33\x32\x00\x06\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x66\x36\x34\x00\x07\x0a\x74\x79\x70\x65\x2d\x6d\x69\x78\x65\x64\x00\x08\x04\x72\x65\x61\x64\x00\x09\x0e\x61\x73\x2d\x62\x6c\x6f\x63\x6b\x2d\x76\x61\x6c\x75\x65\x00\x0a\x0d\x61\x73\x2d\x6c\x6f\x6f\x70\x2d\x76\x61\x6c\x75\x65\x00\x0b\x0b\x61\x73\x2d\x62\x72\x2d\x76\x61\x6c\x75\x65\x00\x0c\x0e\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x00\x0d\x13\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x2d\x63\x6f\x6e\x64\x00\x0e\x11\x61\x73\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x76\x61\x6c\x75\x65\x00\x0f\x0f\x61\x73\x2d\x72\x65\x74\x75\x72\x6e\x2d\x76\x61\x6c\x75\x65\x00\x10\x0a\x61\x73\x2d\x69\x66\x2d\x74\x68\x65\x6e\x00\x11\x0a\x61\x73\x2d\x69\x66\x2d\x65\x6c\x73\x65\x00\x12\x0a\xda\x82\x80\x80\x00\x13\x86\x80\x80\x80\x00\x01\x01\x7f\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x01\x7d\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x01\x7c\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\xac\x80\x80\x80\x00\x03\x01\x7d\x02\x7e\x01\x7c\x20\x00\x50\x1a\x20\x01\x8c\x1a\x20\x02\x9a\x1a\x20\x03\x45\x1a\x20\x04\x45\x1a\x20\x05\x8c\x1a\x20\x06\x50\x1a\x20\x07\x50\x1a\x20\x08\x9a\x1a\x0b\xbf\x80\x80\x80\x00\x03\x01\x7d\x02\x7e\x01\x7c\x43\x00\x00\xb0\x40\x21\x05\x42\x06\x21\x06\x44\x00\x00\x00\x00\x00\x00\x20\x40\x21\x08\x20\x00\xba\x20\x01\xbb\x20\x02\x20\x03\xb8\x20\x04\xb7\x20\x05\xbb\x20\x06\xba\x20\x07\xba\x20\x08\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\x0b\x87\x80\x80\x80\x00\x00\x02\x7f\x20\x00\x0b\x0b\x87\x80\x80\x80\x00\x00\x03\x7f\x20\x00\x0b\x0b\x89\x80\x80\x80\x00\x00\x02\x7f\x20\x00\x0c\x00\x0b\x0b\x8b\x80\x80\x80\x00\x00\x02\x7f\x20\x00\x41\x01\x0d\x00\x0b\x0b\x8b\x80\x80\x80\x00\x00\x02\x7f\x20\x00\x20\x00\x0d\x00\x0b\x0b\x9d\x80\x80\x80\x00\x00\x02\x40\x02\x40\x02\x40\x20\x00\x0e\x02\x00\x01\x02\x41\x00\x0f\x0b\x41\x01\x0f\x0b\x41\x02\x0f\x0b\x41\x03\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x0f\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x04\x7f\x20\x00\x05\x41\x00\x0b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x04\x7f\x41\x01\x05\x20\x00\x0b\x0b");

// local_get.wast:109
assert_return(() => call($1, "type-local-i32", []), 0);

// local_get.wast:110
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa3\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x00\x01\x7e\x02\x8a\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x69\x36\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-local-i64", []), int64("0"))

// local_get.wast:111
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa3\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x00\x01\x7d\x02\x8a\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x33\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-local-f32", []), 0.)

// local_get.wast:112
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa3\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x00\x01\x7c\x02\x8a\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0e\x74\x79\x70\x65\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x36\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-local-f64", []), 0.)

// local_get.wast:114
assert_return(() => call($1, "type-param-i32", [2]), 2);

// local_get.wast:115
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7e\x01\x7e\x02\x8a\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x69\x36\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x03\x10\x00\x01\x42\x03\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-param-i64", [int64("3")]), int64("3"))

// local_get.wast:116
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7d\x01\x7d\x02\x8a\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x66\x33\x32\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\x9f\x80\x80\x80\x00\x01\x99\x80\x80\x80\x00\x00\x02\x40\x43\xcd\xcc\x8c\x40\x10\x00\xbc\x43\xcd\xcc\x8c\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-param-f32", [4.40000009537]), 4.40000009537)

// local_get.wast:117
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7c\x01\x7c\x02\x8a\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0e\x74\x79\x70\x65\x2d\x70\x61\x72\x61\x6d\x2d\x66\x36\x34\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xa7\x80\x80\x80\x00\x01\xa1\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\x16\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x16\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-param-f64", [5.5]), 5.5)

// local_get.wast:119
assert_return(() => call($1, "as-block-value", [6]), 6);

// local_get.wast:120
assert_return(() => call($1, "as-loop-value", [7]), 7);

// local_get.wast:122
assert_return(() => call($1, "as-br-value", [8]), 8);

// local_get.wast:123
assert_return(() => call($1, "as-br_if-value", [9]), 9);

// local_get.wast:124
assert_return(() => call($1, "as-br_if-value-cond", [10]), 10);

// local_get.wast:125
assert_return(() => call($1, "as-br_table-value", [1]), 2);

// local_get.wast:127
assert_return(() => call($1, "as-return-value", [0]), 0);

// local_get.wast:129
assert_return(() => call($1, "as-if-then", [1]), 1);

// local_get.wast:130
assert_return(() => call($1, "as-if-else", [0]), 0);

// local_get.wast:132
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa7\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x05\x7e\x7d\x7c\x7f\x7f\x00\x02\x86\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x0a\x74\x79\x70\x65\x2d\x6d\x69\x78\x65\x64\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xa3\x80\x80\x80\x00\x01\x9d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x43\xcd\xcc\x0c\x40\x44\x66\x66\x66\x66\x66\x66\x0a\x40\x41\x04\x41\x05\x10\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "type-mixed", [int64("1"), 2.20000004768, 3.3, 4, 5]))

// local_get.wast:138
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa8\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x05\x7e\x7d\x7c\x7f\x7f\x01\x7c\x02\x80\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x04\x72\x65\x61\x64\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xb2\x80\x80\x80\x00\x01\xac\x80\x80\x80\x00\x00\x02\x40\x42\x01\x43\x00\x00\x00\x40\x44\x66\x66\x66\x66\x66\x66\x0a\x40\x41\x04\x41\x05\x10\x00\xbd\x44\x66\x66\x66\x66\x66\x66\x41\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "read", [int64("1"), 2., 3.3, 4, 5]), 34.8)

// local_get.wast:148
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x01\x01\x7f\x20\x00\x0b");

// local_get.wast:152
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x01\x01\x7d\x20\x00\x45\x0b");

// local_get.wast:156
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x02\x01\x7c\x01\x7e\x20\x01\x9a\x0b");

// local_get.wast:164
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x20\x00\x0b");

// local_get.wast:168
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7d\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x20\x00\x45\x0b");

// local_get.wast:172
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x87\x80\x80\x80\x00\x01\x60\x02\x7c\x7e\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x20\x01\x9a\x0b");

// local_get.wast:180
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x01\x01\x7f\x20\x00\x0b");

// local_get.wast:184
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x0b");

// local_get.wast:188
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x01\x01\x7d\x20\x00\x0b");

// local_get.wast:192
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x01\x01\x7c\x20\x00\x0b");

// local_get.wast:200
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x02\x01\x7f\x01\x7e\x20\x03\x1a\x0b");

// local_get.wast:204
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x92\x80\x80\x80\x00\x01\x8c\x80\x80\x80\x00\x02\x01\x7f\x01\x7e\x20\xf7\xa4\xea\x06\x1a\x0b");

// local_get.wast:209
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x02\x7f\x7e\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x20\x02\x1a\x0b");

// local_get.wast:213
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x02\x7f\x7e\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x20\xf7\xf2\xce\xd4\x02\x1a\x0b");

// local_get.wast:218
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7f\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x02\x01\x7f\x01\x7e\x20\x03\x1a\x0b");

// local_get.wast:222
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7e\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x92\x80\x80\x80\x00\x01\x8c\x80\x80\x80\x00\x02\x01\x7f\x01\x7e\x20\xf7\xa8\x99\x66\x1a\x0b");
