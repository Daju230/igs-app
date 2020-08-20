import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Layout from "../components/layout";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: '25ch',
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(0,45),
        width: '25ch',
    },
});


const glassThickness = [
    {
        value: 10.9,
        label: '1/8" Tempered',
    },
    {
        value: 11,
        label: '1/4" Annealed',
    },
    {
        value: 12,
        label: '3/16" Tempered',
    },
    {
        value: 12.5,
        label: '1/4" Tempered',
    },
];

const edgeWork = [
    {
        value: 0,
        label: 'No edgework',
    },
    {
        value: .5,
        label: 'Seamed'
    },
    {
        value: 2.5,
        label: 'Shop Polished'
    },
    {
        value: 0.1,
        label: 'Machine Polished'
    },
];

const notSquare = [
    {
        value: 0,
        label: 'Square',
    },
    {
        value: .3,
        label: 'Is not square'
    },
];

const template = [
    {
        value: 0,
        label: 'No template needed',
    },
    {
        value: 90,
        label: 'Template needed'
    },
];

const circle = [
    {
        value: 0,
        label: 'Not a cirlce',
    },
    {
        value: .3,
        label: 'Is a circle',
    },
];


class SP extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: '',
            height: '',
            glassThickness: '',
            edgeWork: '',
            notSquare: '',
            template: '',
            circle: '',
            labor: '',
            result: false,
            route: [],
        };
    };

    handleWidth = event => {
        this.setState({
            width: event.target.value,
        });
    };
    handleHeight = event => {
        this.setState({
            height: event.target.value,
        });
    };
    handleLabor = event => {
        this.setState({
            labor: event.target.value,
        });
    };

    handleGlassThickness = event => {
        this.setState({
            glassThickness: event.target.value,
        });
    };

    handleEdgework = event => {
        this.setState({
            edgeWork: event.target.value,
            edgeLabel: event.target.label,
        });
    };

    handleNotSquare = event => {
        this.setState({
            notSquare: event.target.value,
        });
    };

    handleTemplate = event => {
        this.setState({
            template: event.target.value,
        });
    };

    handleCircle = event => {
        this.setState({
            circle: event.target.value,
        });
    };

    onClickResult = () => {
        this.setState({result: true});
    };

    sqftPrice(){
        console.log(this);
        let sqft = Math.round(((this.state.width * this.state.height)/144));
            if (sqft < 3) {
                sqft = 3;
            }
            
        return Math.round((sqft)*this.state.glassThickness)
        
    };

    edgeWorkPrice(){
        let sqft = ((this.state.width * this.state.height)/144);
        return (sqft)*this.state.edgeWork
    };

    notSquarePrice(){
        let sqft = ((this.state.width * this.state.height)/144);
        let finalPrice = Math.round((sqft)*this.state.glassThickness);
        return (finalPrice)*this.state.notSquare
    };

    templatePrice(){
        return this.state.template
    };

    circle(){
        let sqft = ((this.state.width * this.state.height)/144);
        let finalPrice = Math.round((sqft)*this.state.glassThickness);
        return (finalPrice)*this.state.circle
    };
    machinePolishPrice(){
        let linealInches = ((this.state.width + this.state.height)*2);
        let machinePolish = () => this.state.edgework === 'Machine Polished' ? (linealInches)*.5 : 0;
        return (machinePolish())
    };
    laborPrice(){
        return Number(this.state.labor)
    };

    quote = () =>{
        const total = [this.sqftPrice(),this.notSquarePrice(),this.templatePrice(),this.circle(),this.edgeWorkPrice(),this.machinePolishPrice(),this.laborPrice()];
        console.log(total)
        const quote = Math.round((total.reduce((a,b) => a + b, 0)));
        return `The quote is $${quote}`;
    };

        render(){
        const { classes } = this.props;
        return (
        <Layout>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid item xs={12}>
                    <h2 align="center">Single Pane Glass Quote</h2>
                    <br/>
                    <TextField 
                    id="outlined-number" 
                    label="Width" 
                    value={this.state.width} 
                    onChange={this.handleWidth}
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField 
                    id="outlined-number" 
                    label="Height" 
                    value={this.state.height} 
                    onChange={this.handleHeight}
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField 
                    id="outlined-select-glassThickness" 
                    select
                    label="Thickness of Glass" 
                    value={this.state.glassThickness} 
                    onChange={this.handleGlassThickness}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {glassThickness.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-edgework" 
                    select
                    label="Edgework" 
                    value={this.state.edgeWork} 
                    onChange={this.handleEdgework}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {edgeWork.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-notSquare" 
                    select
                    label="Not Square" 
                    value={this.state.notSquare} 
                    onChange={this.handleNotSquare}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {notSquare.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-template" 
                    select
                    label="Template" 
                    value={this.state.template} 
                    onChange={this.handleTemplate}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {template.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-circle" 
                    select
                    label="Circle" 
                    value={this.state.circle} 
                    onChange={this.handleCircle}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {circle.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-number" 
                    label="Labor" 
                    value={this.state.labor} 
                    onChange={this.handleLabor}
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                </Grid>
            </form>
            <div>
                <p align="center">{this.state.result ? this.quote() : null}</p>
                <br/>
                <br/>
                <Button className={classes.button} variant="contained" onClick={this.onClickResult}>Quote</Button>
            </div>
        </Layout>
        );
    };
};

export default withStyles(styles)(SP);