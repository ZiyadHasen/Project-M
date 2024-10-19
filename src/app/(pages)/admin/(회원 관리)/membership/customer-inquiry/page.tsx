'use client';
import CommonHeader from '@/components/CommonHeader';
import {
  Checkbox,
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import row6Column1 from '@/data/tables/row6Column1';
import React, { useState } from 'react';

import MainHead from './head';
import BlueAndBlackBtn from '@/components/blueAndBlackBtn';

const CustomerSatisfactionInquiry = () => {
  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const pages = Math.ceil(row6Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row6Column1.slice(start, end));
    return row6Column1.slice(start, end);
  }, [page, row6Column1, 5, rowsPerPage]);

  // Selection Logic

  return (
    <section className='font-noto'>
      <header>
        <CommonHeader title='고객만족도 조회' />
        <MainHead />
      </header>

      <main className='rounded-[20px] bg-white py-6 px-5 mt-6 '>
        <article>
          <Table
            aria-label='Data Table'
            shadow='none'
            classNames={{
              th: [
                'font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center ',
              ],
              td: [
                'px-6 py-3 text-center font-normal text-base text-[#363941]', // General td styles
              ],
            }}
            bottomContent={
              <div className='flex w-full justify-center  mt-8'>
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color='secondary'
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader className='th-border-1'>
              <TableColumn>접속일자</TableColumn>
              <TableColumn>페이지 접속 수</TableColumn>
              <TableColumn>비고</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} className='border-b-1'>
                  <TableCell>
                    <Link
                      href='/'
                      className='text-blue underline underline-offset-2'
                    >
                      {row.evaluationDay}
                    </Link>
                  </TableCell>
                  <TableCell>{row.numberOfEvaluator}</TableCell>
                  <TableCell width='400px'>{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default CustomerSatisfactionInquiry;
