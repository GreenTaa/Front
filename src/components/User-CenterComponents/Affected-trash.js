import React, { useEffect, useState} from "react";
import { Card, CardBody, CardTitle, Dropdown,Table } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import axios from "axios";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import ReactTooltip from 'react-tooltip';

 const BestSellers = ({title="dashboards.best-sellers"}) => {
    const [trash,settrash] = useState();

    const gettrash= async () => {
        try {
            const Supp = await axios.get(
                "http://localhost:3000/trash/"
            ).then(function(doc){
                if(JSON.stringify(doc.data) !== JSON.stringify(trash))
                {
                    settrash(doc.data);
                }
            
            });
           
            // set State
        } catch (err) {
            console.error(err.message);
        }
    };
  useEffect(() => {
    gettrash()
    const interval = setInterval(() => {
      gettrash()
    }, 5000);
    return () => clearInterval(interval);
  }
  , [])  


  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };


  
  return (
    <Colxx xxs="12">
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.bootstrap-borderless" />
        </CardTitle>
        <Table borderless>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {trash &&
                trash.map((dm, index) => (<>
                  <ReactTooltip />
            <tr>
              
              <th scope="row">{index+1}</th>
         <td width="200px" data-tip={dm.Location} >{dm.Location.substring(0, 30)}...</td> 
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
           </>
            ))}
          </tbody>
        
        </Table>
      </CardBody>
    </Card>
  </Colxx>
  );
};
export default BestSellers;
