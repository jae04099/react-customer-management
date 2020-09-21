import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 1080
    }
})

const customer = [
    {
        id: 1,
        image: "https://placeimg.com/64/64/1",
        name: "홍길동",
        birth: "971027",
        gender: "female",
        job: "FE developer",
    },
    {
        id: 2,
        image: "https://placeimg.com/64/64/2",
        name: "김길동",
        birth: "971027",
        gender: "male",
        job: "BE developer",
    },
    {
        id: 3,
        image: "https://placeimg.com/64/64/3",
        name: "박길동",
        birth: "971027",
        gender: "male",
        job: "Devops Developer",
    },
];
class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customer.map((c) => {
                            return (
                                <Customer
                                    key={c.id}
                                    id={c.id}
                                    image={c.image}
                                    name={c.name}
                                    birth={c.birth}
                                    gender={c.gender}
                                    job={c.job}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
// 데이터를 주고 받고 저장하며, 하위 컴포넌트(lp.js/cart.js)의 데이터 변화를 연결시켜주는 중심 컴포넌트
export default withStyles(styles)(App);
