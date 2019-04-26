Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

//easy

function isAnagram(s, t) {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);
}
