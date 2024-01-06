function solution(my_string, overwrite_string, s) {
    const firstIndex = my_string.slice(0,s)
    const lastIndex = my_string.slice(s+overwrite_string.length, my_string.length)
    return firstIndex + overwrite_string + lastIndex
}