import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationDrawer from '../../components/NavigationDrawer/NavigationDrawer';
import ProductsScreen from '../../screens/ProductsScreen/ProductsScreen';
import CategoriesScreen from '../../screens/CategoriesScreen/CategoriesScreen'
import classes from './PanelContainer.module.css';

export default class PanelContainer extends Component {

    render() {
        return (
            <div className={classes.container}>
                <NavigationDrawer />
                <main className={classes.main}>
                    <Switch>
                        <Route path='/panel' exact>
                            Home page not implemented.
                        </Route>
                        <Route path='/panel/products' exact>
                            <ProductsScreen/>
                        </Route>
                        <Route path='/panel/categories' exact>
                            <CategoriesScreen/>
                        </Route>
                        <Route path='*'>
                            <Redirect to='/not-found' />
                        </Route>
                    </Switch>
                </main>
            </div>
        )
    }
}