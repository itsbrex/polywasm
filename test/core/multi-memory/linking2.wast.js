
// linking2.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x8a\x80\x80\x80\x00\x03\x01\x00\x00\x01\x01\x05\x01\x00\x00\x07\x9d\x80\x80\x80\x00\x04\x04\x6d\x65\x6d\x30\x02\x00\x04\x6d\x65\x6d\x31\x02\x01\x04\x6d\x65\x6d\x32\x02\x02\x04\x6c\x6f\x61\x64\x00\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x20\x00\x2d\x40\x01\x00\x0b\x0b\x91\x80\x80\x80\x00\x01\x02\x01\x41\x0a\x0b\x0a\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09");
let $Mm = $1;

// linking2.wast:12
register("Mm", $Mm)

// linking2.wast:14
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\x8d\x80\x80\x80\x00\x01\x02\x4d\x6d\x04\x6d\x65\x6d\x31\x02\x01\x01\x08\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");
let $Pm = $2;

// linking2.wast:22
assert_return(() => call($Pm, "grow", [0]), 1);

// linking2.wast:23
assert_return(() => call($Pm, "grow", [2]), 1);

// linking2.wast:24
assert_return(() => call($Pm, "grow", [0]), 3);

// linking2.wast:25
assert_return(() => call($Pm, "grow", [1]), 3);

// linking2.wast:26
assert_return(() => call($Pm, "grow", [1]), 4);

// linking2.wast:27
assert_return(() => call($Pm, "grow", [0]), 5);

// linking2.wast:28
assert_return(() => call($Pm, "grow", [1]), -1);

// linking2.wast:29
assert_return(() => call($Pm, "grow", [0]), 5);
