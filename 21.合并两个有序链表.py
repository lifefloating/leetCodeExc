#
# @lc app=leetcode.cn id=21 lang=python
#
# [21] 合并两个有序链表
#
# 输入：1->2->4, 1->3->4
# 输出：1->1->2->3->4->4

# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def mergeTwoLists(self, l1, l2):
        if l1 and l2:
            if l1.val > l2.val: l1, l2 = l2, l1
            l1.next = self.mergeTwoLists(l1.next, l2)
        return l1 or l2

