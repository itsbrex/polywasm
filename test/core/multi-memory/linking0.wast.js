
// linking0.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x01\x7f\x60\x00\x00\x60\x01\x7f\x01\x7f\x03\x84\x80\x80\x80\x00\x03\x00\x00\x02\x04\x84\x80\x80\x80\x00\x01\x70\x00\x0a\x07\x92\x80\x80\x80\x00\x03\x03\x74\x61\x62\x01\x00\x01\x68\x00\x01\x04\x63\x61\x6c\x6c\x00\x02\x09\x8a\x80\x80\x80\x00\x01\x00\x41\x02\x0b\x04\x00\x00\x00\x00\x0a\x9f\x80\x80\x80\x00\x03\x84\x80\x80\x80\x00\x00\x41\x04\x0b\x84\x80\x80\x80\x00\x00\x41\x7c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x11\x00\x00\x0b");
let $Mt = $1;

// linking0.wast:14
register("Mt", $Mt)

// linking0.wast:16
assert_unlinkable("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\xa9\x80\x80\x80\x00\x03\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x08\x73\x70\x65\x63\x74\x65\x73\x74\x06\x6d\x65\x6d\x6f\x72\x79\x02\x00\x01\x02\x4d\x74\x03\x6d\x65\x6d\x02\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x09\x8d\x80\x80\x80\x00\x02\x00\x41\x07\x0b\x01\x00\x00\x41\x09\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");

// linking0.wast:27
assert_trap(() => call($Mt, "call", [7]));

// linking0.wast:30
assert_uninstantiable("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x8c\x80\x80\x80\x00\x01\x02\x4d\x74\x03\x74\x61\x62\x01\x70\x00\x0a\x03\x82\x80\x80\x80\x00\x01\x00\x05\x87\x80\x80\x80\x00\x03\x00\x00\x00\x01\x00\x00\x09\x87\x80\x80\x80\x00\x01\x00\x41\x07\x0b\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x0b\x89\x80\x80\x80\x00\x01\x00\x41\x80\x80\x04\x0b\x01\x64");

// linking0.wast:42
assert_return(() => call($Mt, "call", [7]), 0);
