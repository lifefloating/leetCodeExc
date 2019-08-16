/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */

var cond = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    var result = 0
    for (var i = 0; i < s.length; i++) {
        console.log(i)
        if (cond[s[i]] < cond[s[i+1]]) {
            result -= cond[s[i]]
        } else {
            result += cond[s[i]]
        }
    }
    return result
};

