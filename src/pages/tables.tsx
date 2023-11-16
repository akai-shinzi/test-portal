import MainBoard from '@/templates/MainBoard';
import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <MainBoard>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </MainBoard>
  );
};

export default Tables;
