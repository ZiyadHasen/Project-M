const demo = [
  {
    number: 1,
    category: "놀이방법",
    title: "제목 텍스트 영역",
    author: "닉네임",
    createdDate: "YYYY-MM-DD",
    viewDetails: "상세보기",
  },
];

const row4Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row4Column1;
