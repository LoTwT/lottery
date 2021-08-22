/**
 * 借用月影老师《如何写好 JS(2)》里 结果相对均匀 的洗牌算法
 * 取洗牌结果的第 0 位返回
 * @param {number} count 抽奖宫格数，默认 8 个 (九宫格)
 * @returns {number} 中奖宫格下标
 */
export const shuffle = (count: number = 8): number => {
    if (count <= 0) throw Error("invalid count")
    else if (count === 1) return 0

    let baseArr: number[] = []
    if (count === 9) baseArr = [0, 1, 2, 3, 4, 5, 6, 7]
    else baseArr = Array<number>(count).fill(0).map((num, index) => index % count)

    for (let i = baseArr.length; i > 0; i--) {
        const pIdx = Math.floor(Math.random() * i);
        [baseArr[pIdx], baseArr[i - 1]] = [baseArr[i - 1], baseArr[pIdx]];
    }

    return baseArr[0]
}

