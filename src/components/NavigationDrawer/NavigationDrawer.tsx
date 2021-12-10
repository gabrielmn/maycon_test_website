import React, { Component } from 'react';
import { withRouter, NavLink, RouteComponentProps } from 'react-router-dom';
import classes from './NavigationDrawer.module.css';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu_black_48dp.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close_black_48dp.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home_black_48dp.svg';
import { ReactComponent as ProductsIcon } from '../../assets/icons/inventory_2_black_48dp.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/category_black_48dp.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout_black_48dp.svg';

interface Props extends RouteComponentProps{

}

interface State {
    open: boolean
}

export default withRouter(class NavigationDrawer extends Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            open: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.onClickHome = this.onClickHome.bind(this);
        this.onClickProducts = this.onClickProducts.bind(this);
        this.onClickCategories = this.onClickCategories.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    toggleDrawer() {
        this.setState((currentSate) => {
            return {
                open: !currentSate.open
            }
        })
    }

    onClickHome(){
        this.props.history.push('/panel');
    }

    onClickProducts(){
        this.props.history.push('/panel/products');
    }

    onClickCategories(){
        this.props.history.push('/panel/categories');
    }

    onClickLogout(){
        this.props.history.push('/');
    }

    render() {
        return (
            <header className={classes.container + ' ' + ((this.state.open) ? classes.open : classes.close)}>
                {(this.state.open) ? <CloseIcon className={classes.drawer_icon} onClick={this.toggleDrawer} /> : <MenuIcon className={classes.drawer_icon} onClick={this.toggleDrawer} />}
                <ul className={classes.list}>
                    <li className={classes.list_item}>
                        <HomeIcon className={classes.item_icon} onClick={this.onClickHome}/>
                        <NavLink className={classes.link + ' ' + ((this.state.open) ? null : classes.link_close)} activeClassName={classes.active + ' ' + ((this.state.open) ? null : classes.link_close)} to='/panel'>Home</NavLink>
                    </li>
                    <li className={classes.list_item}>
                        <ProductsIcon className={classes.item_icon} onClick={this.onClickProducts}/>
                        <NavLink className={classes.link + ' ' + ((this.state.open) ? null : classes.link_close)} activeClassName={classes.active + ' ' + ((this.state.open) ? null : classes.link_close)} to='/panel/products'>Products</NavLink>
                    </li>
                    <li className={classes.list_item}>
                        <CategoriesIcon className={classes.item_icon} onClick={this.onClickCategories}/>
                        <NavLink className={classes.link + ' ' + ((this.state.open) ? null : classes.link_close)} activeClassName={classes.active + ' ' + ((this.state.open) ? null : classes.link_close)} to='/panel/categories'>Categories</NavLink>
                    </li>
                    <li className={classes.list_item}>
                        <LogoutIcon className={classes.item_icon} onClick={this.onClickLogout}/>
                        <NavLink className={classes.link + ' ' + ((this.state.open) ? null : classes.link_close)} activeClassName={classes.active + ' ' + ((this.state.open) ? null : classes.link_close)} to='/'>Logout</NavLink>
                    </li>
                </ul>
            </header>
        )
    }
})