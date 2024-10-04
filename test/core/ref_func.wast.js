
// ref_func.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x07\x85\x80\x80\x80\x00\x01\x01\x66\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x20\x00\x0b");

// ref_func.wast:4
register("M", $1)

// ref_func.wast:6
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x01\x7f\x01\x7f\x60\x00\x00\x60\x00\x01\x7f\x02\x87\x80\x80\x80\x00\x01\x01\x4d\x01\x66\x00\x00\x03\x8f\x80\x80\x80\x00\x0e\x00\x01\x01\x01\x01\x01\x02\x02\x02\x01\x01\x00\x00\x00\x04\x84\x80\x80\x80\x00\x01\x70\x00\x01\x06\x9a\x80\x80\x80\x00\x05\x70\x00\xd2\x00\x0b\x70\x00\xd2\x01\x0b\x70\x01\xd2\x00\x0b\x70\x00\xd2\x03\x0b\x70\x00\xd2\x04\x0b\x07\xd0\x80\x80\x80\x00\x08\x09\x69\x73\x5f\x6e\x75\x6c\x6c\x2d\x66\x00\x07\x09\x69\x73\x5f\x6e\x75\x6c\x6c\x2d\x67\x00\x08\x09\x69\x73\x5f\x6e\x75\x6c\x6c\x2d\x76\x00\x09\x05\x73\x65\x74\x2d\x66\x00\x0a\x05\x73\x65\x74\x2d\x67\x00\x0b\x06\x63\x61\x6c\x6c\x2d\x66\x00\x0c\x06\x63\x61\x6c\x6c\x2d\x67\x00\x0d\x06\x63\x61\x6c\x6c\x2d\x76\x00\x0e\x09\x90\x80\x80\x80\x00\x03\x03\x00\x02\x03\x05\x03\x00\x02\x04\x06\x03\x00\x02\x00\x01\x0a\xa6\x81\x80\x80\x00\x0e\x87\x80\x80\x80\x00\x00\x20\x00\x41\x01\x6a\x0b\x88\x80\x80\x80\x00\x00\xd2\x05\x1a\xd2\x06\x1a\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x85\x80\x80\x80\x00\x00\xd2\x00\xd1\x0b\x85\x80\x80\x80\x00\x00\xd2\x01\xd1\x0b\x85\x80\x80\x80\x00\x00\x23\x02\xd1\x0b\x86\x80\x80\x80\x00\x00\xd2\x00\x24\x02\x0b\x86\x80\x80\x80\x00\x00\xd2\x01\x24\x02\x0b\x8f\x80\x80\x80\x00\x00\x41\x00\xd2\x00\x26\x00\x20\x00\x41\x00\x11\x00\x00\x0b\x8f\x80\x80\x80\x00\x00\x41\x00\xd2\x01\x26\x00\x20\x00\x41\x00\x11\x00\x00\x0b\x8f\x80\x80\x80\x00\x00\x41\x00\x23\x02\x26\x00\x20\x00\x41\x00\x11\x00\x00\x0b");

// ref_func.wast:56
assert_return(() => call($2, "is_null-f", []), 0);

// ref_func.wast:57
assert_return(() => call($2, "is_null-g", []), 0);

// ref_func.wast:58
assert_return(() => call($2, "is_null-v", []), 0);

// ref_func.wast:60
assert_return(() => call($2, "call-f", [4]), 4);

// ref_func.wast:61
assert_return(() => call($2, "call-g", [4]), 5);

// ref_func.wast:62
assert_return(() => call($2, "call-v", [4]), 4);

// ref_func.wast:63
run(() => call($2, "set-g", []));

// ref_func.wast:64
assert_return(() => call($2, "call-v", [4]), 5);

// ref_func.wast:65
run(() => call($2, "set-f", []));

// ref_func.wast:66
assert_return(() => call($2, "call-v", [4]), 4);

// ref_func.wast:68
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8d\x80\x80\x80\x00\x02\x01\x4d\x01\x66\x00\x00\x01\x4d\x01\x67\x00\x00\x06\x86\x80\x80\x80\x00\x01\x70\x00\xd2\x07\x0b");

// ref_func.wast:80
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x88\x80\x80\x80\x00\x07\x00\x00\x00\x00\x00\x00\x00\x04\x84\x80\x80\x80\x00\x01\x70\x00\x01\x06\x86\x80\x80\x80\x00\x01\x70\x00\xd2\x00\x0b\x07\x85\x80\x80\x80\x00\x01\x01\x66\x00\x01\x09\x95\x80\x80\x80\x00\x04\x00\x41\x00\x0b\x01\x02\x00\x41\x00\x0b\x01\x03\x01\x00\x01\x04\x01\x00\x01\x05\x0a\xbf\x80\x80\x80\x00\x07\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x8f\x80\x80\x80\x00\x00\xd2\x00\xd2\x01\xd2\x02\xd2\x03\xd2\x04\xd2\x05\x0f\x0b");

// ref_func.wast:108
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\xd2\x00\x1a\x0b");

// ref_func.wast:112
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x08\x81\x80\x80\x80\x00\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\xd2\x00\x1a\x0b");
