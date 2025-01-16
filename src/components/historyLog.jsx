import React, { useState } from 'react'
import data from '../assets/data/data.json';
import { Table, Pagination } from 'react-bootstrap';

const HistoryLog = () => {
    const historyList = data?.historyList;

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(historyList.length / rowsPerPage);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = historyList.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <div className='sub-header'>
                History Log
            </div>
            <div className='history-table'>
                <Table responsive className='mb-0'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>NEW INVENTORY</th>
                            <th>NEW TOTAL MSRP</th>
                            <th>New Average MSRP</th>
                            <th>Used inventory</th>
                            <th>Used total MSRP</th>
                            <th>Used Average MSRP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.date}</td>
                                <td>{row.newInvetory}</td>
                                <td>{row.totalMSRP}</td>
                                <td>{row.avgMSRP}</td>
                                <td>{row.usedInventory}</td>
                                <td>{row.usedTotalMSRP}</td>
                                <td>{row.usedAvgMSRP}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                {/* Pagination Controls */}
                <div className='paginator-cnt'>
                    <Pagination>
                        <Pagination.First
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        />
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={currentPage === index + 1}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                        <Pagination.Last
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination>
                </div>
            </div>
        </>
    )
}

export default HistoryLog