
// binary.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:2
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:3
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");
let $M1 = $3;

// binary.wast:4
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");
let $M2 = $4;

// binary.wast:6
assert_malformed("");

// binary.wast:7
assert_malformed("\x01");

// binary.wast:8
assert_malformed("\x00\x61\x73");

// binary.wast:9
assert_malformed("\x61\x73\x6d\x00");

// binary.wast:10
assert_malformed("\x6d\x73\x61\x00");

// binary.wast:11
assert_malformed("\x6d\x73\x61\x00\x01\x00\x00\x00");

// binary.wast:12
assert_malformed("\x6d\x73\x61\x00\x00\x00\x00\x01");

// binary.wast:13
assert_malformed("\x61\x73\x6d\x01\x00\x00\x00\x00");

// binary.wast:14
assert_malformed("\x77\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:15
assert_malformed("\x7f\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:16
assert_malformed("\x80\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:17
assert_malformed("\x82\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:18
assert_malformed("\xff\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:21
assert_malformed("\x00\x00\x00\x01\x6d\x73\x61\x00");

// binary.wast:24
assert_malformed("\x61\x00\x6d\x73\x00\x01\x00\x00");

// binary.wast:25
assert_malformed("\x73\x6d\x00\x61\x00\x00\x01\x00");

// binary.wast:28
assert_malformed("\x00\x41\x53\x4d\x01\x00\x00\x00");

// binary.wast:31
assert_malformed("\x00\x81\xa2\x94\x01\x00\x00\x00");

// binary.wast:34
assert_malformed("\xef\xbb\xbf\x00\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:37
assert_malformed("\x00\x61\x73\x6d");

// binary.wast:38
assert_malformed("\x00\x61\x73\x6d\x01");

// binary.wast:39
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00");

// binary.wast:40
assert_malformed("\x00\x61\x73\x6d\x00\x00\x00\x00");

// binary.wast:41
assert_malformed("\x00\x61\x73\x6d\x0d\x00\x00\x00");

// binary.wast:42
assert_malformed("\x00\x61\x73\x6d\x0e\x00\x00\x00");

// binary.wast:43
assert_malformed("\x00\x61\x73\x6d\x00\x01\x00\x00");

// binary.wast:44
assert_malformed("\x00\x61\x73\x6d\x00\x00\x01\x00");

// binary.wast:45
assert_malformed("\x00\x61\x73\x6d\x00\x00\x00\x01");

// binary.wast:48
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x0c\x00");

// binary.wast:49
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x7f\x00");

// binary.wast:50
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x80\x00\x01\x00");

// binary.wast:51
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x81\x00\x01\x00");

// binary.wast:52
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\xff\x00\x01\x00");

// binary.wast:56
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\xe0\x7f\x00\x00");

// binary.wast:70
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x11\x00\x01\x0b");

// binary.wast:89
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0a\x01\x07\x00\x41\x00\x11\x00\x80\x00\x0b");

// binary.wast:108
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0b\x01\x08\x00\x41\x00\x11\x00\x80\x80\x00\x0b");

// binary.wast:126
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0c\x01\x09\x00\x41\x00\x11\x00\x80\x80\x80\x00\x0b");

// binary.wast:144
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0d\x01\x0a\x00\x41\x00\x11\x00\x80\x80\x80\x80\x00\x0b");

// binary.wast:163
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x40\x01\x1a\x0b");

// binary.wast:183
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0a\x01\x08\x00\x41\x00\x40\x80\x00\x1a\x0b");

// binary.wast:203
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0b\x01\x09\x00\x41\x00\x40\x80\x80\x00\x1a\x0b");

// binary.wast:222
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0c\x01\x0a\x00\x41\x00\x40\x80\x80\x80\x00\x1a\x0b");

// binary.wast:241
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0d\x01\x0b\x00\x41\x00\x40\x80\x80\x80\x80\x00\x1a\x0b");

// binary.wast:261
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x07\x01\x05\x00\x3f\x01\x1a\x0b");

// binary.wast:280
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x08\x01\x06\x00\x3f\x80\x00\x1a\x0b");

// binary.wast:299
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x09\x01\x07\x00\x3f\x80\x80\x00\x1a\x0b");

// binary.wast:317
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0a\x01\x08\x00\x3f\x80\x80\x80\x00\x1a\x0b");

// binary.wast:335
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0b\x01\x09\x00\x3f\x80\x80\x80\x80\x00\x1a\x0b");

// binary.wast:354
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x02\x80\x80\x80\x80\x10\x7f\x02\x7e\x0b");

// binary.wast:371
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x02\xff\xff\xff\xff\x0f\x7f\x02\x7e\x0b");

// binary.wast:387
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x06\x01\x60\x02\x7f\x7f\x00\x03\x02\x01\x00\x0a\x1c\x01\x1a\x04\x80\x80\x80\x80\x04\x7f\x80\x80\x80\x80\x04\x7e\x80\x80\x80\x80\x04\x7d\x80\x80\x80\x80\x04\x7c\x0b");

// binary.wast:406
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0a\x01\x08\x03\x00\x7f\x00\x7e\x02\x7d\x0b");

// binary.wast:421
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00");

// binary.wast:431
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:440
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:451
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x02\x02\x00\x0b\x02\x00\x0b");

// binary.wast:462
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x03\x01\x00");

// binary.wast:468
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x0a\x01\x00");

// binary.wast:474
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x01\x00");

// binary.wast:480
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x07\x02\x60\x00\x00");

// binary.wast:491
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x07\x01\x60\x00\x00\x60\x00\x00");

// binary.wast:502
let $9 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x01\x00");

// binary.wast:510
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x04\x01\x00\x00\x04");

// binary.wast:520
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x05\x01\x00\x00\x04\x00");

// binary.wast:531
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x04\x01\x00\x00\x05");

// binary.wast:541
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x05\x01\x00\x00\x05\x00");

// binary.wast:552
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x04\x01\x00\x00\x80");

// binary.wast:562
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x05\x01\x00\x00\x80\x00");

// binary.wast:575
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x16\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary.wast:594
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x09\x02\x60\x01\x7f\x00\x60\x01\x7d\x00\x02\x2b\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x66\x33\x32\x00\x01");

// binary.wast:619
let $10 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x01\x00");

// binary.wast:625
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x01\x01");

// binary.wast:635
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x70\x02");

// binary.wast:644
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x04\x01\x70\x02\x00");

// binary.wast:654
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x06\x01\x70\x81\x00\x00\x00");

// binary.wast:666
let $11 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x01\x00");

// binary.wast:672
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x01\x01");

// binary.wast:682
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x02\x01\x02");

// binary.wast:690
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x02\x00");

// binary.wast:699
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x05\x01\x81\x00\x00\x00");

// binary.wast:708
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x05\x01\x81\x01\x00\x00");

// binary.wast:719
let $12 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x01\x00");

// binary.wast:725
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x06\x02\x7f\x00\x41\x00\x0b");

// binary.wast:736
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0b\x01\x7f\x00\x41\x00\x0b\x7f\x00\x41\x00\x0b");

// binary.wast:747
let $13 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00\x07\x01\x00\x0a\x07\x02\x02\x00\x0b\x02\x00\x0b");

// binary.wast:759
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00\x07\x06\x02\x02\x66\x31\x00\x00\x0a\x07\x02\x02\x00\x0b\x02\x00\x0b");

// binary.wast:780
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00\x07\x0b\x01\x02\x66\x31\x00\x00\x02\x66\x32\x00\x01\x0a\x07\x02\x02\x00\x0b\x02\x00\x0b");

// binary.wast:801
let $14 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x01\x09\x01\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:814
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x01\x09\x07\x02\x00\x41\x00\x0b\x01\x00");

// binary.wast:830
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x01\x09\x07\x02\x00\x41\x00\x0b\x01\x00\x00\x41\x00");

// binary.wast:847
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x01\x09\x0d\x01\x00\x41\x00\x0b\x01\x00\x00\x41\x00\x0b\x01\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:865
let $15 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x01\x0b\x01\x00");

// binary.wast:873
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x01\x0b\x07\x02\x00\x41\x00\x0b\x01\x61");

// binary.wast:886
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x01\x0b\x0d\x01\x00\x41\x00\x0b\x01\x61\x00\x41\x01\x0b\x01\x62");

// binary.wast:899
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x01\x0b\x0c\x01\x00\x41\x03\x0b\x07\x61\x62\x63\x64\x65\x66");

// binary.wast:913
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x01\x0b\x0c\x01\x00\x41\x00\x0b\x05\x61\x62\x63\x64\x65\x66");

// binary.wast:927
let $16 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x11\x01\x0f\x00\x02\x40\x41\x01\x04\x40\x41\x01\x0e\x00\x02\x0b\x0b\x0b");

// binary.wast:944
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x12\x01\x11\x00\x02\x40\x41\x01\x04\x40\x41\x01\x0e\x01\x00\x01\x02\x0b\x0b\x0b");

// binary.wast:966
let $17 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x08\x01\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:979
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x08\x01\x00\x08\x01\x00\x0a\x04\x01\x02\x00\x0b");
