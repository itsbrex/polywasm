
// f64_bitwise.wast:4
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x01\x7c\x01\x7c\x60\x02\x7c\x7c\x01\x7c\x03\x84\x80\x80\x80\x00\x03\x00\x00\x01\x07\x98\x80\x80\x80\x00\x03\x03\x61\x62\x73\x00\x00\x03\x6e\x65\x67\x00\x01\x08\x63\x6f\x70\x79\x73\x69\x67\x6e\x00\x02\x0a\xa1\x80\x80\x80\x00\x03\x85\x80\x80\x80\x00\x00\x20\x00\x99\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x9a\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa6\x0b");

// f64_bitwise.wast:10
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:11
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// f64_bitwise.wast:12
assert_return(() => call($1, "copysign", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:13
assert_return(() => call($1, "copysign", [float64(0n), float64(0n)]), float64(0n));

// f64_bitwise.wast:14
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-9_223_372_036_854_775_807n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:15
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(1n)]), float64(0n));

// f64_bitwise.wast:16
assert_return(() => call($1, "copysign", [float64(0n), float64(-9_223_372_036_854_775_807n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:17
assert_return(() => call($1, "copysign", [float64(0n), float64(1n)]), float64(0n));

// f64_bitwise.wast:18
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-9_218_868_437_227_405_312n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:19
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(4_503_599_627_370_496n)]), float64(0n));

// f64_bitwise.wast:20
assert_return(() => call($1, "copysign", [float64(0n), float64(-9_218_868_437_227_405_312n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:21
assert_return(() => call($1, "copysign", [float64(0n), float64(4_503_599_627_370_496n)]), float64(0n));

// f64_bitwise.wast:22
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-4_620_693_217_682_128_896n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:23
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(4_602_678_819_172_646_912n)]), float64(0n));

// f64_bitwise.wast:24
assert_return(() => call($1, "copysign", [float64(0n), float64(-4_620_693_217_682_128_896n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:25
assert_return(() => call($1, "copysign", [float64(0n), float64(4_602_678_819_172_646_912n)]), float64(0n));

// f64_bitwise.wast:26
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-4_616_189_618_054_758_400n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:27
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(4_607_182_418_800_017_408n)]), float64(0n));

// f64_bitwise.wast:28
assert_return(() => call($1, "copysign", [float64(0n), float64(-4_616_189_618_054_758_400n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:29
assert_return(() => call($1, "copysign", [float64(0n), float64(4_607_182_418_800_017_408n)]), float64(0n));

// f64_bitwise.wast:30
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-4_604_611_780_675_359_464n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:31
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(4_618_760_256_179_416_344n)]), float64(0n));

// f64_bitwise.wast:32
assert_return(() => call($1, "copysign", [float64(0n), float64(-4_604_611_780_675_359_464n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:33
assert_return(() => call($1, "copysign", [float64(0n), float64(4_618_760_256_179_416_344n)]), float64(0n));

// f64_bitwise.wast:34
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-4_503_599_627_370_497n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:35
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(9_218_868_437_227_405_311n)]), float64(0n));

// f64_bitwise.wast:36
assert_return(() => call($1, "copysign", [float64(0n), float64(-4_503_599_627_370_497n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:37
assert_return(() => call($1, "copysign", [float64(0n), float64(9_218_868_437_227_405_311n)]), float64(0n));

// f64_bitwise.wast:38
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-4_503_599_627_370_496n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:39
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(9_218_868_437_227_405_312n)]), float64(0n));

// f64_bitwise.wast:40
assert_return(() => call($1, "copysign", [float64(0n), float64(-4_503_599_627_370_496n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:41
assert_return(() => call($1, "copysign", [float64(0n), float64(9_218_868_437_227_405_312n)]), float64(0n));

// f64_bitwise.wast:42
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(-2_251_799_813_685_248n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:43
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_808n), float64(9_221_120_237_041_090_560n)]), float64(0n));

// f64_bitwise.wast:44
assert_return(() => call($1, "copysign", [float64(0n), float64(-2_251_799_813_685_248n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:45
assert_return(() => call($1, "copysign", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(0n));

// f64_bitwise.wast:46
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:47
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(0n)]), float64(1n));

// f64_bitwise.wast:48
assert_return(() => call($1, "copysign", [float64(1n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:49
assert_return(() => call($1, "copysign", [float64(1n), float64(0n)]), float64(1n));

// f64_bitwise.wast:50
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-9_223_372_036_854_775_807n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:51
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(1n)]), float64(1n));

// f64_bitwise.wast:52
assert_return(() => call($1, "copysign", [float64(1n), float64(-9_223_372_036_854_775_807n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:53
assert_return(() => call($1, "copysign", [float64(1n), float64(1n)]), float64(1n));

// f64_bitwise.wast:54
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-9_218_868_437_227_405_312n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:55
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(4_503_599_627_370_496n)]), float64(1n));

// f64_bitwise.wast:56
assert_return(() => call($1, "copysign", [float64(1n), float64(-9_218_868_437_227_405_312n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:57
assert_return(() => call($1, "copysign", [float64(1n), float64(4_503_599_627_370_496n)]), float64(1n));

// f64_bitwise.wast:58
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-4_620_693_217_682_128_896n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:59
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(4_602_678_819_172_646_912n)]), float64(1n));

// f64_bitwise.wast:60
assert_return(() => call($1, "copysign", [float64(1n), float64(-4_620_693_217_682_128_896n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:61
assert_return(() => call($1, "copysign", [float64(1n), float64(4_602_678_819_172_646_912n)]), float64(1n));

// f64_bitwise.wast:62
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-4_616_189_618_054_758_400n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:63
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(4_607_182_418_800_017_408n)]), float64(1n));

// f64_bitwise.wast:64
assert_return(() => call($1, "copysign", [float64(1n), float64(-4_616_189_618_054_758_400n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:65
assert_return(() => call($1, "copysign", [float64(1n), float64(4_607_182_418_800_017_408n)]), float64(1n));

// f64_bitwise.wast:66
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-4_604_611_780_675_359_464n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:67
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(4_618_760_256_179_416_344n)]), float64(1n));

// f64_bitwise.wast:68
assert_return(() => call($1, "copysign", [float64(1n), float64(-4_604_611_780_675_359_464n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:69
assert_return(() => call($1, "copysign", [float64(1n), float64(4_618_760_256_179_416_344n)]), float64(1n));

// f64_bitwise.wast:70
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-4_503_599_627_370_497n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:71
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(9_218_868_437_227_405_311n)]), float64(1n));

// f64_bitwise.wast:72
assert_return(() => call($1, "copysign", [float64(1n), float64(-4_503_599_627_370_497n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:73
assert_return(() => call($1, "copysign", [float64(1n), float64(9_218_868_437_227_405_311n)]), float64(1n));

// f64_bitwise.wast:74
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-4_503_599_627_370_496n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:75
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(9_218_868_437_227_405_312n)]), float64(1n));

// f64_bitwise.wast:76
assert_return(() => call($1, "copysign", [float64(1n), float64(-4_503_599_627_370_496n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:77
assert_return(() => call($1, "copysign", [float64(1n), float64(9_218_868_437_227_405_312n)]), float64(1n));

// f64_bitwise.wast:78
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(-2_251_799_813_685_248n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:79
assert_return(() => call($1, "copysign", [float64(-9_223_372_036_854_775_807n), float64(9_221_120_237_041_090_560n)]), float64(1n));

// f64_bitwise.wast:80
assert_return(() => call($1, "copysign", [float64(1n), float64(-2_251_799_813_685_248n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:81
assert_return(() => call($1, "copysign", [float64(1n), float64(9_221_120_237_041_090_560n)]), float64(1n));

// f64_bitwise.wast:82
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-9_223_372_036_854_775_808n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:83
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(0n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:84
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-9_223_372_036_854_775_808n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:85
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(0n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:86
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-9_223_372_036_854_775_807n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:87
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(1n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:88
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-9_223_372_036_854_775_807n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:89
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(1n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:90
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-9_218_868_437_227_405_312n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:91
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(4_503_599_627_370_496n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:92
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-9_218_868_437_227_405_312n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:93
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(4_503_599_627_370_496n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:94
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-4_620_693_217_682_128_896n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:95
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(4_602_678_819_172_646_912n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:96
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-4_620_693_217_682_128_896n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:97
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(4_602_678_819_172_646_912n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:98
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-4_616_189_618_054_758_400n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:99
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(4_607_182_418_800_017_408n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:100
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-4_616_189_618_054_758_400n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:101
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(4_607_182_418_800_017_408n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:102
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-4_604_611_780_675_359_464n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:103
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(4_618_760_256_179_416_344n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:104
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-4_604_611_780_675_359_464n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:105
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(4_618_760_256_179_416_344n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:106
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-4_503_599_627_370_497n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:107
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(9_218_868_437_227_405_311n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:108
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-4_503_599_627_370_497n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:109
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(9_218_868_437_227_405_311n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:110
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-4_503_599_627_370_496n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:111
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(9_218_868_437_227_405_312n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:112
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-4_503_599_627_370_496n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:113
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(9_218_868_437_227_405_312n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:114
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(-2_251_799_813_685_248n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:115
assert_return(() => call($1, "copysign", [float64(-9_218_868_437_227_405_312n), float64(9_221_120_237_041_090_560n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:116
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(-2_251_799_813_685_248n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:117
assert_return(() => call($1, "copysign", [float64(4_503_599_627_370_496n), float64(9_221_120_237_041_090_560n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:118
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-9_223_372_036_854_775_808n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:119
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(0n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:120
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-9_223_372_036_854_775_808n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:121
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(0n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:122
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-9_223_372_036_854_775_807n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:123
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(1n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:124
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-9_223_372_036_854_775_807n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:125
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(1n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:126
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-9_218_868_437_227_405_312n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:127
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(4_503_599_627_370_496n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:128
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-9_218_868_437_227_405_312n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:129
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(4_503_599_627_370_496n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:130
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-4_620_693_217_682_128_896n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:131
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(4_602_678_819_172_646_912n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:132
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-4_620_693_217_682_128_896n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:133
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(4_602_678_819_172_646_912n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:134
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-4_616_189_618_054_758_400n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:135
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(4_607_182_418_800_017_408n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:136
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-4_616_189_618_054_758_400n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:137
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(4_607_182_418_800_017_408n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:138
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-4_604_611_780_675_359_464n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:139
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(4_618_760_256_179_416_344n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:140
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-4_604_611_780_675_359_464n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:141
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(4_618_760_256_179_416_344n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:142
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-4_503_599_627_370_497n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:143
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(9_218_868_437_227_405_311n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:144
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-4_503_599_627_370_497n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:145
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(9_218_868_437_227_405_311n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:146
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-4_503_599_627_370_496n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:147
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(9_218_868_437_227_405_312n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:148
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-4_503_599_627_370_496n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:149
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(9_218_868_437_227_405_312n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:150
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(-2_251_799_813_685_248n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:151
assert_return(() => call($1, "copysign", [float64(-4_620_693_217_682_128_896n), float64(9_221_120_237_041_090_560n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:152
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(-2_251_799_813_685_248n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:153
assert_return(() => call($1, "copysign", [float64(4_602_678_819_172_646_912n), float64(9_221_120_237_041_090_560n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:154
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-9_223_372_036_854_775_808n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:155
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(0n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:156
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-9_223_372_036_854_775_808n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:157
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(0n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:158
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-9_223_372_036_854_775_807n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:159
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(1n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:160
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-9_223_372_036_854_775_807n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:161
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(1n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:162
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-9_218_868_437_227_405_312n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:163
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(4_503_599_627_370_496n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:164
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-9_218_868_437_227_405_312n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:165
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(4_503_599_627_370_496n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:166
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-4_620_693_217_682_128_896n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:167
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(4_602_678_819_172_646_912n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:168
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-4_620_693_217_682_128_896n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:169
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(4_602_678_819_172_646_912n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:170
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-4_616_189_618_054_758_400n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:171
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(4_607_182_418_800_017_408n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:172
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-4_616_189_618_054_758_400n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:173
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(4_607_182_418_800_017_408n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:174
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-4_604_611_780_675_359_464n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:175
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(4_618_760_256_179_416_344n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:176
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-4_604_611_780_675_359_464n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:177
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(4_618_760_256_179_416_344n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:178
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-4_503_599_627_370_497n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:179
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(9_218_868_437_227_405_311n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:180
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-4_503_599_627_370_497n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:181
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(9_218_868_437_227_405_311n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:182
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-4_503_599_627_370_496n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:183
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(9_218_868_437_227_405_312n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:184
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-4_503_599_627_370_496n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:185
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(9_218_868_437_227_405_312n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:186
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(-2_251_799_813_685_248n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:187
assert_return(() => call($1, "copysign", [float64(-4_616_189_618_054_758_400n), float64(9_221_120_237_041_090_560n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:188
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(-2_251_799_813_685_248n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:189
assert_return(() => call($1, "copysign", [float64(4_607_182_418_800_017_408n), float64(9_221_120_237_041_090_560n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:190
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-9_223_372_036_854_775_808n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:191
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(0n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:192
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-9_223_372_036_854_775_808n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:193
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(0n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:194
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-9_223_372_036_854_775_807n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:195
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(1n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:196
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-9_223_372_036_854_775_807n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:197
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(1n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:198
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-9_218_868_437_227_405_312n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:199
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(4_503_599_627_370_496n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:200
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-9_218_868_437_227_405_312n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:201
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(4_503_599_627_370_496n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:202
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-4_620_693_217_682_128_896n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:203
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(4_602_678_819_172_646_912n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:204
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-4_620_693_217_682_128_896n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:205
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(4_602_678_819_172_646_912n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:206
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-4_616_189_618_054_758_400n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:207
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(4_607_182_418_800_017_408n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:208
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-4_616_189_618_054_758_400n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:209
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(4_607_182_418_800_017_408n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:210
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-4_604_611_780_675_359_464n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:211
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(4_618_760_256_179_416_344n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:212
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-4_604_611_780_675_359_464n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:213
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(4_618_760_256_179_416_344n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:214
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-4_503_599_627_370_497n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:215
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(9_218_868_437_227_405_311n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:216
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-4_503_599_627_370_497n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:217
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(9_218_868_437_227_405_311n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:218
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-4_503_599_627_370_496n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:219
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(9_218_868_437_227_405_312n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:220
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-4_503_599_627_370_496n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:221
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(9_218_868_437_227_405_312n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:222
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(-2_251_799_813_685_248n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:223
assert_return(() => call($1, "copysign", [float64(-4_604_611_780_675_359_464n), float64(9_221_120_237_041_090_560n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:224
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(-2_251_799_813_685_248n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:225
assert_return(() => call($1, "copysign", [float64(4_618_760_256_179_416_344n), float64(9_221_120_237_041_090_560n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:226
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-9_223_372_036_854_775_808n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:227
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(0n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:228
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-9_223_372_036_854_775_808n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:229
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(0n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:230
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-9_223_372_036_854_775_807n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:231
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(1n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:232
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-9_223_372_036_854_775_807n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:233
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(1n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:234
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-9_218_868_437_227_405_312n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:235
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:236
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-9_218_868_437_227_405_312n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:237
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:238
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-4_620_693_217_682_128_896n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:239
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(4_602_678_819_172_646_912n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:240
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-4_620_693_217_682_128_896n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:241
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(4_602_678_819_172_646_912n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:242
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-4_616_189_618_054_758_400n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:243
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(4_607_182_418_800_017_408n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:244
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-4_616_189_618_054_758_400n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:245
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(4_607_182_418_800_017_408n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:246
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-4_604_611_780_675_359_464n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:247
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(4_618_760_256_179_416_344n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:248
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-4_604_611_780_675_359_464n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:249
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(4_618_760_256_179_416_344n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:250
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-4_503_599_627_370_497n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:251
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:252
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-4_503_599_627_370_497n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:253
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:254
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-4_503_599_627_370_496n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:255
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:256
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-4_503_599_627_370_496n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:257
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:258
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(-2_251_799_813_685_248n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:259
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_497n), float64(9_221_120_237_041_090_560n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:260
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(-2_251_799_813_685_248n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:261
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_311n), float64(9_221_120_237_041_090_560n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:262
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-9_223_372_036_854_775_808n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:263
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(0n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:264
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-9_223_372_036_854_775_808n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:265
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(0n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:266
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-9_223_372_036_854_775_807n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:267
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(1n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:268
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-9_223_372_036_854_775_807n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:269
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(1n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:270
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-9_218_868_437_227_405_312n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:271
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:272
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-9_218_868_437_227_405_312n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:273
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:274
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-4_620_693_217_682_128_896n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:275
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(4_602_678_819_172_646_912n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:276
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-4_620_693_217_682_128_896n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:277
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(4_602_678_819_172_646_912n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:278
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-4_616_189_618_054_758_400n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:279
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(4_607_182_418_800_017_408n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:280
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-4_616_189_618_054_758_400n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:281
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(4_607_182_418_800_017_408n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:282
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-4_604_611_780_675_359_464n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:283
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(4_618_760_256_179_416_344n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:284
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-4_604_611_780_675_359_464n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:285
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(4_618_760_256_179_416_344n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:286
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-4_503_599_627_370_497n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:287
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:288
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-4_503_599_627_370_497n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:289
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:290
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-4_503_599_627_370_496n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:291
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:292
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-4_503_599_627_370_496n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:293
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:294
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(-2_251_799_813_685_248n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:295
assert_return(() => call($1, "copysign", [float64(-4_503_599_627_370_496n), float64(9_221_120_237_041_090_560n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:296
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(-2_251_799_813_685_248n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:297
assert_return(() => call($1, "copysign", [float64(9_218_868_437_227_405_312n), float64(9_221_120_237_041_090_560n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:298
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-9_223_372_036_854_775_808n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:299
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(0n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:300
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-9_223_372_036_854_775_808n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:301
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:302
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-9_223_372_036_854_775_807n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:303
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(1n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:304
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-9_223_372_036_854_775_807n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:305
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(1n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:306
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-9_218_868_437_227_405_312n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:307
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(4_503_599_627_370_496n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:308
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-9_218_868_437_227_405_312n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:309
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(4_503_599_627_370_496n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:310
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-4_620_693_217_682_128_896n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:311
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(4_602_678_819_172_646_912n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:312
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-4_620_693_217_682_128_896n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:313
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(4_602_678_819_172_646_912n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:314
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-4_616_189_618_054_758_400n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:315
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(4_607_182_418_800_017_408n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:316
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-4_616_189_618_054_758_400n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:317
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(4_607_182_418_800_017_408n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:318
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-4_604_611_780_675_359_464n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:319
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(4_618_760_256_179_416_344n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:320
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-4_604_611_780_675_359_464n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:321
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(4_618_760_256_179_416_344n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:322
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-4_503_599_627_370_497n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:323
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(9_218_868_437_227_405_311n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:324
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-4_503_599_627_370_497n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:325
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(9_218_868_437_227_405_311n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:326
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-4_503_599_627_370_496n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:327
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(9_218_868_437_227_405_312n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:328
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-4_503_599_627_370_496n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:329
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(9_218_868_437_227_405_312n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:330
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(-2_251_799_813_685_248n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:331
assert_return(() => call($1, "copysign", [float64(-2_251_799_813_685_248n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:332
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(-2_251_799_813_685_248n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:333
assert_return(() => call($1, "copysign", [float64(9_221_120_237_041_090_560n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:334
assert_return(() => call($1, "abs", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// f64_bitwise.wast:335
assert_return(() => call($1, "abs", [float64(0n)]), float64(0n));

// f64_bitwise.wast:336
assert_return(() => call($1, "abs", [float64(-9_223_372_036_854_775_807n)]), float64(1n));

// f64_bitwise.wast:337
assert_return(() => call($1, "abs", [float64(1n)]), float64(1n));

// f64_bitwise.wast:338
assert_return(() => call($1, "abs", [float64(-9_218_868_437_227_405_312n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:339
assert_return(() => call($1, "abs", [float64(4_503_599_627_370_496n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:340
assert_return(() => call($1, "abs", [float64(-4_620_693_217_682_128_896n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:341
assert_return(() => call($1, "abs", [float64(4_602_678_819_172_646_912n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:342
assert_return(() => call($1, "abs", [float64(-4_616_189_618_054_758_400n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:343
assert_return(() => call($1, "abs", [float64(4_607_182_418_800_017_408n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:344
assert_return(() => call($1, "abs", [float64(-4_604_611_780_675_359_464n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:345
assert_return(() => call($1, "abs", [float64(4_618_760_256_179_416_344n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:346
assert_return(() => call($1, "abs", [float64(-4_503_599_627_370_497n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:347
assert_return(() => call($1, "abs", [float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:348
assert_return(() => call($1, "abs", [float64(-4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:349
assert_return(() => call($1, "abs", [float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:350
assert_return(() => call($1, "abs", [float64(-2_251_799_813_685_248n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:351
assert_return(() => call($1, "abs", [float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:352
assert_return(() => call($1, "neg", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// f64_bitwise.wast:353
assert_return(() => call($1, "neg", [float64(0n)]), float64(-9_223_372_036_854_775_808n));

// f64_bitwise.wast:354
assert_return(() => call($1, "neg", [float64(-9_223_372_036_854_775_807n)]), float64(1n));

// f64_bitwise.wast:355
assert_return(() => call($1, "neg", [float64(1n)]), float64(-9_223_372_036_854_775_807n));

// f64_bitwise.wast:356
assert_return(() => call($1, "neg", [float64(-9_218_868_437_227_405_312n)]), float64(4_503_599_627_370_496n));

// f64_bitwise.wast:357
assert_return(() => call($1, "neg", [float64(4_503_599_627_370_496n)]), float64(-9_218_868_437_227_405_312n));

// f64_bitwise.wast:358
assert_return(() => call($1, "neg", [float64(-4_620_693_217_682_128_896n)]), float64(4_602_678_819_172_646_912n));

// f64_bitwise.wast:359
assert_return(() => call($1, "neg", [float64(4_602_678_819_172_646_912n)]), float64(-4_620_693_217_682_128_896n));

// f64_bitwise.wast:360
assert_return(() => call($1, "neg", [float64(-4_616_189_618_054_758_400n)]), float64(4_607_182_418_800_017_408n));

// f64_bitwise.wast:361
assert_return(() => call($1, "neg", [float64(4_607_182_418_800_017_408n)]), float64(-4_616_189_618_054_758_400n));

// f64_bitwise.wast:362
assert_return(() => call($1, "neg", [float64(-4_604_611_780_675_359_464n)]), float64(4_618_760_256_179_416_344n));

// f64_bitwise.wast:363
assert_return(() => call($1, "neg", [float64(4_618_760_256_179_416_344n)]), float64(-4_604_611_780_675_359_464n));

// f64_bitwise.wast:364
assert_return(() => call($1, "neg", [float64(-4_503_599_627_370_497n)]), float64(9_218_868_437_227_405_311n));

// f64_bitwise.wast:365
assert_return(() => call($1, "neg", [float64(9_218_868_437_227_405_311n)]), float64(-4_503_599_627_370_497n));

// f64_bitwise.wast:366
assert_return(() => call($1, "neg", [float64(-4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_312n));

// f64_bitwise.wast:367
assert_return(() => call($1, "neg", [float64(9_218_868_437_227_405_312n)]), float64(-4_503_599_627_370_496n));

// f64_bitwise.wast:368
assert_return(() => call($1, "neg", [float64(-2_251_799_813_685_248n)]), float64(9_221_120_237_041_090_560n));

// f64_bitwise.wast:369
assert_return(() => call($1, "neg", [float64(9_221_120_237_041_090_560n)]), float64(-2_251_799_813_685_248n));

// f64_bitwise.wast:374
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x00\x43\x00\x00\x00\x00\xa6\x0b");

// f64_bitwise.wast:375
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x99\x0b");

// f64_bitwise.wast:376
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x9a\x0b");
