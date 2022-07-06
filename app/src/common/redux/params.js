export const changePost = () => ({
  type: 'CHANGE'
})

const paramsReducer = (state = postNum, action) => {
  if (state === undefined) {
    return { postNum: 1, };
  }

  switch (action.type) {
    case 'CHANGE':
      return { postNum: action.postNum, };
    default:
      return { postNum: 1, };
  }
}

export default paramsReducer;