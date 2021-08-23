import axios from "axios"

const requestLotteryUrl = "/api/lottery"

export const getLottery = async () => await axios.get(requestLotteryUrl)

export const postLottery = async () => await axios.post(requestLotteryUrl)