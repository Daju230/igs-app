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


const glassType = [
    {
        value: 15.5,
        label: 'Clear Annealed',
    },
    {
        value: 24,
        label: 'Clear Tempered',
    },
    {
        value: 25,
        label: 'Low-E Annealed',
    },
    {
        value: 35,
        label: 'Low-E Tempered',
    },
];

const argon = [
    {
        value: .5,
        label: 'With Argon',
    },
    {
        value: 0,
        label: 'Without Argon'
    },
];

const spacerColor = [
    {
        value: 0,
        label: 'Silver',
    },
    {
        value: 1,
        label: 'Light or Dark Bronze',
    },
];

const grids = [
    {
        value: 0,
        label: 'No Grids',
    },
    {
        value: 6,
        label: 'Has Grids',
    },
];

const glassTint = [
    {
        value: 0,
        label: 'No Tint',
    },
    {
        value: 6,
        label: 'Bronze or Grey Tint',
    },
];

class IG extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: '',
            height: '',
            glassType: '',
            argon: '',
            spacerColor: '',
            grids: '',
            glassTint: '',
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

    handleGlassType = event => {
        this.setState({
            glassType: event.target.value,
        });
    };

    handleArgon = event => {
        this.setState({
            argon: event.target.value,
        });
    };

    handleSpacerColor = event => {
        this.setState({
            spacerColor: event.target.value,
        });
    };
    
    handleGrids = event => {
        this.setState({
            grids: event.target.value,
        });
    };

    handleGlassTint = event => {
        this.setState({
            glassTint: event.target.value,
        });
    };

    onClickResult = () => {
        this.setState({result: true});
    };

    sqftPrice(){
        let sqft = Math.round(((this.state.width * this.state.height)/144));
            if (sqft > 30) {
                sqft += 6;
            }
            else if (sqft > 20) {
                sqft += 4;
            }
        return Math.round((sqft)*this.state.glassType)
    };

    argonPrice(){
        let sqft = ((this.state.width * this.state.height)/144);
        return (sqft)*this.state.argon
    };
    spacerPrice(){
        let sqft = ((this.state.width * this.state.height)/144);
        return (sqft)*this.state.spacerColor
    };
    gridsPrice(){
        let sqft = ((this.state.width * this.state.height)/144);
        return (sqft)*this.state.grids
    };
    tintPrice(){
        let sqft = ((this.state.width * this.state.height)/144);
        return (sqft)*this.state.glassTint
    };
    laborPrice(){
        return Number(this.state.labor)
    };
 

    quote = () =>{
        const total = [this.sqftPrice(),this.argonPrice(),this.spacerPrice(),this.gridsPrice(),this.tintPrice(),this.laborPrice()];
        const quote = Math.round((total.reduce((a,b) => a + b, 0)));
        return `The quote is $${quote}`;
    };

        render(){
        const { classes } = this.props;
        return (
        <Layout>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid item xs={12}>
                    <h2 align="center">Insulated Glass Quote</h2>
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
                    id="outlined-select-glassType" 
                    select
                    label="Type of Glass" 
                    value={this.state.glassType} 
                    onChange={this.handleGlassType}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {glassType.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-argon" 
                    select
                    label="Argon" 
                    value={this.state.argon} 
                    onChange={this.handleArgon}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {argon.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-spacerColor" 
                    select
                    label="Spacer Color" 
                    value={this.state.spacerColor} 
                    onChange={this.handleSpacerColor}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {spacerColor.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-grids" 
                    select
                    label="Grids" 
                    value={this.state.grids} 
                    onChange={this.handleGrids}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {grids.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                    id="outlined-select-glassTint" 
                    select
                    label="Glass Tint" 
                    value={this.state.glassTint} 
                    onChange={this.handleGlassTint}
                    className={classes.textField}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="outlined"
                    >
                        {glassTint.map(option => (
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

export default withStyles(styles)(IG);