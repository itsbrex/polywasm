
// fac.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x9a\x80\x80\x80\x00\x04\x60\x01\x7e\x01\x7e\x60\x01\x7e\x02\x7e\x7e\x60\x02\x7e\x7e\x03\x7e\x7e\x7e\x60\x02\x7e\x7e\x01\x7e\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x00\x01\x02\x00\x07\xcb\x80\x80\x80\x00\x06\x07\x66\x61\x63\x2d\x72\x65\x63\x00\x00\x0d\x66\x61\x63\x2d\x72\x65\x63\x2d\x6e\x61\x6d\x65\x64\x00\x01\x08\x66\x61\x63\x2d\x69\x74\x65\x72\x00\x02\x0e\x66\x61\x63\x2d\x69\x74\x65\x72\x2d\x6e\x61\x6d\x65\x64\x00\x03\x07\x66\x61\x63\x2d\x6f\x70\x74\x00\x04\x07\x66\x61\x63\x2d\x73\x73\x61\x00\x07\x0a\x8b\x82\x80\x80\x00\x08\x97\x80\x80\x80\x00\x00\x20\x00\x42\x00\x51\x04\x7e\x42\x01\x05\x20\x00\x20\x00\x42\x01\x7d\x10\x00\x7e\x0b\x0b\x97\x80\x80\x80\x00\x00\x20\x00\x42\x00\x51\x04\x7e\x42\x01\x05\x20\x00\x20\x00\x42\x01\x7d\x10\x01\x7e\x0b\x0b\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\xac\x80\x80\x80\x00\x01\x01\x7e\x42\x01\x21\x01\x02\x40\x20\x00\x42\x02\x53\x0d\x00\x03\x40\x20\x01\x20\x00\x7e\x21\x01\x20\x00\x42\x7f\x7c\x21\x00\x20\x00\x42\x01\x55\x0d\x00\x0b\x0b\x20\x01\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x20\x00\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x0b\x9c\x80\x80\x80\x00\x00\x42\x01\x20\x00\x03\x03\x10\x06\x10\x06\x7e\x10\x06\x42\x01\x7d\x10\x05\x42\x00\x56\x0d\x00\x1a\x0f\x0b\x0b");

// fac.wast:102
assert_return(() => call($1, "fac-rec", [25n]), 7_034_535_277_573_963_776n);

// fac.wast:103
assert_return(() => call($1, "fac-iter", [25n]), 7_034_535_277_573_963_776n);

// fac.wast:104
assert_return(() => call($1, "fac-rec-named", [25n]), 7_034_535_277_573_963_776n);

// fac.wast:105
assert_return(() => call($1, "fac-iter-named", [25n]), 7_034_535_277_573_963_776n);

// fac.wast:106
assert_return(() => call($1, "fac-opt", [25n]), 7_034_535_277_573_963_776n);

// fac.wast:107
assert_return(() => call($1, "fac-ssa", [25n]), 7_034_535_277_573_963_776n);

// fac.wast:109
assert_exhaustion(() => call($1, "fac-rec", [1_073_741_824n]));
