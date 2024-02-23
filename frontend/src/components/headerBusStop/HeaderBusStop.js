import './HeaderBusStop.css'
import back from '../../assets/icons/back.svg';
import help from '../../assets/icons/help.svg';
import { useNavigate } from 'react-router-dom';
import ReportService from "../../services/report/report.service";
import { FilePdfOutlined } from '@ant-design/icons';

function HeaderBusStop() {
  const onClick = (e) => {
    ReportService();
  };
  const navigate=useNavigate()
  return (
    <div className="bodyHeader">
      <div className='contentHeader'>
      <div className="back" onClick={()=>navigate(`/Line`)}>
        <img src={back} alt="Volver" />
      </div>
      <div className="pageTitle">
        <h1>Paradas</h1>
      </div>
      <div className='report'>
      <FilePdfOutlined onClick={onClick} />
      </div>
      <div className='helpHeader'>
      <a href="/documentos_de_ayuda/Project-Desic.html" target="Blank">
        <img src={help} alt="Ayuda" />
        </a>
      </div>
    </div>
    </div>
  );
}

export default HeaderBusStop;