"use client";
import React, { useState } from "react";

import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
} from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputNoLabel from "@/components/InputNoLable";
import HeaderDropDown from "@/components/HeaderDropDown";

import row3Column1 from "@/data/tables/row3Column1";
import row3Column1Columns from "@/data/columns/row3Column1Columns";
import Link from "next/link";

const CategoryManagementPage = () => {
  const options = [
    { key: "1", label: "전체" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];

  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row3Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row3Column1.slice(start, end));
    return row3Column1.slice(start, end);
  }, [page, row3Column1, viewValue, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          콘텐츠 관리
        </h2>

        <div className="mt-4 bg-mainWhite py-7 px-9 rounded-[20px]">
          <div className="flex items-center justify-between ">
            <DropDownWithLabel
              title="카테고리"
              options={options}
              defaultSelectedKeys="1"
              titleStyles=" text-mainBlack text-base w-[90px]"
              insideStyles=" w-[310px] h-[44px]"
            />

            <DropDownWithLabel
              title="연령"
              options={options}
              defaultSelectedKeys="1"
              titleStyles=" text-mainBlack text-base w-[70px]"
              insideStyles="w-[310px] h-[44px]"
            />

            <Button className="h-[46px] w-[190px] rounded-[5px] bg-mainPurple text-mainWhite text-base">
              검색
            </Button>
          </div>

          <div className="mt-[20px] flex items-center justify-between ">
            <InputWithLabel
              label="제목"
              placeholder="닉네임"
              labelStyles=" text-mainBlack text-base w-[90px]"
              inputStyles="w-[310px] h-[44px]"
            />
            <DropDownWithLabel
              title="유형"
              options={options}
              defaultSelectedKeys="1"
              titleStyles=" text-mainBlack text-base w-[70px]"
              insideStyles=" w-[310px] h-[44px]"
            />
            <Button className="h-[46px] w-[190px] rounded-[5px] bg-bgPurple text-mainPurple text-base">
              초기화
            </Button>
          </div>
        </div>
      </header>

      <main className="rounded-[20px] bg-white py-6 px-5 mt-6 ">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px] text-mainBlack">총 00건</p>

          <div className="flex justify-center items-center gap-3">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[139px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <div className="flex items-center gap-3">
              <Button
                aria-label="Header"
                className="bg-mainGray text-mainWhite font-normal text-base w-[28px] rounded-[5px]"
              >
                삭제
              </Button>
              <Button
                aria-label="Header"
                className="bg-mainBlack text-mainWhite font-normal text-base w-[28px] rounded-[5px]"
              >
                추가
              </Button>
            </div>
          </div>
        </div>

        <article className="mt-5">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
              ],
              td: ["px-6  text-center font-normal text-base text-[#363941] "],
            }}
            bottomContent={
              <div className="flex w-full justify-center  mt-8">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn className="flex justify-center items-center">
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.number)
                              .includes(id)
                        )
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className={`size-[14px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>

              <React.Fragment>
                {row3Column1Columns.map((column) => (
                  <TableColumn key={column.key}>{column.name}</TableColumn>
                ))}
              </React.Fragment>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[14px] rounded-[2px]`}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.years}</TableCell>
                  <TableCell>{row.category2}</TableCell>
                  <TableCell>{row.contentTitle}</TableCell>
                  <TableCell>
                    <Link
                      href="/admin/content/content-management/1"
                      className="text-mainPurple underline underline-offset-2"
                    >
                      {row.viewDetails}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default CategoryManagementPage;
