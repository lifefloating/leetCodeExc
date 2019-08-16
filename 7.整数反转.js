/*
 * @lc app=leetcode.cn id=7 lang=javascript
 * author yqiqi
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */

// x 321 32 3 0
// re 0 1 12 123
var reverse = function (x) {
    var re = 0;
    while (parseInt(x / 10)) {
        re = 10 * re + x - 10 * parseInt(x / 10);
        x = parseInt(x / 10);
    }
    if (re > 214748364 || re < -214748364) return 0;
    if ((re == 214748364 && x > 7) || (re == 214748364 && x < -8)) return 0;
    re = 10 * re + x;
    return re
};

reverse(321)

