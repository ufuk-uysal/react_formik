import logo from './logo.svg';

import './App.css';
import { userSchema } from "./Validations/UserValidation";
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, FormGroup, Label, Card, CardBody, Row, Col } from 'reactstrap';
import Select from 'react-select'

const options = [
  { value: 0.1, label: "Not born yet" },
  { value: 0.3, label: "Baby - 0 to 3 months" },
  { value: 0.6, label: "Baby - 3 to 6 months" },
  { value: 0.12, label: "Baby - 6 to 12 months" },
  { value: 0.18, label: "Baby - 12 to 18 months" },
  { value: 0.24, label: "Baby - 18 to 24 months" },
  { value: 2, label: "2 years" },
  { value: 3, label: "3 years" },
  { value: 4, label: "4 years" },
  { value: 5, label: "5 years" },
  { value: 6, label: "6 years" },
  { value: 7, label: "7 years" },
  { value: 8, label: "8 years" },
  { value: 9, label: "9 years" },
  { value: 10, label: "10 years" },
  { value: 11, label: "11 years" },
  { value: 12, label: "12 years" },
  { value: 13, label: "13 years" },
  { value: 14, label: "14 years" }
]


function App() {

  const schema = Yup.object().shape({
    name: Yup.string().test({
      name: 'length',
      test: val => val && val.trim().length > 0,
      message: 'name hatası'
    }),
    email: Yup.string().test({
      name: 'length',
      test: val => val && val.trim().length > 0,
      message: 'email hatası'
    }),
    password: Yup.string().test({
      name: 'length',
      test: val => val && val.trim().length > 0,
      message: 'password hatası'
    }),

    topics: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required")

    })

  });

  const createUser = async (event) => {
    console.log("ufuk")
    // event.preventDefault();
    // let formData = { 
    //   name: event.target[0].value,
    //   email: event.target[1].value,
    //   password: event.target[2].value,
    // };
    // const isValid = await userSchema.isValid(formData);
    // console.log(isValid);

  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Card>
        <CardBody>

          <Form onSubmit={handleSubmit(createUser)}>

            <Row >
              <Col md="3" xs="3">
                <Label for="name2">Name</Label>
              </Col>
              <Col>
                <Input id="name2" ref={register} name="name" type="text" placeholder="Name..." />
              </Col>
              {errors.name?.message && <p>{errors.name?.message}</p>}
            </Row>


            <Row >
              <Col md="3" xs="3">
                <FormGroup>
                  <Label for="name2">email</Label>
                  <Input ref={register} name="email" type="text" placeholder="email@email.com" />
                </FormGroup>
                {errors.email?.message && <p>{errors.email?.message}</p>}
              </Col>
            </Row >



            <Row >
              <Col md="3" xs="3">
              <FormGroup>
                  <Label for="name2">topics</Label>
                  <Select   ref={register} name="topics" 
                  
                  options={options}
                  
                  
                  />
                  
                  </FormGroup>

                  
                  {errors.topics?.message && <p>{errors.topics?.message}</p>}
              </Col>
              
              </Row>
            <Row >



              <Col md="3" xs="3">
                <FormGroup>
                  <Label for="name2">Name</Label>
                  <Input ref={register} name="password" type="text" placeholder="password123" />
                </FormGroup>
                {errors.password?.message && <p>{errors.password?.message}</p>}
              </Col>

              <Input type="submit" />

              </Row>
          
          
          </Form>

        </CardBody>
      </Card>


    </div>
  );
}

export default App;
