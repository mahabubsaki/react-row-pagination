import { useContext, useState } from 'react';
import './App.css';
import { MainContext } from './context/StateProvider';
import TabButtons from './common/TabButtons';
import TableRows from './common/TableRows';
import PageButtons from './common/PageButtons';
import { GrNext, GrPrevious } from 'react-icons/gr';


function App() {
  const { data } = useContext(MainContext);
  const [orderType, setOrderType] = useState('All');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);


  const filteredData = data.filter(item => {
    if (orderType === 'All') {
      return true;
    } else {
      return item.deliveryType === orderType;
    }
  });

  const totalPage = Math.ceil(filteredData.length / perPage);
  const handlePerPageDate = (e) => {
    setPage(0);
    setPerPage(+e.target.value);
  };

  return (
    <div className=' my-10'>
      <div className='my-4'>
        <p className='text-center text-primary-focus text-xl'>View Order By</p>
        <div className='flex justify-center gap-4 my-3'>
          <TabButtons setPage={setPage} orderType={orderType} setOrderType={setOrderType} type={'All'}>All</TabButtons>
          <TabButtons setPage={setPage} orderType={orderType} setOrderType={setOrderType} type={'Regular'}>Regular</TabButtons>
          <TabButtons setPage={setPage} orderType={orderType} setOrderType={setOrderType} type={'Express'}>Express</TabButtons>
        </div>
      </div>
      <div className='my-4'>
        <p className='text-center text-primary-focus text-xl'>Choose page per data</p>
        <div className='flex justify-center my-3'>
          <select onChange={handlePerPageDate} className="select select-success  w-full max-w-xs">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      <div className='my-4'>
        <p className='text-center text-primary-focus text-xl'>Choose page no.</p>
        <div className='flex flex-wrap justify-center items-center max-w-7xl mx-auto gap-2 my-3'>
          {totalPage > 1 ? <button onClick={() => setPage(pre => pre - 1)} className={`btn btn-sm ${page === 0 ? 'btn-disabled' : 'btn-success'}`} ><GrPrevious /></button> : null}
          {new Array(totalPage).fill(0).map((_, index) => {
            return <PageButtons setPage={setPage} page={page} key={index} index={index} />;
          })}
          {totalPage > 1 ? <button onClick={() => setPage(pre => pre + 1)} className={`btn btn-sm ${page === (totalPage - 1) ? 'btn-disabled' : 'btn-success'}`}><GrNext /></button> : null}
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>OrderID</th>
                <th>OrderType</th>
                <th>Email</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>

              {filteredData.slice(page * perPage, ((page * perPage) + perPage)).map(({ id, orderId, customerName, deliveryType, email, price, date }, index) => {
                return <TableRows key={id} orderId={orderId} customerName={customerName} deliveryType={deliveryType} email={email} price={price} date={date} index={index + 1} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
