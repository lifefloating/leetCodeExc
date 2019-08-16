/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var ret = 0
    var realx = x
    if (x < 0) {
        return false
    }
    if (x < 10) {
        return true
    }
    while (parseInt(x/10)) {
        ret = 10 * ret + x - 10 * parseInt(x / 10);
        x = parseInt(x/10)
    }
    ret = 10 * ret + x
    if (realx == ret) {
        return true
    } else {
        return false
    }

};

