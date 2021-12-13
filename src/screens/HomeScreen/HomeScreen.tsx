import React, { Component } from 'react';
import Text from '../../components/Text/Text';
import { getAllProduct, getAllCategories } from '../../api/productAPI';

import classes from './HomeScreen.module.css'

interface Props {

}

interface State {
    products: any[],
    categories: any[]
}

export default class HomeScreen extends Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            products: [],
            categories: []
        }
    }

    async componentDidMount() {
        const productsResult = await getAllProduct();
        let products: any[] = []
        if (productsResult.status === 200) {
            products = await productsResult.json();
        }
        const categoriesResult = await getAllCategories();
        let categories: any[] = []
        if (categoriesResult.status === 200) {
            categories = await categoriesResult.json();
        }
        this.setState((current) => {
            return {
                products: products,
                categories: categories
            }
        })
    }

    productList(): React.ReactNode {
        return (
            <div className={classes.product_container}>
                <Text className={classes.title}>Products List</Text>
                <div className={classes.product_list_header}>
                    <Text className={classes.product_list_header_name}>Name</Text>
                    <Text className={classes.product_list_header_category}>Category Id</Text>
                </div>
                <div className={classes.separator} />
                <div>
                    {this.state.products.map((item, index, array) => {
                        return (
                            <div key={index} className={classes.product_list_item}>
                                <img className={classes.product_list_item_image} alt={item.name} src={item.image} />
                                <Text className={classes.product_list_item_name}>{item.name}</Text>
                                <Text className={classes.product_list_item_category}>{item.categoryId}</Text>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    categoryList(): React.ReactNode {
        const list = [{ name: 'name', category: 'category' }, { name: 'name', category: 'category' }, { name: 'name', category: 'category' }]
        return (
            <div className={classes.category_container}>
                <Text className={classes.title}>Categories List</Text>
                <div className={classes.category_list_header}>
                    <Text className={classes.category_list_header_name}>Name</Text>
                </div>
                <div className={classes.separator} />
                <div>
                    {this.state.categories.map((item, index, array) => {
                        return (
                            <div key={index} className={classes.category_list_item}>
                                <img className={classes.category_list_item_image} alt={item.name} src={item.image} />
                                <Text className={classes.category_list_item_name}>{item.name}</Text>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render(): React.ReactNode {

        return (
            <div className={classes.screen}>
                {this.productList()}
                {this.categoryList()}
            </div>
        )
    }
}