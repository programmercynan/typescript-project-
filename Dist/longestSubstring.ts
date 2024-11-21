function lengthOfLongestSubSrting(s: string): number {
    // create a set to store unique characters
    let charSet = new Set<string>();

    // initialize the start pointer and max length 
    let start = 0;
    let maxLen = 0;

    // iterate over the string with the 'end' pointer 
    for (let end = 0; end < s.length; end++) {
        // if the character is already in the set, shrink the window from the start
        while (charSet.has([end])) {
            charSet.delete(s[start]);
            start++;
        }
    }
}