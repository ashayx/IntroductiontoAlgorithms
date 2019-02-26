
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1])
                [arr[j], arr[j+1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr;
}

function quickSort(arr) {
    if(arr.length <= 1) 
        return arr;
    let left = [];
    let right = [];
    let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
    let midArr = [mid];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(e < mid) 
            left.push(e)
        else
            right.push(e)
    }
    return quickSort(left).concat(midArr, quickSort(right))
}

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j --;
        }
        arr[j + 1] = key;   
    }
}

function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex])
                minIndex = j
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) 
            arr.push(left.shift());
        else
            arr.push(right.shift());
    }
    return arr.concat(left, right);
}

/** 求最大子数组,分治法，O(nlgn) */
function maxSubArr(arr, left, right) {
    if (left === right) {
        return [left, right, arr[left]];
    } else {
        let mid = Math.floor((left + right) / 2);
        let [leftLow, leftHigh, leftMax] = maxSubArr(arr, left, mid);
        let [rightLow, rightHigt, rightMax] = maxSubArr(arr, mid + 1, right);
        let [crossLow, crossHigh, crossMax] = maxCorssingSubArr(arr, left, mid, right);
        let max = Math.max(leftMax, rightMax, crossMax);
        if(max === leftMax) {
            return [leftLow, leftHigh, leftMax];
        }else if(max === rightMax) {
            return [rightLow, rightHigt, rightMax];
        }else {
            return  [crossLow, crossHigh, crossMax];
        }
    }
}
function maxCorssingSubArr(arr, left, mid, right) {
    let leftSum = 0;
    let maxSum = 0;
    let leftIndex = 0;
    for (let i = mid; i >= left; i--) {
        maxSum += arr[i];
        if(maxSum > leftSum) {
            leftSum = maxSum;
            leftIndex = i;
        }
    } 
    let rightSum = 0;
    let rightIndex = 0;
    maxSum = 0;
    for (let j = mid + 1; j <= right; j++) {
        maxSum += arr[j];
        if(maxSum > rightSum) {
            rightSum = maxSum;
            rightIndex = j;
        }
    }
    return [leftIndex, rightIndex, leftSum + rightSum];
}
let testArr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
function testMaxSub() {
    return maxSubArr(testArr, 0, testArr.length);
}
testMaxSub();
