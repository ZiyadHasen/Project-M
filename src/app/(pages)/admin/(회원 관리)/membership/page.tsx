'use client';
import React, { useState } from 'react';

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
} from '@nextui-org/react';
import InputWithLabel from '@/components/InputWithLabel';
import DropDownWithLabel from '@/components/DropDownWithLabel';
import InputNoLabel from '@/components/InputNoLable';
import HeaderDropDown from '@/components/HeaderDropDown';

import row1Column1 from '@/data/tables/row1Column1';
import row1Column1Columns from '@/data/columns/row1Column1Columns';
import Link from 'next/link';
import { div } from 'framer-motion/client';

const MemberManagementPage = () => {
  // const options = [
  //   { key: '1', label: '전체' },
  //   { key: '2', label: '일반회원' },
  //   { key: '3', label: '판매자' },
  //   { key: '4', label: '관리자' },
  // ];

  // const viewOptions = [
  //   {
  //     key: '10',
  //     label: '10개씩 보기',
  //   },
  //   {
  //     key: '20',
  //     label: '20개씩 보기',
  //   },
  //   {
  //     key: '50',
  //     label: '50개씩 보기',
  //   },
  //   {
  //     key: '100',
  //     label: '100개씩 보기',
  //   },
  // ];

  // const viewOptionsDefault = viewOptions[0].key;

  // const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // // Pagination Logic
  // const [page, setPage] = useState(1);

  // const rowsPerPage = parseInt(viewValue);

  // const pages = Math.ceil(row1Column1.length / rowsPerPage);

  // const [currentData, setCurrentData] = useState<any>();

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   setCurrentData(row1Column1.slice(start, end));
  //   return row1Column1.slice(start, end);
  // }, [page, row1Column1, viewValue, rowsPerPage]);

  // // Selection Logic
  // const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  // const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
  //   number[]
  // >([]);

  return <div>hello world</div>;
};

export default MemberManagementPage;
