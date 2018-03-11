# 算法导论
-------------------
## 1.插入排序，用于数组数据比较少时，通过比较数组中的元素，看谁大谁小，根据结果来调整元素的位置。

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
## 2.归并排序，基本思想是分治策略，先进行划分，然后再进行合并。

    function merge(left, right) {
        var tmp = []

        while (left.length && right.length) {
          if (left[0] < right[0])
            tmp.push(left.shift())
          else
            tmp.push(right.shift())
        }

        return tmp.concat(left, right)
      }

    function mergeSort(a) {
        if (a.length === 1) 
            return a

        var mid = ~~(a.length / 2)
          , left = a.slice(0, mid)
          , right = a.slice(mid)

        return merge(mergeSort(left), mergeSort(right))
    }
