# 算法导论
-------------------
## 1.插入法排序
    function insertSort(arr) {
      for (let i = 1; i < arr.length; i++) {
          let j = i - 1
          let key = arr[i]
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j]
              j --
          }
          arr[j + 1] = key
      }
      return arr
    }
