// import React,{useEffect} from 'react'
// import { useTable, useFilters, useGlobalFilter, useSortBy ,usePagination } from 'react-table';
// export default function ReactTable(props) {
//     const {columns, data, isEdit, isDelete, isCreate, isShow, pageSize, setPropPageSize,
//             order, product, showDelete, showEdit, showAdd, handleShow} = props;
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         page,
//         prepareRow,
//         pageOptions,
//         setPageSize,
//         state,
//         allColumns
//     } = useTable(
//         {
//         columns,
//         data,
//         initialState: {
//             pageSize: (pageSize !== undefined)?pageSize: 100000,
//             hiddenColumns: columns.map(column => {
//                 if (column.show === false) return column.accessor || column.id;
//             }),
//         } 
//         },
//         useFilters,
//         useGlobalFilter,
//         useSortBy,
//         usePagination
//     );
//     const handleChangePageSize=(value)=>{
//         setPropPageSize(value);
//         setPageSize(value)
//     }
//     return (
//         <div className='p-4'>
//             <div className='d-flex justify-content-end mb-3'>
//                 {product && <select onChange={e => handleChangePageSize(e.target.value)} style={{width: "80px"}} className="p-0 form-select">
//                     <option selected>15</option>
//                     <option>25</option>
//                     <option>50</option>
//                     <option>100</option>
//                 </select>}
//                 {isCreate ? <button className='btn btn-primary float-end' onClick={()=>showAdd()}>+Add</button>: null}
//             </div>
        
//             <table className="table table-striped table-hover table-bordered" {...getTableProps()}>
//                 <thead>
//                     {
//                         headerGroups.map(headerGroup => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {headerGroup.headers.map(column => (
//                                     <th scope="col" {...column.getHeaderProps()}>
//                                         {column.render('Header')}
//                                     </th>
//                                 ))}
//                                 {(isShow ||isDelete || isEdit) ? <th style={{width: '120px'}}>Примечания</th>:null}
//                             </tr>
//                         ))
//                     }
//                 </thead>
//                 <tbody>
//                 {
//                     page.map(row => {
//                     prepareRow(row)
//                     return (
//                             <tr style={order?{backgroundColor: row.original.color}:null} scope="row" {...row.getRowProps()}>
//                                 {
//                                     row.cells.map(cell => {
//                                         return <td {...cell.getCellProps()}>
//                                             {cell.render('Cell')}
//                                         </td>
//                                     })
//                                 }
//                                 {(isShow || isDelete || isEdit) ?
//                                     <td style={{width: '60px'}}>
//                                         {
//                                             isEdit ? <button
//                                                 onClick={()=>showEdit(row.original._id)} 
//                                                 className='btn btn-sm btn-primary me-2'>
//                                                 <i className='fa fa-edit'></i>
//                                             </button>: null
//                                         }
//                                         {
//                                             isDelete?<button 
//                                                 onClick={()=>showDelete(row.original._id)} 
//                                                 className='btn btn-sm btn-danger'>
//                                                 <i className='fa fa-trash-alt'></i>
//                                             </button>:null
//                                         }
//                                         {
//                                             isShow?<button
//                                                 onClick={()=>handleShow(order ?row.original._id: row.original.order._id)} 
//                                                 className='btn btn-sm btn-info'
//                                             > <i className='fa fa-eye'></i></button>:null
//                                         }
//                                         {
//                                             product &&
//                                         <a  className='btn btn-sm btn-primary mt-2 me-2'
//                                             target="_blank" 
//                                             href={row.original.link} 
//                                             title='Original site'><i className='fa fa-link'></i></a>
//                                         }{
//                                             product && 
//                                         <a  className='btn btn-sm btn-primary mt-2'
//                                             target="_blank" 
//                                             href={`https:/clozzone.com/product/${row.original._id}`} 
//                                             title='This site'><i className='fa fa-link'></i></a>
//                                         }
//                                     </td>: null
//                                 }
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
