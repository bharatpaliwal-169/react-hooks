import React,{useState , useEffect} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const url = 'https://api.github.com/users';

export default function FetchData() {
  const [users,setUsers] = useState([]);
  const getUser = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }
  useEffect(()=>{
    getUser();
  },[]);
  return (
    <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
              {users.map((user) => {
                const {id,avatar_url,html_url,login} = user;
                return(
                    <Card key={id} className='col-12 col-sm-6 col-md-4 col-lg-3 p-2 mt-3 mb-2'>
                      <CardImg top className='img-fluid' src={avatar_url} alt="Card image" />
                      <CardBody>
                        <CardTitle tag="h5">{login}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Job</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button outline color='info' href={html_url}>View Profile</Button>
                      </CardBody>
                    </Card>
                );
              })}
            </div>
          </div>
    </React.Fragment>
  )
}
