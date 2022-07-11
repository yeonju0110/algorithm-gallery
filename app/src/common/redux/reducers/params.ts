export const changePost = () => ({
  type: 'CHANGE'
})

type action = {
  type: string;
  postNum?: number;
}

const paramsReducer = (state: string, action?: action) => {
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