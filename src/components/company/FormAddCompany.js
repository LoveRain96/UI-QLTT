import React from 'react';
import {Collapse,Card, CardBody, Form, Label, Input} from  'reactstrap'
import {Button} from "antd";
import {connect} from 'react-redux'
import {addCompany} from "./action";
//import AddArea from "./AddArea";

const mapDispatchToProps = function (dispatch) {
    return {
        addCompany : function (name, phoneManager, emailManager, nameManager, address ) {
            dispatch(addCompany(name, phoneManager, emailManager, nameManager, address))
        }
    }

};

const mapStateToProps   = function (state) {
    return {
        companies : state
    }
};

class FormAddCompany extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phoneManager :'',
            emailManager : '',
            nameManager  : '',
            address      : ''
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.addCompany(this.state.name, this.state.phoneManager, this.state.emailManager,
            this.state.nameManager, this.state.address);

    }

    nameChange(event) {
        this.setState({name: event.target.value})
    }

    phoneManagerChange(event) {
        this.setState({phoneManager: event.target.value})
    }

    nameManagerChange(event) {
        this.setState({nameManager: event.target.value})
    }

    emailManagerChange(event) {
        this.setState({emailManager: event.target.value})
    }

    addressChange(event) {
        this.setState({address: event.target.value})
    }

    render() {
        return (
            <Collapse isOpen={this.props.collapse}>
                <Card>
                    <CardBody>
                        <Form onSubmit={this.handleClick.bind(this)}>
                            <Label>Name</Label>
                            <Input name="name" type="text" onChange={this.nameChange.bind(this)}
                                   placeholder="Enter name company"/>
                            <Label>Phone Manager</Label>
                            <Input onChange={this.phoneManagerChange.bind(this)} placeholder="Enter phone manager" name="phoneManager" />
                            <Label>Email Manager</Label>
                            <Input onChange={this.emailManagerChange.bind(this)} placeholder="Enter email manager" name="emailManager" />
                            <Label>Name Manager</Label>
                            <Input onChange={this.nameManagerChange.bind(this)} placeholder="Enter name manager" name="nameManager" />
                            <Label>Address</Label>
                            <Input onChange={this.addressChange.bind(this)} placeholder="Enter address" name="address"/>
                            <br/>
                            <Button onClick={this.handleClick.bind(this)}>SAVE</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Collapse>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormAddCompany)