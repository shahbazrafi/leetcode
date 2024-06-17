class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        split = s.strip().split(" ")
        return len(split[-1])
        