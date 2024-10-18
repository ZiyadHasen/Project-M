const demo = [
  {
    id: 0,
    number: 0,
    nickname: "닉네임",
    loginType: "카카오",
    joinDate: "YYYY-MM-DD ",
    rating: "등급1",
    viewDetails: "상세보기",
  },
];

const row1Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column1;
