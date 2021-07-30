import { makeStyles, Grid, Paper } from '@material-ui/core'
import React from 'react';
import BlogCard from '../Components/BlogCard';
import ItemList from '../ItemList';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})
export default function Bloglist() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={2} className={classes.root} >
                {ItemList.map((item, index) =>
                    <Grid item xs={12} md={6} lg={4} justifyContent="center" key={index}>
                        <Paper ><BlogCard blogContent={item} />
                        </Paper>
                    </Grid>
                )}
            </Grid>


        </>
    )
}
