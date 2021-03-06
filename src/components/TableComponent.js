import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const { SearchBar } = Search;
const columns = [
    {
        dataField: "id",
        text: "ID",
        sort: true,
        headerStyle: () => {
            return { width: "5%" }; 
    },
    },
    {
        dataField: "nama",
        text: "Nama",
        sort: true,
    },
    {
        dataField: "alamat",
        text: "Alamat",
        sort: true,
    },
    {
        dataField: "link",
        text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/" + row.id}>
                    <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} className="mr-2"/>
                        Detail
                    </Button>
                </Link>

                <Link to={"edit/" + row.id}>
                    <Button color="dark" className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="mr-2"/>
                        Edit
                    </Button>
                </Link>

                <Link>
                    <Button color="dark" className="mr-2">
                        <FontAwesomeIcon icon={faTrash} className="mr-2"/>
                        Delete
                    </Button>
                </Link>
            </div>
            );  
        },
    },
];
const defaultSorted = [
{
    dataField: "id",
    order: "asc",
}];

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}


const TableComponent = (props) => {
return (
    <Container>

        <ToolkitProvider
                bootstrap4
                keyField="id"
                data={props.users}
                columns={columns}
                defaultSorted={defaultSorted}
                search>
            {
                props => (
                <div>
                    <Row>
                        <Col>
                            <Link to="/create">
                                <Button color="dark">
                                <FontAwesomeIcon icon={faUserPlus} className="mr-2"/>
                                    Create User
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <div className="float-right">
                                <SearchBar { ...props.searchProps } placeholder="Search ..." />
                            </div>  
                        </Col>
                    </Row>
                    <BootstrapTable
                    { ...props.baseProps } pagination={ paginationFactory() } 
                    />
                </div>
                )
            }
        </ToolkitProvider>
    </Container>
);
};

export default connect(mapStateToProps, null)(TableComponent);
